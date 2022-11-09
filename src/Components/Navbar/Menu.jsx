import React from "react";
import { Link } from "react-router-dom";

const Menu = ({ header, items, active, setActive }) => {
  return (
    <div
      className={active ? "menu active" : "menu"}
      onClick={() => setActive(false)}>
      <div className="blur">
        <div className="menu__content" onClick={e => e.stopPropagation()}>
          <div className="menu__header">{header}</div>
          <ul style={{ listStyleType: "none" }}>
            <div
              style={{
                color: "white",
                display: "flex",
                justifyContent: "flex-end",
                fontSize: "22px",
                fontWeight: "700",
                padding: "10px",
                cursor: "pointer",
              }}
              onClick={() => setActive(false)}>
              X
            </div>
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
