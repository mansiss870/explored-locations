import React from "react";
import UsersList from "../Components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Mansi Sharma",
      image: "http://britishchessnews.com/wp-content/uploads/2019/09/109879063-user-avatar-icon-sign-profile-symbol.jpg",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
