import logo from "./logo.svg";
import "./App.css";
import background from "./img/background.jpg";
import { HomePage } from "./Components/HomePage";

function App() {
  return (
    <div className="bgImg" style={{ backgroundImage: `url(${background})` }}>
      <div className="overlay" />
      <HomePage/>
    </div>
  );
}

export default App;
