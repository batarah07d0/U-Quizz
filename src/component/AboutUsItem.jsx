export function AboutUsItem(props) {
	return (
		<div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
			<div className="flex flex-col">
				<a href="#" className="mx-auto">
					<img
						className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
						src={props.foto}></img>
				</a>

				<div className="text-center mt-6">
					<h1 className="text-black text-3xl lg:text-xl font-bold mb-1">
						{props.nama}
					</h1>
					<div className="text-black font-normal mb-2 text-xl lg:text-md">
						({props.nim})
					</div>
					<div className="flex justify-center pt-2">
						<div
							className="flex items-center justify-center opacity-85 hover:opacity-100
              transition-opacity duration-300 bg-white rounded-full w-[70%]">
							<a
								href={`${props.github}`}
								className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
								<i className="mdi mdi-github text-indigo-500 mx-auto mt-2"></i>
							</a>

							<a
								href={`${props.discord}`}
								className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
								<i className="mdi mdi-discord text-[#0f1ba1] m-auto pl-[1px]"></i>
							</a>

							<a
								href={`${props.instagram}`}
								className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
								<i className="mdi mdi-instagram text-[#fd6caa] m-auto pl-[1px]"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
