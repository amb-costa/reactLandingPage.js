import React from "react";
import PropTypes from "prop-types";

//creating one basic structure card
//using <Card /> four times on main jsx
//since every card content is the same

const Card = (props) => {
  return (
    <div className="col-lg mx-2 card px-0">
      <img src={props.imageUrl} className="card-img-top" alt="" />
      <div className="card-body text-center">
        <h5 className="card-title fw-bold">{props.title}</h5>
        <p className="card-text">{props.desc}</p>
      </div>
      <div className="card-footer w-100 bg-white text-center">
        <a href={props.buttonUrl} className="btn btn-primary px-2">
          {props.buttonLabel}
        </a>
      </div>
    </div>
  );
};

Card.defaultProps = {
  imageUrl: "https://picsum.photos/id/420/500/325",
  title: "Title Card",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, id provident distinctio fuga repellat reiciendis itaque officia recusandae sequi voluptates dolores tempora maxime quod. Laudantium modi porro eveniet incidunt labore.",
  buttonUrl: "https://4geeks.com",
  buttonLabel: "Find Out More!",
};

Card.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  buttonUrl: PropTypes.string,
  buttonLabel: PropTypes.string,
};

export default Card;
