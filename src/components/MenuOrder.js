import React, { useState } from 'react';

function MenuOrder(props) {
	const [beerCount, setBeerCount] = useState(0);
	// const [price, setPrice] = useState(50);

	function addBeer() {
		setBeerCount(beerCount + 1);
		// setPrice(price + 50);
	}

	function removeBeer() {
		beerCount === 0 ? setBeerCount(0) : setBeerCount(beerCount - 1);

		// price === 50 ? setPrice(50) : setPrice(price - 50);
	}


	return (
		<div className="menu-order">
			<h3>50DKK</h3>
			<button onClick={removeBeer}>-</button>
			<span>{beerCount}</span>
			<button onClick={addBeer} >+</button>
		</div>

	);
}

export default MenuOrder;