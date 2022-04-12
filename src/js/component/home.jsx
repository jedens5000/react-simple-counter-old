// import React from "react";
import React, { useEffect, useState } from "react";

export default function Auto() {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter((counter) => counter + 1);
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return <div className="Auto">{counter}</div>;
}
