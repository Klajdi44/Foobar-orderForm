import React, { useContext } from 'react';
import CreditCard from './CreditCard';
import { OrderContext } from './OrderContext';
import postData from '../modules/postData';

function Form(props) {
  const [orderObj] = useContext(OrderContext);
  let filteredPostOrders =
    orderObj.map((order) => {
      return order.amount < 1 ? undefined : { name: order.name, amount: Number(order.amount) }
    });

  filteredPostOrders = filteredPostOrders.filter(order => {
    return order !== undefined;
  });


  function orderBeers() {

    postData(filteredPostOrders, 'https://foobar-exam-data.herokuapp.com/order', (data) => {
      return data.message === "added" ? <div>
        {props.setPage('confirmationPage')}
        {props.setConfirmationP(data.id)}
        {console.log(data.id)}

      </div> : null;
    })
  }


  return (
    <article className="form-wrapper">
      <div>
        <button onClick={() => props.setPage('orderPage')}> Go Back</button>
        <form onSubmit={(e) => {
          e.preventDefault();
          orderBeers();
        }}>
          <CreditCard />
          <button >Submit</button>
        </form>
      </div>
      <div>
        {orderObj.map((order) => {
          const imageUrl = order.name.replace(/\s+/g, "").toLowerCase();
          if (order.amount > 0) {
            return (
              <li>
                <img src={`images/${imageUrl}.png`} alt="Order Beer"></img>
                <h1>{order.name}</h1>
                <span>{order.amount}</span>
              </li>
            );
          }
          return null;
        })}
      </div>
    </article>
  );
}

export default Form;
