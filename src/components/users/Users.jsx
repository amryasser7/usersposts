import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

import CardView from "../cardView/CardView";
import Loading from "../loadingComponent/LoadingComponet";
import Error from "../errorComponent/ErrorComponent";
import "./Users.scss";

const Users = () => {
  const object = {
    id: 1,
    name: "Name",
    username: "User Name",
    email: "Email",
    address: {
      street: "Address: Street",
      city: "City",
    },
    phone: "Phone",
    website: "Website",
    company: {
      name: "Company",
    },
  };

  const getUsers = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    return res.data;
  };

  const { data, status } = useQuery("users", getUsers);

  const displayUsers = () => {
    const users = data?.map((user) => {
      return <CardView user={user} key={user.id} />;
    });
    if (users?.lenght !== 0) return users;
    else return <h1>No Users Found</h1>;
  };

  return (
    <div className="users-page">
      <h1>Users</h1>
      {status === "loading" ? (
        <Loading />
      ) : status === "error" ? (
        <Error description={"Can not get users, please refresh the page"} />
      ) : (
        <div className="grid-container">{displayUsers()}</div>
      )}
    </div>
  );
};

export default React.memo(Users);
