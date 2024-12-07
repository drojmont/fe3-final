import React, { useState, useEffect } from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [favs, setFavs] = useState([]);

  const getAllfavs = () => {
    const allfavs = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);

      try {
        const parsedValue = JSON.parse(value);
        allfavs.push(parsedValue);
      } catch (error) {
        console.log(
          `Error en lectura del localStorage, con key: ${key} y value: ${value} error ${error}`
        );
      }
    }
    console.log(allfavs);
    return allfavs;
  };

  useEffect(() => {
    setFavs(getAllfavs);
  }, []);

  return (
    <>
      {/* este componente debe consumir los destacados del localStorage */}
      {/* Deberan renderizar una Card por cada uno de ellos */}
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favs.map((user) => (
          <Card
            key={user.id}
            name={user.name}
            username={user.username}
            id={user.id}
          />
        ))}
      </div>
    </>
  );
};

export default Favs;
