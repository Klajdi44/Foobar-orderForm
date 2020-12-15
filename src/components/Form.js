import React, { useContext, useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import CreditCard from "./CreditCard";
import { OrderContext } from "./OrderContext";
import postData from "../modules/postData";

function Form(props) {
  const [orderObj] = useContext(OrderContext);
  gsap.registerPlugin(ScrollToPlugin);

  // useEffect(() => {
  //   gsap.to(window, { duration: 0.1, ease: "none", scrollTo: 0 });
  //   gsap.fromTo(".form-wrapper", { opacity: 0, x: 100 + "%" }, { opacity: 1, x: 0 + "%", stagger: 0.2, duration: 1 });
  // }, []);
  useEffect(() => {
    var tl = gsap.timeline({ defaults: { duration: 2, ease: "power2" } });
    tl.to(window, { duration: 0.1, scrollTo: 0 })
      .from(".form-wrapper", { opacity: 0.5 }) //child tweens will inherit the duration and from the parent timeline!
      .to(".form-wrapper", { opacity: 1 });
  }, []);

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
      <div className="back-wrapper">
        <button className="back" onClick={() => props.setPage("orderPage")}>
          <svg height="50" width="30">
            <polyline points="30,50 0,25 30,0" className="triangle" />
            Sorry, your browser does not support inline SVG.
          </svg>
          Go Back
        </button>
      </div>
      <div className="cc-wrapper">
        <h1>Payment</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            orderBeers();
          }}
        >
          <CreditCard />
          <div className="total-price">
            Total{" "}
            {orderObj.reduce((acc, value) => {
              return acc + value.price;
            }, 0)}
            DKK
          </div>
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
                <li key={order.name}>
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
