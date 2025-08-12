import '../styling/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="name">
        Malik's Portfolio
      </div>
      <div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;