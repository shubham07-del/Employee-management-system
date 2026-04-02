import React from "react";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import NewTask from "./NewTask";
import Failedtask from "./Failedtask";

const TaskList = ({data}) => {
  
  return (
    <div
      id="taskList"
      className="h-[60%] overflow-x-auto w-full items-center justify-start mt-10 py-5 rounded-xl flex flex-nowrap gap-4"
    >

      {data.tasks.map((elem,idx)=>{
       if(elem.newTask){
        return <NewTask key={idx} data={elem} employeeName={data.name} />
       }
       if(elem.completed){
        return <CompleteTask key={idx} data={elem} />
       }
       if(elem.failed){
        return <Failedtask key={idx} data={elem} />
       }
       if(elem.active){
        return <AcceptTask key={idx} data={elem} employeeName={data.name} />
       }
      })
      }
      
      
      
     
    </div>
  );
};

export default TaskList;
