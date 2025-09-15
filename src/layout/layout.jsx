import React from "react";
import Navbar from "../components/3dcards/navbar";
import PortfolioFooter from "../components/footer";

const Layout = ({ children }) => {
	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<main className="flex-1 pt-16">{/* pt-16 for navbar height offset */}
				{children}
			</main>
			<PortfolioFooter />
		</div>
	);
};

export default Layout;
