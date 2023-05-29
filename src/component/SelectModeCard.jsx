import { Link } from "react-router-dom";

export function SelectModeCard(props) {
	return (
		<div className="flex justify-center">
			<div
				className={`max-w-[48vh] bg-gradient-to-br from-[#30a2a9] to-[#5E60CE] rounded-2xl border-4 border-white shadow transition ease-in-out scale-100 hover:scale-105 ${props.className} hover:border-[#fedf52]`}>
				<img
					class="rounded-t-xl w-full lg:w-full"
					src={`${props.src}`}
					alt=""
				/>
				<div className="p-5 flex flex-col gap-2">
					<div className="text-3xl font-bold text-center">{props.title}</div>
					<div className="text-lg text-justify">{props.description}</div>
					<div className="text-right">
						<Link
							to={props.link}
							href="#"
							class="inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-white bg-[#ce5a83] rounded-lg  hover:bg-[#fedf52] hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
							START!
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
				</div>
			</div>
		</div>
	);
}
