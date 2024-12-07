import React from "react";
import { useState } from "react";
import FormCard from "./utils/FormCard";
import FormAviso from "./utils/FormAviso";

const Form = () => {
  const [count, setCount] = useState(0);
  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
  });

  const [mostrarAvisoConfirmacion, setMostrarAvisoConfirmacion] =
    useState(false);

  const [error, setError] = useState("");
  const nombreRegex = /^[A-Za-z ]{5,}$/;
  const emailRegex = /^[A-Za-z0-9]{2,}@[A-Za-z0-9]{2,}\.[A-Za-z.]+$/;

  const eventHandler = (event) => {
    event.preventDefault();

    if (!nombreRegex.test(usuario.nombre)) {
      setError("**Por favor verifique su información nuevamente**");
      setMostrarAvisoConfirmacion(false);
    } else if (!emailRegex.test(usuario.email)) {
      setError("**Por favor verifique su información nuevamente**");
      setMostrarAvisoConfirmacion(false);
    } else {
      setMostrarAvisoConfirmacion(true);
      setError("");
    }
  };

  return (
    <div>
      <FormAviso mensaje={error} />
      {mostrarAvisoConfirmacion ? <FormCard datos={usuario} /> : null}
      <form onSubmit={eventHandler}>
        <label>Nombre completo</label>
        <input
          type="text"
          onChange={(event) => {
            setUsuario({ ...usuario, nombre: event.target.value });
          }}
        ></input>
        <label>Email</label>
        <input
          type="email"
          onChange={(event) => {
            setUsuario({ ...usuario, email: event.target.value });
          }}
        ></input>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
