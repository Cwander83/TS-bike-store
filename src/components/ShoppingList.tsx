import React, { useState, useEffect } from 'react';

import { Bikes } from '../interfaces/bikes';
import { ShoppingItem } from './ShoppingItem';

export const ShoppingList = () => {
	const [data, setData] = useState<Bikes[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('http://localhost:3001/bikes');
				const json = await response.json();
				setData(json);
			} catch (error) {
				console.log('error', error);
			}
		};

		fetchData();
	}, []);
	console.log(data);
	return (
		<div className="flex flex-row flex-wrap ">
			{data &&
				data.map((bike, i) => {
					return (
						<div key={bike.id}>
							<ShoppingItem  bike={bike} />
						</div>
					);
				})}
		</div>
	);
};
