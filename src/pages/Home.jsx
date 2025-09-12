import { Link } from "react-router-dom";
import { plants } from "../data/plants";
import "../styles/Home.css";

export default function Home() {
  return (
    <section className="hero">
      <h1>The Lost Garden</h1>
      <p>Documenting the plants and flowers civilization has destroyed.</p>
      <Link to="/archive" className="cta">
        Enter the Archive
      </Link>

      <div className="carousel">
        {plants.map((plant) => (
          <Link
            to={`/archive/${plant.slug}`}
            key={plant.slug}
            className="carousel-item"
          >
            <img src={plant.image} alt={plant.name} />
            <span>{plant.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
