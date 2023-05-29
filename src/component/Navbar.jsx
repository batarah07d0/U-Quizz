import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import groupicon from "../assets/group.png";
import homepageicon from "../assets/homepage.png";
import leaderboardicon from "../assets/leaderboard.png";
import logo from "../assets/logo/logo2.png";
import playButton from "../assets/play-button.png";
import "../style/index.css";

const navigation = [
	{ name: "Home", to: "/", icon: homepageicon },
	{ name: "Leaderboard", to: "/leaderboard", icon: leaderboardicon },
	{ name: "About Us", to: "/aboutus", icon: groupicon },
];

export function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const handleClick = () => {
		if (document.getElementById("PlayGame") == null) {
			const elementId = "selectmode";
			window.location.href = "/#" + elementId;
		} else {
			const targetElement = document.getElementById("PlayGame");
			targetElement.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<header className="fixed inset-x-0 top-0 z-50 bg-[#30a2a9]">
			{/* Desktop */}
			<nav
				className="flex items-center justify-between p-2 lg:px-8"
				aria-label="Global">
				{/* Logo */}
				<div className="flex lg:flex-1">
					<img className="h-[7vh] w-auto p-1" src={logo} alt="UQuizz Logo" />
				</div>
				{/* Button hamburger */}
				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-5 text-white"
						onClick={() => setMobileMenuOpen(true)}>
						<Bars3Icon className="h-8 w-8" aria-hidden="true" />
					</button>
				</div>
				{/* Link */}
				<div className="hidden lg:flex lg:gap-x-12">
					{navigation.map((item) => (
						<Link
							key={item.name}
							to={item.to}
							className="group text-2xl font-semibold leading-5 transition ease-in-out text-white hover:scale-110 hover:text-black hover:bg-[#fedf51] p-2 rounded-lg">
							<div className="flex flex-col gap-2">
								<div className="flex justify-center">
									<img
										src={`${item.icon}`}
										className="h-6 w-auto invert group-hover:invert-0"></img>
								</div>
								{item.name}
							</div>
						</Link>
					))}
				</div>
				{/* Kanan */}
				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					<Button
						className="font font-semibold text-sm text-white hover:text-black hover:bg-[#fedf52] flex items-center gap-2 bg-[#ce5a83]"
						onClick={handleClick}>
						Play
						<img
							id="playButton"
							src={playButton}
							alt="Play Button"
							className="h-5 w-auto mb-1"
						/>
					</Button>
				</div>
			</nav>
			{/* Mobile */}
			<Dialog
				as="div"
				className="lg:hidden"
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}>
				<div className="fixed inset-0 z-50" />
				<Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#30a2a9] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
					<div className="bgNavbar w-full h-full"></div>
					{/* Tombol exit menu navbar mobile */}
					<div className="flex items-right justify-end">
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5 text-white hover:text-black hover:bg-[#fedf52]"
							onClick={() => setMobileMenuOpen(false)}>
							<XMarkIcon className="h- w-6" aria-hidden="true" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
								{navigation.map((item) => (
									<Link
										key={item.name}
										to={item.to}
										className="group -mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-8 text-white hover:text-black hover:bg-[#fedf51]">
										<div className="flex gap-4">
											<img
												src={`${item.icon}`}
												className="h-8 w-8 invert group-hover:invert-0"></img>
											{item.name}
										</div>
									</Link>
								))}
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	);
}
