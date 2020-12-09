import React, { useContext } from 'react'
import { OrderContext } from './OrderContext';

function Confirmation(props) {

  const [orderObj, setOrderObj] = useContext(OrderContext);

  const resetBeers = orderObj.map(({ amount, price, ...restOfData }) => ({ ...restOfData, amount: 0, price: 0 }));


  return (
    <section className="confirmation-wrapper">
      <h1>{props.confirmationP}</h1>
      <h2>hello</h2>
      <button onClick={() => {
        props.setPage('orderPage');
        setOrderObj(resetBeers);
      }}>Order again</button>
    </section >
  );
}

export default Confirmation;
