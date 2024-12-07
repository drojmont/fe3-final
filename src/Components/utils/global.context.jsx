import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useReducer,
} from "react";
import axios from "axios";
import funReducer from "./reducer";

const initialState = { theme: "", data: [], favs: new Map() };

const ContextGlobal = createContext();

const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [state, dispatch] = useReducer(funReducer, initialState);

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(url).then((response) => {
      console.log(response);
      dispatch({ type: "DATAUPDATE", payload: response?.data });
    });
  }, []);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;
export const useContextStates = () => useContext(ContextGlobal);
