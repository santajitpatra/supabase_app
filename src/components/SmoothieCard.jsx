import { Link } from "react-router-dom";

function SmoothieCard({ smoothie }) {
  return (
    <div className="smoothie_card">
      <h3>{smoothie.title}</h3>
      <p>{smoothie.method}</p>
      <div className="rating">{smoothie.rating}</div>
      <div className="buttons">
        <Link to={"/" + smoothie.id}>
          <span className="material-icons">edit</span>
        </Link>
      </div>
    </div>
  );
}

export default SmoothieCard;
