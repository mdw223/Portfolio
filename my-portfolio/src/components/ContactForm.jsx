import '../styling/ContactForm.css'

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    // Logic to send email with resume
    alert(`Resume sent to ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Enter your email" required />
      <button type="submit">Send Resume</button>
    </form>
  );
};
export default ContactForm;