import { Link } from "react-router-dom";

const Navbar = () => {
  // * SCRIPTS

  // * TEMPLATE
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Home Page</h1>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
