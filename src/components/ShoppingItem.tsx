import React from 'react';
import { Bikes } from '../interfaces/bikes';

interface Props {
	bike: Bikes;
}

export const ShoppingItem: React.FC<Props> = ({ bike }): JSX.Element => {
	//console.log(props);
	return (
		<div className="w-20 h-20 ">
			<h1>{bike.name}</h1>
            <h2>{bike.brand}</h2>
            <p>${bike.price}</p>
		</div>
	);
};
