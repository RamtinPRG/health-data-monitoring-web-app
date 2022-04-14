import "./Card.css";

function Card({ icon, header, body, id, button, ...props }) {
  return (
    <div className="card" id={id} {...props}>
      <div>
        <div>
          <i className={icon}></i>
          <p>{header}</p>
        </div>
        <p>{body}</p>
      </div>
      <button className="card-button">{button}</button>
    </div>
  );
}

export default Card;
