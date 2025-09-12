import { Link } from "react-router-dom";
import "../styles/Home.css";

export default function Home() {
  return (
    <section className="hero">
      <h1>The Lost Garden</h1>
      <p>Documenting the plants and flowers civilization has destroyed.</p>
      <Link to="/archive" className="cta">
        Enter the Archive
      </Link>
    </section>
  );
}
