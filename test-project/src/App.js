import "./App.css";
import twitterIcon from "./assets/twitter-icon.svg";

function App() {
  return (
    <div className="app">
      <div id="twitter-card" className="twitterCard">
        <img src={twitterIcon} alt="Twitter icon" className="twitterIcon" />
        <h1 className="twitterTitle">TWITTER</h1>
        <p className="twitterDescription">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
          ullam aliquid non eligendi, nemo est neque reiciendis error?
        </p>
        <button className="twitterButton">READ MORE</button>
      </div>
    </div>
  );
}

export default App;
