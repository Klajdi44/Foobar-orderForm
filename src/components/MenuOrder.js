import React, { useContext } from 'react';
import { OrderContext } from './OrderContext';

function MenuOrder(props) {
	const [orderObj, setOrderObj] = useContext(OrderContext);
	const oneOrder = orderObj.find(o => o.name === props.name);

	function addBeer() {
		const nextOrder = orderObj.map(order => {
			if (order.name === props.name) {
				order.amount = order.amount + 1;
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
			}
			return order;
		})

		setOrderObj(prevOrder);

	}

	return (
		<div className="menu-order">
			<h3>50DKK</h3>
			<button onClick={removeBeer}>-</button>
			<span>{oneOrder?.amount}</span>
			<button onClick={addBeer} >+</button>
		</div >

	);
}

export default MenuOrder;