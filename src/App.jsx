import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
