import { Link } from "react-router-dom";
import supabase from "../config/supabaseClient";

function SmoothieCard({ smoothie, onDelete }) {
  const handleDelete = async () => {
    const { data, error } = await supabase
      .from("smoothies")
      .delete()
      .eq("id", smoothie.id)
      .select();
    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
      onDelete(smoothie.id)
    }
  };

  return (
    <div className="smoothie_card">
      <h3>{smoothie.title}</h3>
      <p>{smoothie.method}</p>
      <div className="rating">{smoothie.rating}</div>
      <div className="buttons">
        <Link to={"/" + smoothie.id}>
          <span className="material-icons">edit</span>
        </Link>
        <span className="material-icons" onClick={handleDelete}>
          delete
        </span>
      </div>
    </div>
  );
}

export default SmoothieCard;
