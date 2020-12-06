import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Menu from "./components/Menu";
import Confirmation from "./components/Confirmation";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Form />
      <Menu />
      <Confirmation />
    </div>
  );
}

export default App;
