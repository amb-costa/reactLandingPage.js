import React from "react";

//creating Jumbotron
const Jumbotron = () => {
  return (

      <div className="col-11 bg-light my-4 w-100 p-4">
        <h1 style={{fontSize:70}}>A Warm Welcome!</h1>
        <p style={{fontSize:20}}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
        </p>
        <button className="btn btn-primary mb-4 px-3" type="button">
          Call to action!
        </button>
      </div>

  );
};

export default Jumbotron;
