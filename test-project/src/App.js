import "./App.css";
import Card from "./components/Card";
import twitterIcon from "./assets/twitter-icon.svg";
import facebookIcon from "./assets/facebook-icon.svg";
import linkedinIcon from "./assets/linkedin-icon.svg";
import instagramIcon from "./assets/instagram-icon.svg";
import telegramIcon from "./assets/telegram-icon.svg";
import whatsappIcon from "./assets/whatsapp-icon.svg";

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
  {
    icon: whatsappIcon,
    title: "WHATSAPP",
    description:
      "5 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita ullam aliquid non eligendi, nemo est neque reiciendis error?",
  },
  {
    icon: linkedinIcon,
    title: "LINKEDIN",
    description:
      "6 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita ullam aliquid non eligendi, nemo est neque reiciendis error?",
  },
];

function App() {
  return (
    <div className="app">
      <header className="appHeader">
        <span className="appLogo">IT</span>
      </header>
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
      <footer className="appFooter" />
    </div>
  );
}

export default App;
