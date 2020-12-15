import React, { useContext, useEffect } from "react";
import gsap from "gsap";
import { OrderContext } from "./OrderContext";
import Checkmark from "./Checkmark";

function Confirmation(props) {
  const [orderObj, setOrderObj] = useContext(OrderContext);

  const resetBeers = orderObj.map(({ amount, price, ...restOfData }) => ({ ...restOfData, amount: 0, price: 0 }));

  useEffect(() => {
    gsap.fromTo(".confirmation-wrapper", { opacity: 0, ease: "expo.out", y: -100 + "%" }, { opacity: 1, y: 0 + "%", duration: 1 });
  }, []);
  return (
    <section className="confirmation-wrapper">
      <h1>Thank you for your order</h1>
      <Checkmark />
      <h2>
        Your order number is <span> #{props.confirmationP}</span>
      </h2>
      <button
        onClick={() => {
          props.setPage("orderPage");
          setOrderObj(resetBeers);
          props.setCategory("All");
        }}
      >
        Order again
      </button>
    </section>
  );
}

export default Confirmation;
