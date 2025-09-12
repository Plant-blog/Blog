import "../styles/Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <p>Have questions or want to contribute? Reach out below.</p>

      <form
        className="contact-form"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Message sent!");
        }}
      >
        <label>
          Name
          <input type="text" name="name" required />
        </label>

        <label>
          Email
          <input type="email" name="email" required />
        </label>

        <label>
          Message
          <textarea name="message" rows="5" required></textarea>
        </label>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
