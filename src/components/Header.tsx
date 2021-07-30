import React from 'react';

export const Header = () => {
	return (
		<header className="w-full flex justify-between px-16 shadow-sm py-5 bg-gray-200 items-center">
			<h1 className="text-3xl">Bike Store</h1>
			<nav className="text-xl">
				<a href="/">All Bikes</a>
				<a href="/">Adult</a>
				<a href="/">Kids</a>
			</nav>
		
			<svg
				className="w-6 h-6"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
				/>
			</svg>
		</header>
	);
};
