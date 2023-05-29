export function FlexboxBox(props) {
  return (
    <div
      className={`bg-gradient-to-br from-[#30a2a9] to-[#5E60CE] rounded-2xl border-4 border-white shadow ${props.className} hover:border-[#fedf52]`}
    >
      {props.content}
    </div>
  );
}
