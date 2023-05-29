export function QuizAnswerButton(props) {
	const { onClick, text, parameters } = props;

	const handleClick = () => {
		if (onClick) {
			onClick(parameters);
		}
	};

	return (
		<button
			onClick={handleClick}
			type="button"
			className={`${props.order} choice-text p-4 px-10 text-xl border-2 border-white rounded-full text-white bg-gradient-to-br from-blue-400 to-orange-500 via-purple-500 animate-gradient-x hover:bg-gradient-to-br hover:from-white hover:to-white hover:text-black hover:border-black hover:scale-105 transition ease-in-out`}
			data-number={`${props.datanumber}`}
			dangerouslySetInnerHTML={{
				__html: props.answer,
			}}></button>
	);
}
