import { Link } from "react-router-dom";
import { MENU } from "../constants";
import "./navigation.css";

export default function NavigationBar() {
  const getMenuItems = () => {
    return Object.keys(MENU).map((entry) => {
      return (
        <Link
          key={entry}
          to={`/${entry}`}
          className="menu-item"
        >
          {MENU[entry].name}
        </Link>
      );
    });
  };

  return (
      <header className="menu">
        {getMenuItems()}
      </header>
  );
}
