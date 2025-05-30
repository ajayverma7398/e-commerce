import React from "react";
import Nav from "./comp/nav";
import { BrowserRouter } from "react-router-dom";
import Rout from "./comp/rout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Rout />
      </BrowserRouter>
    </>
  );
};
export default App;


// to see in broser: https://e-commerce-kfaffh27p-ajay-kumar-vermas-projects-4b5c4e9a.vercel.app/
