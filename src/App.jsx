// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/landing/Home";
import FloatingButton from "./components/FloatingButton";
import { React } from "react";
import MainBuscasTalento from "./components/Landing/MainBuscasTalento.jsx";

function App() {
	return (
		<main className="app">
			<Router>
				<Nav />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/" element={<FloatingButton />} />
				</Routes>
			</Router>
		</main>
	);
}

export default App;
