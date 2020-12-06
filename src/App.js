import React, { useState, useEffect } from "react";
import Order from "./components/Order";
import Form from "./components/Form";
import Menu from "./components/Menu";
import Confirmation from "./components/Confirmation";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Order />
    </div>
  );
}

export default App;
