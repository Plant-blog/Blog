import { useParams } from "react-router-dom";
import { plants } from "../data/plants";
import "../styles/PlantDetail.css";

export default function PlantDetail() {
  const { slug } = useParams();
  const plant = plants.find((p) => p.slug === slug);

  if (!plant) {
    return <h2>Plant not found</h2>;
  }

  return (
    <div className="plant-detail">
      <h2>{plant.name}</h2>
      <img src={plant.image} alt={plant.name} />
      <p><strong>Status:</strong> {plant.status}</p>
      <p>{plant.note}</p>
    </div>
  );
}
