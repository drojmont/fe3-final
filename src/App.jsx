import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import React, { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    //navigate("/home");
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
