import { ClipPaperTitle2 } from "../component/ClipPaperTitle2";
import { Footer } from "../component/Footer";
import { LeaderboardItem } from "../component/LeaderboardItem";
import { LeaderboardItemTop } from "../component/LeaderboardItemTop";
import { Navbar } from "../component/Navbar";

import leaderboardJSONFILE from "./leaderboard.json";

export function Leaderboard() {
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

	const sortedLeaderboardArr = unsortedLeaderboardArr.sort(
		(a, b) => b.score - a.score
	);

	return (
		<div>
			<Navbar />
			<div className="bg-gradient-to-b from-[#CAF0F8] to-[#48CAE4] -z-50">
				<div className="bgPage w-full h-[200%] z-0"></div>
				<div className="container mx-auto z-20">
					<div className="relative lg:top-5 lg:pb-10">
						<ClipPaperTitle2 title="Leaderboard" />
					</div>
					<div className="flex gap-0 lg:gap-5 justify-center lg:pt-10 z-10 transition ease-in-out scale-[80%] lg:scale-125">
						<LeaderboardItemTop
							no="1"
							id={sortedLeaderboardArr[0].id}
							score={sortedLeaderboardArr[0].score}
							icon={sortedLeaderboardArr[0].avatar}
							name={sortedLeaderboardArr[0].name}
							className="order-2 scale-100"
							color="bg-yellow-400 border-yellow-400"
							gradient="border-2 border-[#f4c437] bg-gradient-to-br from-[#ffef95] to-[#f4c437]"
						/>
						<LeaderboardItemTop
							no="2"
							id={sortedLeaderboardArr[1].id}
							score={sortedLeaderboardArr[1].score}
							icon={sortedLeaderboardArr[1].avatar}
							name={sortedLeaderboardArr[1].name}
							className="order-1 scale-75"
							color="bg-[#afafaf] border-[#afafaf]"
							gradient="border-2 border-[#b0b0b0] bg-gradient-to-br from-[#cfcfcf] to-[#b0b0b0]"
						/>
						<LeaderboardItemTop
							no="3"
							id={sortedLeaderboardArr[2].id}
							score={sortedLeaderboardArr[2].score}
							icon={sortedLeaderboardArr[2].avatar}
							name={sortedLeaderboardArr[2].name}
							className="order-3 scale-75"
							color="bg-[#aa895b] border-[#aa895b]"
							gradient="border-2 border-[#af8f5a] bg-gradient-to-br from-[#d3bda0] to-[#af8f5a]"
						/>
					</div>
					<div className="flex gap-4 flex-col pt-1 lg:pt-16 transition ease-in-out">
						{sortedLeaderboardArr.map((leaderboard, index) => {
							if (index > 2) {
								return (
									<LeaderboardItem
										no={index}
										id={leaderboard.id}
										icon={leaderboard.avatar}
										nama={leaderboard.name}
										score={leaderboard.score}
									/>
								);
							}
						})}
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
}
