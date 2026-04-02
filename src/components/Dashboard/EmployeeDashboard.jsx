import React from "react";
import Header from "../Other/Header";
import TaskNumber from "../Other/TaskNumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = (props) => {

  
  return (
    <div className="p-5 lg:p-10 bg-[#1c1c1c] h-screen w-full overflow-auto">
      <Header setUser={props.setUser} data={props.data} />
      <TaskNumber data={props.data} />
      <TaskList data={props.data} />
    </div>
  );
};

export default EmployeeDashboard;
