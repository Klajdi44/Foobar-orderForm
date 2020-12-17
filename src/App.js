import React, { useState, useEffect } from "react";
import customInterval from "./modules/customInterval";
import getData from "./modules/getData";
import Loader from "react-loader-spinner";
import Order from "./components/Order";
import { OrderProvider } from "./components/OrderContext";

import "./App.css";

function App() {
  const [apiData, setApiData] = useState([]);



  useEffect(() => {
    const urls = ["https://foobar-exam-data.herokuapp.com/beertypes", "https://foobar-exam-data.herokuapp.com/"];
    function fetchData() {
      getData(urls).then((data) => setApiData(data));
    }
    customInterval(fetchData, 5000);
  }, []);

  return (
    <div className="App">
      {apiData.length === 0 ? (
        <div className="loader-wrapper">
          <Loader type="RevolvingDot" color="#bf2d26" height={100} width={100} />
        </div>
      ) : (
          <OrderProvider>
            <Order apiData={apiData} />{" "}
          </OrderProvider>
        )}
    </div>
  );
}

export default App;
