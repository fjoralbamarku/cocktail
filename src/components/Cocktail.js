import React from "react";
import { Link } from "react-router-dom";
const Cocktail = ({ image, name, info, id, glass }) => {
  return (
    <article>
      <img src={image} alt="cocktail photo" className="imgSize" />
      <h4>{name}</h4>
      <h4>{glass}</h4>
      <p>{info}</p>
      <Link to={"/cocktails/${id}"}>details</Link>
    </article>
  );
};
export default Cocktail;
