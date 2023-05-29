import { Link } from "react-router-dom";
export function LeaderboardItem(props) {
  return (
    <div className="flex justify-between gap-4 bg-gradient-to-br from-[#4EA8DE] to-[#5E60CE] rounded-xl p-4 w-4/5 lg:w-[50rem] mx-auto border-2 border-white scale-100 hover:scale-105 transition ease-in-out hover:border-[#fedf52]">
      <div className="flex gap-4">
        <div className="text-lg lg:text-xl font-bold content-center my-auto text-white w-4">
          {props.no}
        </div>
        <img
          src={`${props.icon}`}
          className="flex w-16 lg:w-20 h-16 lg:h-20 rounded-full border-4 border-white bg-slate-400"
        ></img>
        <div className="text-lg lg:text-xl font-bold my-auto text-white">
          <Link to={`/leaderboard/${props.id}`}>{props.nama}</Link>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="bg-white rounded-full p-2 px-7 lg:px-12">
          <div className="text-md lg:text-lg">{props.score}</div>
        </div>
      </div>
    </div>
  );
}
