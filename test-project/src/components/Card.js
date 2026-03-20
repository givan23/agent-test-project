function Card({ icon, title, description }) {
  return (
    <div className="socialCard">
      <img src={icon} alt={`${title} icon`} className="socialIcon" />
      <h2 className="socialTitle">{title}</h2>
      <p className="socialDescription">{description}</p>
      <button className="socialButton">READ MORE</button>
    </div>
  );
}

export default Card;
