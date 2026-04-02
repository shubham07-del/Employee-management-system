import React, { useContext } from 'react'
import { AuthData } from '../../context/AuthProvider'

const NewTask = ({data, employeeName}) => {
  const [userData, setUserData] = useContext(AuthData)

  const handleAccept = () => {
    const newData = userData.map(elem => {
      if (elem.name === employeeName) {
        return {
          ...elem,
          taskCounts: {
            ...elem.taskCounts,
            active: elem.taskCounts.active + 1,
            newTask: elem.taskCounts.newTask - 1
          },
          tasks: elem.tasks.map(t => {
            if (t.title === data.title) {
              return { ...t, active: true, newTask: false }
            }
            return t;
          })
        }
      }
      return elem;
    })
    setUserData(newData);
    localStorage.setItem('employee', JSON.stringify(newData));
  }

  return (
    <div className="h-full w-[350px] shrink-0 bg-yellow-500 rounded-xl p-10">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-400 border-2 px-3 py-1 rounded text-xl">{data.category}</h3>
          <h4 className="text-xl font-semibold">{data.date}</h4>
        </div>
        <h1 className="mt-5 text-2xl font-semibold">{data.title} </h1>
        <p className="mt-3 text-lg">{data.description}</p>
        <button onClick={handleAccept} className='bg-cyan-500 mt-5 border-2 text-white font-medium active:scale-95 cursor-pointer px-3 py-1 rounded text-sm'>Accept task</button>
      </div>
  )
}

export default NewTask