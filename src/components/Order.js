import React, { useContext, useEffect, useState } from 'react';
import Form from "./Form";
import Menu from "./Menu";
import Confirmation from "./Confirmation";
import { OrderContext } from './OrderContext';

function Order(props) {
  const [page, setPage] = useState('orderPage');

  const beersFromList = props.apiData[0];
  const beersFromTap = props.apiData[1].taps.map((beer) => beer.beer);
  const filteredBeers = beersFromList.filter((beers) => beersFromTap.includes(beers.name));


  const [orderObj, setOrderObj] = useContext(OrderContext);

  useEffect(() => {
    const orders = filteredBeers.map(tap => {

      return { name: tap.name, amount: 0, price: 0 }
    });
    setOrderObj(orders);
  }, []);



  return (
    <section>
      {page === 'orderPage' ? <Menu setPage={setPage} apiData={props.apiData} filteredBeers={filteredBeers} /> : null}
      {page === 'formPage' ? <Form setPage={setPage} /> : null}

      {/* <Confirmation /> */}
    </section>
  )
}


export default Order;
