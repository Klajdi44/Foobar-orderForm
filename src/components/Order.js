import React, { useContext, useEffect } from 'react';
import Form from "./Form";
import Menu from "./Menu";
import Confirmation from "./Confirmation";
import { OrderContext } from './OrderContext';

function Order(props) {
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
      {/* <Form /> */}
      <Menu apiData={props.apiData} filteredBeers={filteredBeers} />
      {/* <Confirmation /> */}
    </section>
  )
}


export default Order;
