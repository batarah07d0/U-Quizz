import { Link } from "react-router-dom";
export function LeaderboardItemTop(props) {
  return (
    <div className={`flex flex-col justify-center ${props.className}`}>
      <div className="">
        <div
          className={`w-12 h-12 p-2 mx-auto rounded-full scale-100 ${props.gradient}`}
        >
          <div className="flex justify-center text-black text-xl">
            {props.no}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src={`${props.icon}`}
          className={`-mt-8 flex w-32 h-32 bg-slate-10 rounded-full border-4 ${props.color}`}
        ></img>
      </div>
      <div className="-mt-8">
        <div
          className={`w-12 h-12 px-10 mx-auto rounded-full scale-75 ${props.gradient}`}
        >
          <div className="flex justify-center text-black text-xl">
            <span className="mt-2">{props.score}</span>
          </div>
        </div>
      </div>
      <div
        className={`w-full h-10 px-10 mx-auto rounded-full scale-100 ${props.gradient}`}
      >
        <div className="flex justify-center text-black text-md">
          <div className="flex flex-col mt-2">
            <Link to={`/leaderboard/${props.id}`}>{props.name}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
