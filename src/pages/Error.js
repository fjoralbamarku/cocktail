import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div>
      <section>
        <h1>Oops !It's a dead end !!!</h1>
      </section>
      <Link to="/">Back Home</Link>
    </div>
  );
};
export default Error;
