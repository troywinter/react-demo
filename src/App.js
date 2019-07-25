import React, { Component } from "react";
import "./App.css";
import Entry from "./Entry.js";

class App extends Component {
	render() {
		return(
			<div class="app-container">
				<Heading />
				<div className="entry-list">
					<Entry />
					<Entry />
				</div>
			</div>
		);
	}
}

class Heading extends Component {
	render() {
		return(
				<div className="Heading">
					<a class="css-home elem-header">Home</a>
					<a class="css-blog elem-header">Blog</a>
					<a class="css-aboutme elem-header">About Me</a>
				</div>
		);
	}
}

function Welcome(props) {
	return <h1>Hello, {props.name}</h1>;
}

function NumberList(props) {
	const numbers = props.numbers;
	const listitems = numbers.map((n) =>
		<li key={n.toString()}>{n}</li>
	);
	return (
		<ul>{listitems}</ul>
	);
}

export {App, NumberList, Welcome};
