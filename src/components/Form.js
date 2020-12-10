import React, { useContext } from "react";
import CreditCard from "./CreditCard";
import { OrderContext } from "./OrderContext";
import postData from "../modules/postData";

function Form(props) {
  const [orderObj] = useContext(OrderContext);
  let filteredPostOrders = orderObj.map((order) => {
    return order.amount < 1 ? undefined : { name: order.name, amount: Number(order.amount) };
  });

  filteredPostOrders = filteredPostOrders.filter((order) => {
    return order !== undefined;
  });

  function orderBeers() {
    postData(filteredPostOrders, "https://foobar-exam-data.herokuapp.com/order", (data) => {
      return data.message === "added" ? (
        <div>
          {props.setPage("confirmationPage")}
          {props.setConfirmationP(data.id)}
          {console.log(data.id)}
        </div>
      ) : null;
    });
  }

  return (
    <article className="form-wrapper">
      <div className="cc-wrapper">
        {/* <button onClick={() => props.setPage("orderPage")}> Go Back</button> */}
        <h1>Payment</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            orderBeers();
          }}
        >
          <CreditCard />
          <button className="form-btn">Order</button>
        </form>
      </div>
      <div className="order-list-wrapper">
        <h1>Your Order</h1>
        <ul>
          {orderObj.map((order) => {
            const imageUrl = order.name.replace(/\s+/g, "").toLowerCase();
            if (order.amount > 0) {
              return (
                <li>
                  <img src={`images/${imageUrl}.png`} alt="Order Beer"></img>
                  <div>
                    <h2>{order.name}</h2>
                    <span>Quantity {order.amount}</span>
                  </div>
                  <span>{order.price}DKK</span>
                </li>
              );
            }
            return null;
          })}
        </ul>
      </div>
    </article>
  );
}

export default Form;
