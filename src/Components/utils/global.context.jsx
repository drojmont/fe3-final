import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useReducer,
} from "react";
import axios from "axios";
import funReducer from "./reducer";

const initialState = { theme: "", data: [] };

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

  /*
  const value = useMemo(
    () => ({ data, setData }),
    [data]
  );

  */

  return (
    <ContextGlobal.Provider value={{ state }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;
export const useContextStates = () => useContext(ContextGlobal);
