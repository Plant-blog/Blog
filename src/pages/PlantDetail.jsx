import { useParams, Link } from "react-router-dom";
import { plants } from "../data/plants";
import "../styles/PlantDetail.css";

export default function PlantDetail() {
  const { slug } = useParams();
  const plant = plants.find((p) => p.slug === slug);

  if (!plant) {
    return (
      <main className="plant-detail">
        <h2>Plant not found</h2>
        <Link to="/archive" className="back-link">← Back to Archive</Link>
      </main>
    );
  }

  return (
    <main className="plant-detail">
      <article>
        <h1 className="post-title">{plant.title}</h1>

        <div className="post-meta">
          <span>By {plant.author}</span> · <span>{plant.date}</span>
        </div>

        <img src={plant.image} alt={plant.name} className="post-image" />

        <div className="post-status">
          <strong>Status:</strong> {plant.status}
        </div>

        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: plant.content }}
        />

        <Link to="/archive" className="back-link">← Back to Archive</Link>
      </article>
    </main>
  );
}

