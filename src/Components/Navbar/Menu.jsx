import React from "react";
import { Link } from "react-router-dom";

const Menu = ({ header, items, active }) => {
  return (
    <div className={active ? "menu active" : "menu"}>
      <div className="blur">
        <div className="menu__content">
          <div className="menu__header">{header}</div>
          <ul style={{ listStyleType: "none" }}>
            {items.map(item => (
              <li>
                <Link to={item.href}>{item.value}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
