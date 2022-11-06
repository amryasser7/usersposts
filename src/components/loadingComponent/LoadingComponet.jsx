import React from "react";

import loadingImage from '../../images/loading-gif.gif';
import "./LoadingComponet.scss";

const Loading = () => {
  return (
    <div className="window-loading">
      <img src={loadingImage} />
    </div>
  );
};

export default Loading;
