import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ContextProvider from "./Components/utils/global.context";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
