import React, { useContext, useState } from 'react';
import { OrderContext } from './OrderContext';

function MenuOrder(props) {
	const [orderObj, setOrderObj] = useContext(OrderContext);
	const oneOrder = orderObj.find(o => o.name === props.name);

	function addBeer() {
		const nextOrder = orderObj.map(order => {
			if (order.name === props.name) {
				order.amount = order.amount + 1;
				order.price = order.price + 50;
			}
			return order;
		})

		setOrderObj(nextOrder);

	}
	console.log(orderObj);

	function removeBeer() {

		const prevOrder = orderObj.map(order => {

			if (order.name === props.name && order.amount !== 0) {
				order.amount = order.amount - 1;
				order.price = order.price - 50;

			}
			return order;
		})

		setOrderObj(prevOrder);

	}
	console.log(orderObj.price);
	return (
		<div className="menu-order">
			<h3>{props.showCheckoutPrice ? oneOrder?.price + 'DKK' : 50 + 'DKK'}</h3>
			<button onClick={removeBeer}>-</button>
			<span>{oneOrder?.amount}</span>
			<button onClick={addBeer} >+</button>
		</div >
	);
}

export default MenuOrder;