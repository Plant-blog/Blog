import { plants } from "../data/plants";
import PlantCard from "../components/PlantCard";
import "../styles/Archive.css";

export default function Archive() {
  return (
    <main className="archive">
      <h2>Plant Archive</h2>
      <div className="archive-grid">
        {plants.map((plant) => (
          <PlantCard key={plant.slug} plant={plant} />
        ))}
      </div>
    </main>
  );
}

