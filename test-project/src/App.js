import "./App.css";
import Card from "./components/Card";
import twitterIcon from "./assets/twitter-icon.svg";
import facebookIcon from "./assets/facebook-icon.svg";
import instagramIcon from "./assets/instagram-icon.svg";
import telegramIcon from "./assets/telegram-icon.svg";

const socialCards = [
  {
    icon: twitterIcon,
    title: "TWITTER",
    description:
      "1 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita ullam aliquid non eligendi, nemo est neque reiciendis error?",
  },
  {
    icon: facebookIcon,
    title: "FACEBOOK",
    description:
      "2 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita ullam aliquid non eligendi, nemo est neque reiciendis error?",
  },
  {
    icon: instagramIcon,
    title: "INSTAGRAM",
    description:
      "3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita ullam aliquid non eligendi, nemo est neque reiciendis error?",
  },
  {
    icon: telegramIcon,
    title: "TELEGRAM",
    description:
      "4 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita ullam aliquid non eligendi, nemo est neque reiciendis error?",
  },
];

function App() {
  return (
    <div className="app">
      <div className="cardsContainer">
        {socialCards.map((card) => (
          <Card
            key={card.title}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
