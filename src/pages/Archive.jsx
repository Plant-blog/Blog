import { plants } from "../data/plants";
import { Link } from "react-router-dom";
import "../styles/Archive.css";

export default function Archive() {
  return (
    <main className="archive">
      <h2>Plant Archive</h2>
      <div className="archive-grid">
        {plants.map((plant) => (
          <article key={plant.slug} className="archive-card">
            <Link to={`/archive/${plant.slug}`} className="archive-image-link">
              <img src={plant.image} alt={plant.name} className="archive-image" />
            </Link>
            <div className="archive-content">
              <h3>
                <Link to={`/archive/${plant.slug}`}>{plant.title}</Link>
              </h3>
              <div className="archive-meta">
                <span>{plant.date}</span> · <span>{plant.author}</span>
              </div>
              <div className="archive-status">
                <strong>Status:</strong> {plant.status}
              </div>
              <p className="archive-excerpt">
                {plant.content.split("\n")[0].slice(0, 120)}...
              </p>
              <Link to={`/archive/${plant.slug}`} className="read-more">
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
