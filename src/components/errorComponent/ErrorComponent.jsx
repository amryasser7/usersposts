import React from "react";

import ErrorImage from '../../images/error.png';
import "./ErrorComponent.scss";

const Error = ({description}) => {
  return (
    <div className="error">
      <img src={ErrorImage} />
      <h1>{description}</h1>
    </div>
  );
};

export default Error;
