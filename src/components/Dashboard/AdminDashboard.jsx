import React from "react";
import Header from "../Other/Header";
import CreateTask from "../Other/CreateTask";
import AllTask from "../Other/AllTask";

const AdminDashboard = (props) => {
  return (
    <div className="adminDash p-10 bg-[#1c1c1c] h-screen overflow-auto w-full">
      <Header setUser={props.setUser} data={props.data} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
