import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const guestNav = [
  { to: "/", text: "Login" },
  { to: "/register", text: "Register" },
];

const userNav = [
  { to: "/Home", text: "Home" },
  { to: "/Free", text: "Free" },
  { to: "/Sell", text: "Sell" },
  { to: "/Contact", text: "Contact" },
];

const cartNav = [
  { to: "/Cart", icon: <FontAwesomeIcon icon={faShoppingCart} />, text: ""},
];

export default function Header() {
  const { user, logout } = useAuth();
  const finalNav = user?.id ? userNav : cartNav;
  const shopNav = user?.id ? cartNav : userNav;

  const navigate = useNavigate();

  const hdlLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="flex items-center justify-between">
      <div className="bg-base-100 p-2 rounded-md">
        <a className="btn btn-ghost text-xl">IT PHOTOS</a>
      </div>

      <div className="flex gap-20 text-l pr-20">
        {finalNav.map((el) => (
          <div key={el.to}>
            <Link to={el.to} className="hover:text-gray-300 transition-colors duration-300">
              {el.text}
            </Link>
          </div>
        ))}
      </div>

      <div className="flex gap-4">
      {shopNav.map((el) => (
  <div key={el.to}>
    <Link to={el.to} className="hover:text-gray-300 transition-colors duration-300 flex items-center">
      {el.icon && <span className="mr-1">{el.icon}</span>}
    </Link>
  </div>
))}

        {user?.id && (
          <div className="flex items-center pr-3">
            <Link to="#" onClick={hdlLogout}>Logout</Link>
          </div>
        )}
         
        {!user?.id && (
          <div className="flex gap-6">
            <Link to={guestNav[0].to} className="hover:text-gray-300 transition-colors duration-300" >{guestNav[0].text}</Link>
            <Link to={guestNav[1].to} className="hover:text-gray-300 transition-colors duration-300 pr-4">{guestNav[1].text}</Link>
          </div>
        )}
      </div>
    </div>
  );
}
