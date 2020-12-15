import React, { useContext, useEffect, useState } from "react";
import Form from "./Form";
import Menu from "./Menu";
import Confirmation from "./Confirmation";

import { OrderContext } from "./OrderContext";

function Order(props) {
  const [page, setPage] = useState("orderPage");
  const [confirmationP, setConfirmationP] = useState("");
  const [category, setCategory] = useState('All');

  const beersFromList = props.apiData[0];
  const beersFromTap = props.apiData[1].taps.map((beer) => beer.beer);
  const filteredBeers = beersFromList.filter((beers) => beersFromTap.includes(beers.name));
  const unavailableBeers = beersFromList.filter((beers) => !beersFromTap.includes(beers.name));
  let updated = filteredBeers.filter(beer => beer.category === category);
  if (category === 'All') {
    updated = filteredBeers
  }

  // eslint-disable-next-line
  const [orderObj, setOrderObj] = useContext(OrderContext);

  useEffect(() => {
    const orders = filteredBeers.map((tap) => {
      return { name: tap.name, amount: 0, price: 0 };
    });
    setOrderObj(orders);
    // eslint-disable-next-line
  }, []);
  console.log(category);

  function updateCategory(e) {
    setCategory(e.target.innerText);
  }
  return (
    <section>
      <div>
        <button disabled={category === 'All'} onClick={updateCategory}>All</button>
        {filteredBeers.map(beer => {
          return (
            <button disabled={beer.category === category} onClick={updateCategory}>{beer.category}</button>
          )
        })} </div>
      {page === "orderPage" ? <Menu setPage={setPage} apiData={props.apiData} filteredBeers={updated} unavailableBeers={unavailableBeers} /> : null}
      {page === "formPage" ? <Form setPage={setPage} setConfirmationP={setConfirmationP} /> : null}
      {page === "confirmationPage" ? <Confirmation confirmationP={confirmationP} setPage={setPage} /> : null}
    </section>
  );
}

export default Order;
