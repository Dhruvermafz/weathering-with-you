import logo from "./logo.svg";
import "./App.css";
import Home from "./Home.js";
import Current from "./Current.js";
import Alerts from "./Alerts.js";
import History from "./History.js";
import ThreeDay from "./3Day.js";
import FiveDay from "./5Day.js";
import SevenDay from "./7Day.js";
import Search from "./Search.js";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/current" element={<Current />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/history" element={<History />} />
        <Route path="/3day" element={<ThreeDay />} />
        <Route path="/5day" element={<FiveDay />} />
        <Route path="/7day" element={<SevenDay />} />
        <Route path="/search" element={<Search weatherData={weatherData} />} />
      </Routes>
    </div>
  );
}

export default App;
