import React from "react";
import Form from "./Form";
import Menu from "./Menu";
import Confirmation from "./Confirmation";

function Order(props) {

  return (
    <section>
      {/* <Form /> */}
      <Menu apiData={props.apiData} />
      {/* <Confirmation /> */}
    </section>
  );
}

export default Order;
