import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const param = useParams();
  const url = `https://jsonplaceholder.typicode.com/users/${param.id}`;

  const [data, setData] = useState({});

  useEffect(() => {
    axios(url).then((response) => {
      setData(response.data);
      console.log(response);
    });
  }, []);

  return (
    <>
      <h1>{`Detail Dentist ${param.id}`}</h1>
      <h2>{data.name}</h2>
      <h3>{data.email}</h3>
      <h3>{data.phone}</h3>
      <h4>{data.website}</h4>
      {/* DONE aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* DONE Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  );
};

export default Detail;
