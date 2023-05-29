import { Button } from "@material-tailwind/react";
import logo from "../assets/logo/logo2.png";
import playButton from "../assets/play-button.png";
import "../style/index.css";
import { Link } from "react-router-dom";

export function NavbarPlay() {
	return (
		<header className="fixed inset-x-0 top-0 z-50 bg-[#30a2a9]">
			{/* Desktop & Mobile */}
			<nav
				className="flex items-center justify-between p-2 lg:px-8"
				aria-label="Global">
				{/* Logo */}
				<div className="flex lg:flex-1">
					<img className="h-8 w-auto" src={logo} alt="UQuizz Logo" />
				</div>
				{/* Kanan */}
				<Link to="/" className="flex flex-1 justify-end scale-95 lg:scale-100">
					<Button className="font-semibold text-base text-white hover:text-black hover:bg-[#fedf52] flex items-center gap-2 bg-[#ce5a83]">
						Quit
						<img src={playButton} alt="Play Button" className="h-4 w-4 mb-1" />
					</Button>
				</Link>
			</nav>
		</header>
	);
}
