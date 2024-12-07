import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useContextStates } from "./utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useContextStates();

  const onThemeChange = () => {
    dispatch({ type: "TOGGLETHEME" });
  };

  useEffect(() => {
    const elemento = document.querySelector("nav");
    if (state.theme) {
      elemento.classList.add("dark");
    } else {
      elemento.classList.remove("dark");
    }
  }, [state.theme]);

  return (
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/favs">Favs</Link>
      <Link to="/detail">Detail</Link>
      <Link to="/contact">Contact</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={onThemeChange}>Change theme</button>
    </nav>
  );
};

export default Navbar;
