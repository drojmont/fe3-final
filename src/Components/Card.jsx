import React, { useEffect } from "react";
import { useContextStates } from "./utils/global.context";
import { Link } from "react-router-dom";

const Card = ({ name, username, id }) => {
  const { state, dispatch } = useContextStates();

  useEffect(() => {
    const elemento = document.querySelector(".card");
    console.log(elemento);
    if (state.theme) {
      elemento.classList.add("dark");
    } else {
      elemento.classList.remove("dark");
    }
  }, [state.theme]);

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    dispatch({
      type: "FAVS",
      payload: [id, { id: id, name: name, username: username }],
    });

    console.log(state);
  };

  return (
    <div className="card">
      {/* DONE: En cada card deberan mostrar en name - username y el id */}

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* DONE: Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <Link to={`/detail/${id}`}>
        <h1>{name}</h1>
        <h2>{id}</h2>
        <h3>{username}</h3>
      </Link>
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;
