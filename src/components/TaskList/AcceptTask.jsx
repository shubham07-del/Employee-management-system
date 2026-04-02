import React, { useContext } from "react";
import { AuthData } from "../../context/AuthProvider";

const AcceptTask = ({ data, employeeName }) => {
  const [userData, setUserData] = useContext(AuthData);

  const updateTaskState = (isCompleted) => {
    const newData = userData.map((elem) => {
      if (elem.name === employeeName) {
        return {
          ...elem,
          taskCounts: {
            ...elem.taskCounts,
            active: elem.taskCounts.active - 1,
            completed: isCompleted ? elem.taskCounts.completed + 1 : elem.taskCounts.completed,
            failed: isCompleted ? elem.taskCounts.failed : elem.taskCounts.failed + 1,
          },
          tasks: elem.tasks.map((t) => {
            if (t.title === data.title) {
              return { ...t, active: false, completed: isCompleted, failed: !isCompleted };
            }
            return t;
          }),
        };
      }
      return elem;
    });
    setUserData(newData);
    localStorage.setItem("employee", JSON.stringify(newData));
  };

  return (
    <div className="h-full w-[350px] shrink-0 bg-blue-500 rounded-xl p-10">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-400 border-2 px-3 py-1 rounded text-xl">{data.category}</h3>
        <h4 className="text-xl font-semibold">{data.date}</h4>
      </div>
      <h1 className="mt-5 text-2xl font-semibold">{data.title} </h1>
      <p className="mt-3 text-lg">{data.description}</p>
      <div className="flex justify-between mt-4">
        <button onClick={() => updateTaskState(true)} className="bg-green-600 text-white border-2 font-medium active:scale-95 cursor-pointer px-3 py-1 rounded text-sm">Mark as completed</button>
        <button onClick={() => updateTaskState(false)} className="bg-red-600 text-white border-2 font-medium active:scale-95 cursor-pointer px-3 py-1 rounded text-sm">Mark as Failed</button>
      </div>
    </div>
  );
};

export default AcceptTask;
