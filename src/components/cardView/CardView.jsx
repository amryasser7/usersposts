import React from "react";
import { useNavigate } from "react-router-dom";

import NameImage from "../../images/name.svg";
import UserNameImage from "../../images/username.svg";
import PhoneImage from "../../images/phone.svg";
import EmailImage from "../../images/email.svg";
import AddressImage from "../../images/address.svg";
import CompanyImage from "../../images/company.svg";
import WebsiteImage from "../../images/website.svg";

import "./CardView.scss";

const CardView = ({ user }) => {
  const { id, name, username, phone, email, address, company, website } = user;

  const link = `https://www.${website}`;
  const navigate = useNavigate();

  return (
    <div className="card-container">
      <div className="data-section">
        <img src={NameImage} title={"Name"} />
        <span>{name}</span>
      </div>
      <div className="data-section">
        <img src={UserNameImage} title={"User Name"} />
        <span>{username}</span>
      </div>
      <div className="data-section">
        <img src={PhoneImage} title={"Phone"} />
        <span>{phone}</span>
      </div>
      <div className="data-section">
        <img src={EmailImage} title={"Email"} />
        <span>{email}</span>
      </div>
      <div className="data-section">
        <img src={AddressImage} title={"Address: Street, city"} />
        <span>{`${address.street}, ${address.city}`}</span>
      </div>
      <div className="data-section">
        <img src={CompanyImage} title={"Company"} />
        <span>{company.name}</span>
      </div>
      <div className="data-section">
        <img src={WebsiteImage} title={"Website"} />
        <a href={link} target="_blank">
          {website}
        </a>
      </div>
      <input
        className="button"
        type="button"
        value="Posts"
        onClick={() => {
            navigate(`/Posts/${id}`, { state: { name: name } });
        }}
      />
    </div>
  );
};

export default React.memo(CardView);
