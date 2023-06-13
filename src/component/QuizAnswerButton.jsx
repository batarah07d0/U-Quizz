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
			className={`${props.order} ${props.className} choice-text w-44 p-2 text-xl border-2 border-white rounded-3xl text-white bg-gradient-to-br from-blue-400 to-orange-500 via-purple-500 animate-gradient-x hover:scale-105 transition ease-in-out`}
			data-number={`${props.datanumber}`}
			dangerouslySetInnerHTML={{
				__html: props.answer,
			}}></button>
	);

	<QuizAnswerButton />;
}
