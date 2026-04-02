import React, { useContext, useState } from 'react'
import { AuthData } from '../../context/AuthProvider'

const CreateTask = () => {

const [userData,setUserData] = useContext(AuthData)

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [TaskAsignTo, setAsignTo] = useState("")
  const [date, setTaskDate] = useState("")
  const [category, setCategory] = useState("")


  const [newTask, setNewTask] = useState({})

  const submithandler = (e)=>{
    e.preventDefault()


    const taskObj = {title,description,date,category,active:false,newTask:true,completed:false,failed:false}
    setNewTask(taskObj)


//Add and Update the tasks 
    const newData = userData.map(elem => {
      if (TaskAsignTo.trim().toLowerCase() === elem.name.toLowerCase()) {
        return {
          ...elem,
          tasks: [...elem.tasks, taskObj],
          taskCounts: {
            ...elem.taskCounts,
            newTask: elem.taskCounts.newTask + 1
          }
        };
      }
      return elem;
    });


// updating the localStorage
    setUserData(newData);
    localStorage.setItem("employee", JSON.stringify(newData));

    setAsignTo("")
    setTitle("")
    setTaskDate("")
    setDescription("")
    setCategory("")
  }


  return (
    <div>
        <form
        onSubmit={submithandler}
        className=" mt-5 text-white">

       <div className=" bg-[#202020] flex flex-col lg:flex-row justify-between rounded mt-4">
    
          <div className="w-full lg:w-1/2 flex flex-col items-start justify-center p-3 sm:p-5">
            <div className="w-full mt-4">
              <h3>Task Title</h3>
              <input
              required
              value={title}
              onChange={(e)=>{
                setTitle(e.target.value)
              }}
              className="border border-gray-400 outline-none px-4 sm:px-6 py-2 text-base sm:text-xl font-semibold rounded-lg w-full lg:w-[80%] bg-transparent mb-2" type="text" placeholder="Enter Task" />
            </div>
            <div className="w-full mt-4">
              <h3>Date</h3>
              <input
              required
              onChange={(e)=>{
                setTaskDate(e.target.value)
              }}
              value={date}
              className="border border-gray-400 outline-none px-4 sm:px-6 py-2 text-base sm:text-xl font-semibold rounded-lg w-full lg:w-[80%] bg-transparent mb-2" type="date" />
            </div>
            <div className="w-full mt-4">
              <h3>Assign to</h3>
              <input
              required
              value={TaskAsignTo}
              onChange={(e)=>{
                setAsignTo(e.target.value)
              }}
              className="border border-gray-400 outline-none px-4 sm:px-6 py-2 text-base sm:text-xl font-semibold rounded-lg w-full lg:w-[80%] bg-transparent mb-2" type="text" placeholder="Employee name" />
            </div>
            <div className="w-full mt-4">
              <h3>Category</h3>
              <input
              required
              value={category}
              onChange={(e)=>{
                setCategory(e.target.value)
              }}
              className="border border-gray-400 outline-none px-4 sm:px-6 py-2 text-base sm:text-xl font-semibold rounded-lg w-full lg:w-[80%] bg-transparent mb-2" type="text" placeholder="Design, dev etc.." />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col items-center justify-start sm:justify-center p-3 sm:p-5">
            <div className="w-full lg:w-[90%] xl:w-[80%] flex flex-col">
              <h3 className="text-left text-lg font-semibold">Description</h3>
              <textarea
              required
              value={description}
              onChange={(e)=>{
                setDescription(e.target.value)
              }}
              className="w-full bg-transparent border border-gray-400 mt-2 p-3 sm:p-4 rounded-md outline-none text-sm sm:text-base" name="" id="" placeholder="Enter description" rows={8}></textarea>
              <button
              className="w-full mt-4 sm:mt-5 px-6 py-3 bg-emerald-500 text-black font-semibold text-lg sm:text-xl rounded-xl hover:bg-emerald-700 transition-colors">Create task</button>
            </div>
          </div>

</div>

        </form>
      </div>
  )
}

export default CreateTask