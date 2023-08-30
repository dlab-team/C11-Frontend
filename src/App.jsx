// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Login from "./pages/Login"
import Home from "./pages/landing/Home";
import FloatingButton from "./components/FloatingButton";
import { React } from "react";

function App() {
	return (
		<main className="app">
			<Router>
				<Nav />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/" element={<FloatingButton />} />
          <Route exact path='/login' element={ <Login /> } />
				</Routes>
			</Router>
		</main>
	);
}

export default App;
