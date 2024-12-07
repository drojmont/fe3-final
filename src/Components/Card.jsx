import React from "react";
import { useContextStates } from "./utils/global.context";
import funReducer from "./utils/reducer";

const Card = ({ name, username, id }) => {
  const { state, dispatch } = useContextStates();

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
      {/* En cada card deberan mostrar en name - username y el id */}

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <h1>{name}</h1>
      <h2>{id}</h2>
      <h3>{username}</h3>
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;
