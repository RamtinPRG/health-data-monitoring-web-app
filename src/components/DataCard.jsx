import "./styles/Card.css";

function DataCard({ icon, header, body, id, ...props }) {
  return (
    <div className="card" id={id} {...props}>
      <div>
        <div>
          <i className={icon}></i>
          <p>{header}</p>
        </div>
        <p>{body}</p>
      </div>
    </div>
  );
}

export default DataCard;
