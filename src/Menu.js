import React, { useState } from "react";

const Menu = (props) => {
  const [toggle, setToggle] = useState(false);
  const [visibility, setVisibility] = useState("hidden");

  const handleToggle = () => {
    setToggle(!toggle);
    toggle ? setVisibility("visible") : setVisibility("hidden");
  };

  return (
    <div className="container">
      {props.menu.map((val, i) => {
        let item = Object.keys(val)[0];
        if (Array.isArray(val[item])) {
          return (
            <div key={i}>
              <div>
                {item}
                <span onClick={(i) => handleToggle(i)}>
                  {toggle ? "+" : "-"}
                </span>
              </div>
              {!toggle && (
                <Menu id={visibility} className={"sub" + i} menu={val[item]} />
              )}
            </div>
          );
        } else {
          return (
            <div key={i}>
              <div>{val[item]}</div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Menu;
