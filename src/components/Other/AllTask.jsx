import React, { useContext } from 'react'
import { AuthData } from '../../context/AuthProvider';

const AllTask = () => {
    const [userData,setUserData] = useContext(AuthData)

  return (
    <div className='bg-[#202020] p-3 sm:p-5 mt-5 rounded-xl '>
        <div className='overflow-x-auto w-full'>
            <div className='min-w-[650px]'>
                <div className='flex items-center justify-between mb-2 bg-emerald-600 px-4 sm:px-6 py-2 rounded'>
                    <h2 className='text-lg sm:text-xl w-1/5 text-center text-white '>Employee name</h2>
                    <h3 className='text-sm sm:text-base w-1/5 text-center text-white'>New task</h3>
                    <h3 className='text-sm sm:text-base w-1/5 text-center text-white'>Active task</h3>
                    <h2 className='text-sm sm:text-base w-1/5 text-center rounded-md text-white font-semibold'>Completed</h2>
                    <h2 className='text-sm sm:text-base w-1/5 text-center rounded-md text-white font-semibold'>Failed</h2>
                </div>
                <div>
                    {userData.map(function(elem,idx){
                    return <div key={idx} className='flex items-center justify-between border-2 border-orange-500 mb-2 px-4 sm:px-6 py-2 rounded'>
                    <h2 className='text-lg sm:text-xl text-gray-300 text-center w-1/5'>{elem.name}</h2>
                    <h3 className='text-base sm:text-lg w-1/5 text-blue-500 text-center'>{elem.taskCounts.newTask}</h3>
                    <h3 className='text-base sm:text-lg w-1/5 text-blue-500 text-center'>{elem.taskCounts.active}</h3>
                    <h2 className='text-base sm:text-lg px-2 py-1 w-1/5 text-center text-green-500 font-semibold'>{elem.taskCounts.completed}</h2>
                    <h2 className='text-base sm:text-lg px-2 py-1 w-1/5 text-center text-red-500 font-semibold'>{elem.taskCounts.failed}</h2>
                </div>
                })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default AllTask