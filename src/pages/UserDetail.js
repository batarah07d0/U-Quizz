import { Link, useParams } from "react-router-dom";
import { Navbar } from "../component/Navbar";

import leaderboardJSONFILE from "./leaderboard.json";

export function UserDetail(props) {
	var id = useParams();
	var index = id.id;

	var localStorageLeaderboard = localStorage.getItem("leaderboardData");
	var unsortedLeaderboardArr = [];
	// if localstorage is empty
	if (localStorageLeaderboard == null) {
		localStorage.setItem(
			"leaderboardData",
			JSON.stringify(leaderboardJSONFILE)
		);
	} // if localstorage is there
	else {
		unsortedLeaderboardArr = JSON.parse(localStorageLeaderboard);
	}

	let name = unsortedLeaderboardArr[index].name;
	let score = unsortedLeaderboardArr[index].score;
	let GIFAvatar = unsortedLeaderboardArr[index].avatar;

	return (
		<div>
			<Navbar />
			<div className="bg-gradient-to-b w-full h-screen from-[#CAF0F8] to-[#48CAE4]">
				<div className="bgPage w-full h-screen z-0"></div>
				<div className="container mx-auto">
					<div className="relative flex flex-col h-screen justify-center gap-4 scale-100 md:scale-90 lg:scale-100 xl:scale-100 2xl:scale-100">
						<div className="flex justify-center">
							<div className="flex flex-col gap-5 justify-center">
								<div className="flex justify-center">
									<Link
										to="/leaderboard"
										href="#"
										className="inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-white bg-[#ce5a83] rounded-lg  hover:bg-[#fedf52] hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
										BACK
										<svg
											aria-hidden="true"
											class="w-4 h-4 ml-2 -mr-1"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg">
											<path
												fill-rule="evenodd"
												d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
												clip-rule="evenodd"></path>
										</svg>
									</Link>
								</div>
								<div className="bg-gradient-to-br from-[#4EA8DE] to-[#5E60CE] rounded-2xl border-2 border-white hover:border-[#fedf52] shadow transition ease-in-out scale-100 hover:scale-105">
									<img
										class="rounded-t-2xl w-full h-[350px]"
										src={`${GIFAvatar}`}
										alt=""
									/>
									<div className="p-5 flex flex-col gap-2 text-white">
										<div className="text-3xl font-bold text-center">{name}</div>
										<div className="bg-white rounded-full p-2 px-7 lg:px-12">
											<div className="text-md lg:text-lg text-black text-center">
												{score}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
