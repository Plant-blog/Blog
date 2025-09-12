import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} The Lost Garden</p>
      <nav>
        <a href="/">Home</a> • <a href="/archive">Archive</a> •{" "}
        <a href="https://github.com/Plant-blog/Blog" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </nav>
    </footer>
  );
}
