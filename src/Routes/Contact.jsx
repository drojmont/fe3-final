import React, { useEffect } from "react";
import Form from "../Components/Form";
import { useContextStates } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { state, dispatch } = useContextStates();

  useEffect(() => {
    const elemento = document.getElementById("contact");
    console.log(elemento);
    if (state.theme) {
      elemento.classList.add("dark");
    } else {
      elemento.classList.remove("dark");
    }
  }, [state.theme]);

  return (
    <div id="contact">
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </div>
  );
};

export default Contact;
