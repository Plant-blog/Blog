import { Link } from "react-router-dom";
import "../styles/PlantCard.css";

export default function PlantCard({ plant }) {
  return (
    <Link to={`/archive/${plant.slug}`} className="plant-card">
      <img src={plant.image} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p>{plant.note}</p>
    </Link>
  );
}
