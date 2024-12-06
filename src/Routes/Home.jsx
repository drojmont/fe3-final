import React, { useContext, useEffect } from "react";
import Card from "../Components/Card";
import { useContextStates } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state, dispatch } = useContextStates();

  {
    /* Aqui deberias renderizar las cards */
  }
  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {state.data.map((user) => (
          <Card
            key={user.id}
            name={user.name}
            username={user.username}
            id={user.id}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
