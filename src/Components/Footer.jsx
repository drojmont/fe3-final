import React, { useEffect, useState } from "react";
import { useContextStates } from "../Components/utils/global.context";

const Footer = () => {
  const { state, dispatch } = useContextStates();

  useEffect(() => {
    const elemento = document.querySelector("footer");
    console.log(elemento);
    if (state.theme) {
      elemento.classList.add("dark");
    } else {
      elemento.classList.remove("dark");
    }
  }, [state.theme]);

  return (
    <footer>
      <p>Powered by</p>
      <img src="./img/DH.png" alt="DH-logo" />
    </footer>
  );
};

export default Footer;
