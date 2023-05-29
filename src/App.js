import { Route, Routes } from "react-router-dom";
import { AboutUs } from "./pages/AboutUs";
import { Home } from "./pages/Home";
import { Leaderboard } from "./pages/Leaderboard";
import { PlayQuiz } from "./pages/PlayQuiz";
import { UserDetail } from "./pages/UserDetail";
import "./style/App.css";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/play/" element={<PlayQuiz />} />
			<Route path="/play/:type" element={<PlayQuiz />} />
			<Route path="/leaderboard" element={<Leaderboard />} />
			<Route path="/leaderboard/:id" element={<UserDetail />} />
			<Route path="/aboutus" element={<AboutUs />} />
		</Routes>
	);
}

export default App;
