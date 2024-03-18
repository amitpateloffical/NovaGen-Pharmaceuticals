import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink, useNavigate, } from "react-router-dom";


function Header() {
  // const handleButtonClick = () => {
  //   // console.log("setIsButtonClicked clicked")
  //   if (isButtonClicked) {
  //     setIsButtonClicked(false);
  //   } else {
  //     setIsButtonClicked(true);
  //   }
  // };

  return (
    <>
      <header className="header">
        <nav>
          <div className="logo">
            <img src="novagenlogo-removebg-preview.png" width="70" height="70" alt="" />
            <Link to="/" className="p-4">
              NovaGen Pharma
              {/* <span>GENoMED PHARMA</span> */}
            </Link>
          </div>
          <input type="checkbox" id="menu-toggle" />
          <label htmlFor="menu-toggle" className="menu-icon">
            &#9776;
          </label>
          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/businessareas">Segment</Link>
            </li>
            <li>
              <Link to="/manufacturing">Mass Production</Link>
            </li>
            <li>
              <Link to="/features">Technology Development</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Point</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
