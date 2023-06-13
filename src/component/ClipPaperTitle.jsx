import clippaper from "../assets/clippaper.png";

export function ClipPaperTitle(props) {
	return (
		<div className="relative py-10 scale-50 sm:scale-75 lg:scale-[80%] transition ease-in-out rotate-[4deg] hover:rotate-0 pointer-events-none">
			<div className="flex justify-center">
				<img src={clippaper} className="h-80 pointer-events-auto"></img>
			</div>
			<h1 className="absolute text-5xl text-center overlay-text text-black">
				{props.title}
			</h1>
		</div>
	);
}
