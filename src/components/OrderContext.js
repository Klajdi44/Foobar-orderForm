import React, { useState, createContext } from 'react';

export const OrderContext = createContext();

export function OrderProvider(props) {
	const [orderObj, setOrderObj] = useState([]);

	return (

		<OrderContext.Provider value={[orderObj, setOrderObj]}>
			{props.children}
		</OrderContext.Provider>
	)

}