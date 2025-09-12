import { Link } from "react-router-dom";
import { plants } from "../data/plants";
import "../styles/Archive.css";

export default function Archive() {
  return (
    <div className="archive">
      <h2>Plant Archive</h2>
      <div className="plant-grid">
        {plants.map((plant) => (
          <Link to={`/archive/${plant.slug}`} key={plant.slug} className="plant-card">
            <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>{plant.status}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
