import React, {useState} from "react";

import './Accordion.scss';

const Accordion = ({post}) => {
    const {title, body} = post;

    const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className={`accordion-title ${isActive ? 'active' : ''}`} onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      <div className={ isActive  ? 'panel-open' : 'panel-close' }>{body}</div>
    </div>
  );
}

export default React.memo(Accordion);