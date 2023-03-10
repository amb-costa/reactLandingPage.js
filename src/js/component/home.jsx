import React from "react";

//importing Navbar
import Navbar from "./navbar.jsx";

//importing Jumbotron
import Jumbotron from "./jumbotron.jsx";

//importing Card
import Card from "./card.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
//enclosing cards in a row, so they collapse when the page gets smaller
const Home = () => {
	return (
		<>
		<div className="row">
				<Navbar />
		</div>
		<div className="row container-fluid mx-auto px-5">
			<Jumbotron />
		</div>
		<div className="container-fluid px-5 mx-auto">
		<div className="row px-0 mx-auto w-100">
					<Card />
					<Card />
					<Card />
					<Card />
		</div>
		</div>
		</>
	);
};

export default Home;
