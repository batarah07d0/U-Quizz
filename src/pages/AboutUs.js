import { Fragment, useState } from "react";
import icon from "../assets/icon/android-chrome-512x512.png";
import { Navbar } from "../component/Navbar";

import {
	Accordion,
	AccordionBody,
	AccordionHeader,
} from "@material-tailwind/react";
import { AboutUsItem } from "../component/AboutUsItem";
import { ClipPaperTitle2 } from "../component/ClipPaperTitle2";
function Icon({ id, open }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={`${
				id === open ? "rotate-180" : ""
			} h-5 w-5 transition-transform`}
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			strokeWidth={2}>
			<path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
		</svg>
	);
}

export function AboutUs() {
	const [open, setOpen] = useState(0);

	const handleOpen = (value) => {
		setOpen(open === value ? 0 : value);
	};

	return (
		<div className="text-white">
			<Navbar />
			<div className="bg-gradient-to-b from-[#48CAE4] to-[#CAF0F8]">
				<div className="bgPage w-full h-[88rem] lg:h-[106rem] z-0"></div>
				{/* Team Section */}
				<div className="flex items-center justify-center min-h-screeny py-5">
					<div className="flex flex-col">
						<span className="text-center font-bold opacity-30">
							<hr className="my-4"></hr>
							<a
								href="https://egoistdeveloper.github.io/twcss-to-sass-playground/"
								target="_blank"
								className="text-blue-600"></a>
						</span>

						<div className="flex flex-col lg:mt-8">
							<div className="container max-w-7xl">
								<div className="flex justify-center text-center lg:mb-12 scale-100">
									<div className="scale-90 lg:scale-105">
										<ClipPaperTitle2
											title={
												<div>
													<h1>Our Team</h1>
													<h1 className="scale-75">Group 2</h1>
												</div>
											}
										/>
									</div>
								</div>
								<div className="flex justify-center">
									<div className="relative bottom-[10rem] lg:bottom-auto mx-0 lg:mx-10 flex flex-wrap justify-center items-center scale-90 lg:scale-100 gap-3 lg:gap-2">
										<AboutUsItem
											foto={require("../assets/Batara.png")}
											nama="Batara Hotdo Horas Simbolon"
											nim="00000078626"
											github="https://www.github.com/batarah07d0"
											discord="https://discord.com/users/LEGION#1951"
											instagram="http://www.instagram.com/batara.hotdo"
										/>
										<AboutUsItem
											foto={require("../assets/Efri.png")}
											nama={<div className="pb-7">Efri Ramadhan</div>}
											nim="00000078662"
											github="https://github.com/efriramadhan"
											discord="https://discord.com/users/Efri#5854"
											instagram="https://www.instagram.com/efrir_/"
										/>
										<AboutUsItem
											foto={require("../assets/Dikez.png")}
											nama="Raphael Dikstra Satya Prameswara"
											nim="00000078564"
											github="https://github.com/Rekmast"
											discord="https://discord.com/users/wiuwiu#7300"
											instagram="https://www.instagram.com/rdyzee_983/"
										/>
										<AboutUsItem
											foto={require("../assets/Dzaky.png")}
											nama="Dzaky Fatur Rahman"
											nim="00000089614"
											github="https://github.com/dzaky2636"
											discord="https://discord.com/users/-Key-#1906"
											instagram="https://www.instagram.com/dzakyfaturr/"
										/>
										<AboutUsItem
											foto={require("../assets/Axel.png")}
											nama="Axel Reginald Wiranto"
											nim="00000078456"
											github="https://github.com/mOdrA40"
											discord="https://discord.com/users/Mossad#0636"
											instagram="https://www.instagram.com/axel_modra40/"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="scale-100">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
						<path
							fill="#5E60CE"
							fill-opacity="1"
							d="M0,128L48,117.3C96,107,192,85,288,90.7C384,96,480,128,576,160C672,192,768,224,864,218.7C960,213,1056,171,1152,165.3C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
					</svg>
				</div>
				<div className="bg-[#5E60CE] -mt-1 scale-100">
					<div className="container mx-auto relative bottom-20">
						{/* Accordion */}
						<div className="py-20 text-center">
							<div className="pt-20 lg:pt-0 text-6xl lg:text-7xl font-bold">
								FAQ
							</div>
						</div>
						<div className="mx-4 lg:mx-32 text-white">
							<Fragment>
								<Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
									<AccordionHeader
										className="bg-[#21228a] border-2 border-black p-6 rounded-t-xl text-white hover:text-white"
										onClick={() => handleOpen(1)}>
										What Framework Did You Use?
									</AccordionHeader>
									<AccordionBody className="bg-[#04042d] border-2 border-black p-6 text-white text-md">
										We use React.JS for JavaScript Framework and Tailwind CSS
										for CSS Framework.
									</AccordionBody>
								</Accordion>
								<Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
									<AccordionHeader
										className="bg-[#21228a] border-2 border-black p-6 text-white hover:text-white"
										onClick={() => handleOpen(2)}>
										What API Did You Use?
									</AccordionHeader>
									<AccordionBody className="bg-[#04042d] border-2 border-black p-6 text-white text-md">
										We use OpenTriviaDB "https://opentdb.com/" for generate
										question, Giphy "https://developers.giphy.com/explorer/" for
										random GIF that use for profile picture, and TypeFit API
										"https://type.fit/api/quotes" for quotes.
									</AccordionBody>
								</Accordion>
								<Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
									<AccordionHeader
										className="bg-[#21228a] border-2 border-black p-6 text-white hover:text-white focus:rounded-b-[0px]"
										onClick={() => handleOpen(3)}>
										What Font Did You Use?
									</AccordionHeader>
									<AccordionBody className="bg-[#04042d] border-2 border-black p-6 text-white text-md">
										We use Comic Neue for our website.
									</AccordionBody>
								</Accordion>
								<Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
									<AccordionHeader
										className="bg-[#21228a] border-2 border-black p-6 rounded-b-xl text-white hover:text-white focus:rounded-b-[0px]"
										onClick={() => handleOpen(4)}>
										What Was Your Purpose in Making This Website?
									</AccordionHeader>
									<AccordionBody className="bg-[#04042d] border-2 border-black p-6 rounded-b-xl text-white text-md">
										For Final Exam in Introduction to Internet Technology Class.
									</AccordionBody>
								</Accordion>
							</Fragment>
						</div>
					</div>
				</div>
			</div>
			{/* Footer */}
			<div className="bg-[#5E60CE] text-white py-1">
				<footer className="m-4">
					<hr className="border-white" />
					<div className="w-full max-w-screen-xl mx-auto p-4 ">
						<div className="flex flex-row justify-between">
							<div className="flex">
								<img src={icon} className="h-8 mr-3" alt="UQuizz Icon" />
								<span className="self-center text-md lg:text-2xl font-semibold whitespace-nowrap">
									UQuizz
								</span>
							</div>
							<div>
								<span className="hidden lg:inline text-md lg:text-2xl font-semibold ">
									© 2023 Kelompok 2™ . All Rights Reserved.
								</span>
								<span className="inline lg:hidden text-md lg:text-2xl font-semibold ">
									© 2023 Kelompok 2™
								</span>
							</div>
						</div>
					</div>
				</footer>
			</div>
		</div>
	);
}
