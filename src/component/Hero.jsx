import axios from "axios";
import { useEffect, useState } from "react";
import bgherooverlay from "../assets/select mode bg/Movie.jpg";
import "../style/index.css";

const QuoteAPIurl = "https://type.fit/api/quotes";

export function Hero() {
	const [quote, getQuote] = useState([]);

	const handleClick = () => {
		const targetElement = document.getElementById("HowTo");
		targetElement.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		getAllQuote();
	}, []);

	const getAllQuote = () => {
		axios
			.get(QuoteAPIurl)
			.then((response) => {
				const quoteArr = response.data;
				const randomIndex = Math.floor(Math.random() * quoteArr.length);
				const quote = quoteArr[randomIndex];
				getQuote(quote);
			})
			.catch((error) => console.error(`Error ${error}`));
	};

	return (
		<div className="bgHero relative isolate px-6 pt-14 lg:px-8">
			<div className="mx-auto max-w-2xl py-[10vh] sm:py-48 lg:py-[19vh] hover:scale-105 transition ease-in-out">
				<div className="text-center">
					<h1 className="text-[10vw] font-bold tracking-tight sm:text-6xl">
						Welcome to <span className="text-yellow-400">UQuizz!</span>
					</h1>
					<p className="mt-6 text-lg lg:text-2xl leading-5 para ">
						Let's test your trivia knowledge, and see what's your score compared
						to other people! How nerdy are you really?
					</p>
					<p className="mt-6 text-sm leading-5 para mx-14">"{quote.text}"</p>
					<p className="mt-0 text-sm leading-5 para">
						- {quote.author != null ? quote.author : "Unknown"}
					</p>
					<div className="mt-10 mb-[5vw] flex items-center justify-center gap-x-6">
						<button
							className="rounded-md bg-[#00787e] px-3.5 py-2.5 text-[1rem] font-semibold  shadow-sm hover:text-black hover:bg-[#fedf51]"
							onClick={handleClick}>
							How to Play
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
