/* eslint-disable no-unused-vars */
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import Hero from "./pages/Hero"
import Dashboard from "./pages/Dashboard"
import Bookings from "./pages/Bookings"
import Cabins from "./pages/Cabins"
import Users from "./pages/Users"
import Settings from "./pages/Settings"
import Account from "./pages/Account"
import Login from "./pages/Login"
import NotFound from "./pages/PageNotFound"
import PageNotFound from "./pages/PageNotFound"

import GlobalStyles from "./styles/GlobalStyles"

function App() {
	return (
		<>
		<GlobalStyles />
		<BrowserRouter>
			<Routes>
				<Route index element={<Navigate replace to="dashboard" />} />
				<Route path="dashboard" element={<Dashboard />} />
				<Route path="bookings" element={<Bookings />} />
				<Route path="cabins" element={<Cabins />} />
				<Route path="users" element={<Users />} />
				<Route path="settings" element={<Settings />} />
				<Route path="account" element={<Account />} />
				<Route path="login" element={<Login />} />
				<Route path="*" element={<PageNotFound />} />
				<Route path="hero" element={<Hero />} />
				{/* <Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<NotFound />} /> */}
			</Routes>
			
		</BrowserRouter>
		</>
	)
}

export default App
