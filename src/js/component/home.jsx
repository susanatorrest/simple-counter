
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const SimpleCounter = (props) => {
	return (
		<div className="main-container">
			<div className="counter">
				<div className="clock">
					<i className="fa-solid fa-clock"></i>
				</div>
				<div className="six">{props.d6}</div>
				<div className="five">{props.d5}</div>
				<div className="four">{props.d4}</div>
				<div className="three">{props.d3}</div>
				<div className="two">{props.d2}</div>
				<div className="one">{props.d1}</div>
			</div>

		</div>
	);
};

SimpleCounter.propTypes = {
	d1: PropTypes.number,
	d2: PropTypes.number,
	d3: PropTypes.number,
	d4: PropTypes.number,
	d5: PropTypes.number,
	d6: PropTypes.number,
}

let counter = 0;

setInterval(function () {

	const six = Math.floor(counter / 100000 % 10);
	const five = Math.floor(counter / 10000 % 10);
	const four = Math.floor(counter / 1000 % 10);
	const three = Math.floor(counter / 100 % 10);
	const two = Math.floor(counter / 10 % 10);
	const one = Math.floor(counter / 1 % 10);

	counter++

ReactDOM.render(<SimpleCounter d1 = {one} d2 = {two} d3 = {three} d4 = {four} d5 = {five} d6 = {six}  />, document.querySelector("#counter"));
},1000)