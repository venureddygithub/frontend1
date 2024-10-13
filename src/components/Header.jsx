import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Features/ContextProvider";
import { useNavigate } from "react-router-dom"

export const Header = () => {
  const { cart } = useContext(CartContext);
  const Navigate=useNavigate()
  const handleLogout = () => {
    localStorage.removeItem("token");
    Navigate("/signin");
  };
  return (
    <>
      <div className="header-container" style={{ height: "10vh" }}>
        <div>
          <h1 className="logo-name">Shopping city</h1>
        </div>
        <div>
          <ul className="link-container">
            <Link to="/home">
              <li>Home</li>
            </Link>
            <Link to="/product">
              <li>Product</li>
            </Link>
            <Link to="/cart">
              <li>
                cart <span>{cart.length}</span>
              </li>
            </Link>
          </ul>
        </div>
        <div><button onClick={handleLogout} className="btn btn-primary mr-2">Logout</button></div>
      </div>
    </>
  );
};
