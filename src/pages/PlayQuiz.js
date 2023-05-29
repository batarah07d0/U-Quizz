import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LoadingScreen } from "../component/LoadingScreen";
import { NavbarPlay } from "../component/NavbarPlay";
import { QuizAnswerButton } from "../component/QuizAnswerButton";

import { Button } from "@material-tailwind/react";
import playButton from "../assets/play-button.png";

import leaderboardData from "./leaderboard.json";

const HelloGIFAPIurl =
  "https://api.giphy.com/v1/gifs/search?api_key=9uChRAbRWSRpdXmZ359UH06ZoRKsZX8Y&limit=25&offset=0&rating=g&lang=en&q=hello";
const UserAvatarGIFAPIurl =
  "https://api.giphy.com/v1/gifs/search?api_key=9uChRAbRWSRpdXmZ359UH06ZoRKsZX8Y&q=cat&limit=25&offset=0&rating=g&lang=en";

const shuffleArray = (array) => {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

export function PlayQuiz() {
  var TriviaAPIurl = "";
  var GIFAPIurl = "";
  var category = useParams();
  if (category.type == "videogame") {
    TriviaAPIurl =
      "https://opentdb.com/api.php?amount=25&category=15&difficulty=easy&type=multiple";
    GIFAPIurl =
      "https://api.giphy.com/v1/gifs/search?api_key=9uChRAbRWSRpdXmZ359UH06ZoRKsZX8Y&limit=25&offset=0&rating=g&lang=en&q=" +
      category.type;
  } else if (category.type == "geography") {
    TriviaAPIurl =
      "https://opentdb.com/api.php?amount=25&category=22&difficulty=easy&type=multiple";
    GIFAPIurl =
      "https://api.giphy.com/v1/gifs/search?api_key=9uChRAbRWSRpdXmZ359UH06ZoRKsZX8Y&limit=25&offset=0&rating=g&lang=en&q=" +
      category.type;
  } else if (category.type == "film") {
    TriviaAPIurl =
      "https://opentdb.com/api.php?amount=25&category=11&difficulty=easy&type=multiple";
    GIFAPIurl =
      "https://api.giphy.com/v1/gifs/search?api_key=9uChRAbRWSRpdXmZ359UH06ZoRKsZX8Y&limit=25&offset=0&rating=g&lang=en&q=" +
      category.type;
  } else {
    TriviaAPIurl =
      "https://opentdb.com/api.php?amount=25&category=9&difficulty=easy&type=multiple";
    GIFAPIurl =
      "https://api.giphy.com/v1/gifs/search?api_key=9uChRAbRWSRpdXmZ359UH06ZoRKsZX8Y&limit=25&offset=0&rating=g&lang=en&q=cat";
  }

  console.log(GIFAPIurl);

  const MAXQUESTION = 15;
  const MAXTIMER = 15;

  const [quizStarted, setQuizStarted] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questions, getQuiz] = useState([]);
  const [timer, setTimer] = useState(15);
  const [score, setScore] = useState(0);
  const [GIF, setGIF] = useState("");
  const [HelloGIF, setHelloGIF] = useState("");
  const [AvatarGIF, setAvatarGIF] = useState("");
  const [shuffledChoices, setShuffledChoices] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    getAllQuiz();
  }, []);

  const getAllQuiz = () => {
    axios
      .get(TriviaAPIurl)
      .then((response) => {
        const questions = response.data.results;
        getQuiz(questions);
      })
      .catch((error) => console.error(`Error ${error}`));
  };

  // GIF sebelum kuis
  useEffect(() => {
    getHelloGIF();
  }, []);

  const getHelloGIF = () => {
    axios
      .get(HelloGIFAPIurl)
      .then((response) => {
        const randomGIFIndex = Math.floor(Math.random() * 25);
        const HelloGIF = response.data.data[randomGIFIndex].images.original.url;
        setHelloGIF(HelloGIF);
      })
      .catch((error) => console.error(`Error ${error}`));
  };

  // GIF saat kuis
  useEffect(() => {
    getAllGIF();
  }, []);

  const getAllGIF = () => {
    axios
      .get(GIFAPIurl)
      .then((response) => {
        const randomGIFIndex = Math.floor(Math.random() * 25);
        const GIF = response.data.data[randomGIFIndex].images.original.url;
        setGIF(GIF);
      })
      .catch((error) => console.error(`Error ${error}`));
  };

  // GIF untuk avatar user
  useEffect(() => {
    getAllAvatar();
  }, []);

  const getAllAvatar = () => {
    axios
      .get(UserAvatarGIFAPIurl)
      .then((response) => {
        const randomGIFIndex = Math.floor(Math.random() * 25);
        const GIF = response.data.data[randomGIFIndex].images.original.url;
        setAvatarGIF(GIF);
      })
      .catch((error) => console.error(`Error ${error}`));
  };

  // Timer
  useEffect(() => {
    if (timer === 0) {
      // Timer reached zero, move to next question or perform necessary action
      setScore(score - 50);
      setQuestionIndex(questionIndex + 1);
      setTimer(MAXTIMER); // Reset the timer for the next question
    }

    if (quizStarted && questionIndex < MAXQUESTION) {
      const timerInterval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1); // Decrease the timer value by 1
      }, 1000);

      return () => {
        clearInterval(timerInterval); // Clean up the interval when component unmounts or timer resets
      };
    }
  }, [timer, questionIndex]);

  // acak soal
  useEffect(() => {
    if (questions.length > 0) {
      const choices = questions[questionIndex].incorrect_answers.concat(
        questions[questionIndex].correct_answer
      );
      const shuffled = shuffleArray(choices);
      setShuffledChoices(shuffled);
    }
  }, [questionIndex, questions]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  if (questions == "") {
    return <LoadingScreen />;
  }

  function startQuiz() {
    setQuizStarted(true);
  }

  var choices = questions[questionIndex].incorrect_answers.concat(
    questions[questionIndex].correct_answer
  );

  let percentageTimer = (timer / MAXTIMER) * 100;
  var correctAnswer = questions[questionIndex].correct_answer;
  // console.log(correctAnswer);

  function checkAnswer(choiceIndex) {
    setQuestionIndex((prevIndex) => {
      setTimer(MAXTIMER);
      return prevIndex + 1;
    });
    if (shuffledChoices[choiceIndex] === correctAnswer) {
      setScore((prevScore) => prevScore + 100);
    } else {
      setScore((prevScore) => prevScore - 50);
    }
  }

  // Computer storage leaderboard
  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const score = event.target.score.value;
    const avatar = event.target.AvatarGIF.value;

    var localStorageLeaderboard = localStorage.getItem("leaderboardData");
    if (localStorageLeaderboard == null) {
      localStorageLeaderboard = leaderboardData;
      const unsortedLeaderboardArr = localStorageLeaderboard;
      const id = unsortedLeaderboardArr.length;
      const newLeaderboardData = { id, name, score: parseInt(score), avatar };
      setLeaderboard([...unsortedLeaderboardArr, newLeaderboardData]);
      localStorage.setItem(
        "leaderboardData",
        JSON.stringify([...unsortedLeaderboardArr, newLeaderboardData])
      );
    } else {
      const unsortedLeaderboardArr = JSON.parse(localStorageLeaderboard);
      const id = unsortedLeaderboardArr.length;
      const newLeaderboardData = { id, name, score: parseInt(score), avatar };
      setLeaderboard([...unsortedLeaderboardArr, newLeaderboardData]);
      localStorage.setItem(
        "leaderboardData",
        JSON.stringify([...unsortedLeaderboardArr, newLeaderboardData])
      );
    }

    window.location.href = "/leaderboard";

    // const json = JSON.stringify(leaderboard);
    // const blob = new Blob([json], { type: "application/json" });
    // const url = URL.createObjectURL(blob);
    // const link = document.createElement("a");
    // link.href = url;
    // link.download = "leaderboard.json";
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
    // URL.revokeObjectURL(url);

    event.target.reset();
  };

  return (
    <div className="">
      <NavbarPlay />
      <div className="bg-gradient-to-b w-full h-screen from-[#CAF0F8] to-[#48CAE4]">
        <div className="bgPage w-full h-screen z-0"></div>
        <div className="container mx-auto">
          {/* Before Play */}
          {!quizStarted ? (
            <div className="relative flex flex-col h-screen justify-center gap-4 scale-100 md:scale-90 lg:scale-100 xl:scale-100 2xl:scale-100">
              <div className="flex justify-center">
                <div className="flex flex-col gap-5 justify-center">
                  <div className="flex justify-center">
                    <img
                      className="rounded-2xl w-[350px] border-2 border-white"
                      src={`${HelloGIF}`}
                      alt="GIF"
                    />
                  </div>
                  <div className="flex flex-col gap-4 justify-center mx-10">
                    <div className="flex justify-center">
                      <Button
                        onClick={startQuiz}
                        className="font-semibold text-3xl text-white hover:text-black hover:bg-[#fedf52] flex items-center gap-2 bg-[#5381e5]"
                      >
                        START
                        <img
                          src={playButton}
                          alt="Play Button"
                          className="h-4 w-4 mb-1"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : // During Play
          questionIndex < MAXQUESTION ? (
            <div className="relative flex flex-col h-screen justify-center gap-4 scale-75 md:scale-90 lg:scale-100 xl:scale-100 2xl:scale-100">
              <div className="flex justify-center mt-20">
                <div className="bg-white rounded-full p-2 px-7 lg:px-12">
                  <div className="text-md lg:text-xl">Score: {score}</div>
                </div>
              </div>
              <div className="flex justify-center mx-10">
                <img
                  className="rounded-2xl w-[350px] max-h-[300px] border-2 border-white"
                  src={`${GIF}`}
                  alt="GIF"
                />
              </div>
              <div className="flex justify-center">
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mx-10">
                  <div
                    className="bg-green-600 h-2.5 rounded-full dark:bg-blue-500 transition ease-in-out"
                    style={{ width: percentageTimer + "%" }}
                  ></div>
                </div>
              </div>
              <h1
                dangerouslySetInnerHTML={{
                  __html: questions[questionIndex].question,
                }}
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white mx-10"
              ></h1>
              <div className="flex flex-wrap gap-4 justify-center mx-10 scale-90 lg:scale-100">
                {shuffledChoices.map((choice, index) => (
                  <QuizAnswerButton
                    onClick={() => checkAnswer(index)}
                    answer={choice}
                    datanumber={index}
                  />
                ))}
              </div>
            </div>
          ) : (
            //After Play
            <div className="relative flex h-screen justify-center gap-4 scale-100 md:scale-90 lg:scale-100 xl:scale-100 2xl:scale-100">
              <div className="flex flex-col gap-5 justify-center">
                <div className="flex justify-center mx-10">
                  <img
                    className="rounded-2xl w-[350px] border-2 border-white"
                    src={`${AvatarGIF}`}
                    alt="GIF"
                  />
                </div>
                <div className="flex flex-col gap-4 justify-center mx-10">
                  <div className="flex justify-center">
                    <div className="bg-white rounded-full p-2 px-7 lg:px-12">
                      <div className="text-md lg:text-xl">
                        Score akhir anda: {score}
                      </div>
                    </div>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <input type="hidden" name="score" value={score}></input>
                    <input
                      type="hidden"
                      name="AvatarGIF"
                      value={AvatarGIF}
                    ></input>
                    <input
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      name="name"
                      minLength={1}
                      maxLength={8}
                      value={inputValue}
                      onChange={handleChange}
                      placeholder="Masukkan nama mu.."
                    ></input>
                    {inputValue.length > 0 && (
                      <div className="flex justify-center">
                        <Button
                          type="submit"
                          className="mt-4 font-semibold text-sm text-white hover:text-black hover:bg-[#fedf52] flex items-center gap-2 bg-[#5381e5]"
                        >
                          SUBMIT
                        </Button>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
