import axios from "axios";
import { useEffect, useState } from "react";
import geo from "../assets/select mode bg/GEO.webp";
import general from "../assets/select mode bg/General Knowledge.jpeg";
import film from "../assets/select mode bg/Movie.jpg";
import game from "../assets/select mode bg/game.jpg.webp";
import { ClipPaperTitle } from "../component/ClipPaperTitle";
import { FlexboxBox } from "../component/FlexboxBox";
import { Footer } from "../component/Footer";
import { Hero } from "../component/Hero";
import { HowTo } from "../component/HowTo";
import { LoadingScreen } from "../component/LoadingScreen";
import { Navbar } from "../component/Navbar";
import { RandomTrivia } from "../component/RandomTrivia";
import { SelectModeCard } from "../component/SelectModeCard";

const TriviaAPIurl = "https://opentdb.com/api.php?amount=3&type=multiple";

export function Home() {
	const [buttonClick, setButtonClick] = useState(false);
	const [questions, getQuiz] = useState([]);

	useEffect(() => {
		getAllQuiz();
	}, [buttonClick]);

	const getAllQuiz = () => {
		axios
			.get(TriviaAPIurl)
			.then((response) => {
				const questions = response.data.results;
				getQuiz(questions);
			})
			.catch((error) => console.error(`Error ${error}`));
	};

	const handleClick = () => {
		setButtonClick(!buttonClick);
	};

	if (questions == "") {
		return <LoadingScreen />;
	}

	return (
		<div className="text-white flex flex-col">
			{/* Bagian 1 */}
			<Navbar />
			<div className="bg-gradient-to-b from-[#48CAE4] to-[#CAF0F8] h-[88rem] lg:h-[140rem]  mt-10">
				<div className="bgPage w-full h-[88rem] lg:h-[140rem] z-0"></div>
				{/* Flexbox grid */}
				<div className="container mx-auto scale-100">
					<div className="mx-2 ">
						{/* Hero */}
						<FlexboxBox content={<Hero />} className="mt-[5.2rem]" />
						{/* How To */}
						<div id="HowTo">
							<ClipPaperTitle title="How To" />
							<div className="VideoPlayer relative h-0 w-full pb-[56.25%] lg:scale-75">
								<HowTo />
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Bagian 2 */}
			<div className="relative top-[20rem] md:top-[30rem] lg:top-[0rem]">
				<div className="flex flex-col relative bottom-[15rem] lg:bottom-[25rem] scale-100">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
						<path
							fill="#5E60CE"
							fill-opacity="1"
							d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
					</svg>
					<div className="bg-[#5E60CE] -mt-1 pb-4">
						<div className="container mx-auto">
							{/* Random Trivia */}
							<div id="RandomTrivia" className="flex flex-col gap-5">
								<div className="py-5 pt-7 text-center">
									<div className="text-4xl lg:text-7xl font-bold">
										Random Trivia
									</div>
								</div>
								<div className="flex flex-col lg:flex-row my-1 gap-2 flex-nowrap overflow-hidden scale-90 lg:scale-100">
									{questions.map((question, index) => (
										<RandomTrivia
											className="w-full lg:w-1/3"
											category={question.category}
											question={question.question}
											answer={question.correct_answer}
										/>
									))}
								</div>
								<div className="flex justify-center transition ease-in-out hover:scale-105 hover:translate-y-2">
									<a
										onClick={handleClick}
										class="animate-bounce inline-flex items-center px-3 py-2 text-xl font-medium text-center text-white bg-[#ce5a83] rounded-lg hover:bg-[#fedf52] hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 scale-100 hover:scale-110">
										REFRESH
										<svg
											aria-hidden="true"
											className="ms-4 w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
											viewBox="0 0 100 101"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
												fill="currentColor"
											/>
											<path
												d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
												fill="currentFill"
											/>
										</svg>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Bagian 3 */}
				<div className="relative bottom-[15rem] lg:bottom-[25.5rem] bg-gradient-to-t from-[#CAF0F8] to-[#48CAE4]">
					<div className="bgPage w-full h-[30rem] lg:h-[150rem] z-0"></div>
					<div className="scale-100">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
							<path
								fill="#5E60CE"
								fill-opacity="1"
								d="M0,256L48,240C96,224,192,192,288,197.3C384,203,480,245,576,229.3C672,213,768,139,864,112C960,85,1056,107,1152,144C1248,181,1344,235,1392,261.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
						</svg>
					</div>
					<div className="-mt-1 scale-100">
						<div id="PlayGame" className="container mx-auto">
							<ClipPaperTitle title="Select Mode" />
							<div id="selectmode" className="mx-4">
								<div className="flex flex-col lg:flex-row gap-5 justify-center">
									<SelectModeCard
										className="lg:hover:-translate-y-4 lg:hover:-translate-x-5"
										src={general}
										title="General Knowledge"
										description="Contains random questions but are still general questions that are still easy to answer."
										link="/play/general"
									/>
									<SelectModeCard
										className="lg:hover:-translate-y-4 lg:hover:translate-x-5"
										src={geo}
										title="Geography"
										description="Contains questions about geography that can hone your skills in geography."
										link="/play/geography"
									/>
								</div>
								<div className="flex flex-col lg:flex-row gap-5 mt-5 justify-center">
									<SelectModeCard
										className="lg:hover:translate-y-4 lg:hover:-translate-x-5"
										src={film}
										title="Film"
										description="Are you a movie lover?
                    Let's test your knowledge of movie-related matters!"
										link="/play/film"
									/>
									<SelectModeCard
										className="lg:hover:translate-y-4 lg:hover:translate-x-5"
										src={game}
										title="Video Game"
										description="Do you like playing games?
                    Let's test your understanding of games!"
										link="/play/videogame"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer className="relative top-[14rem]" />
		</div>
	);
}
