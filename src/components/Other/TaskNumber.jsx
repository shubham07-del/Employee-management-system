import React from 'react'

const TaskNumber = ({data}) => {
  return (
    <div className='flex flex-wrap lg:flex-nowrap whitespace-nowrap mt-10 screen justify-around gap-5'>
        <div className='w-[46%] py-8 px-3 lg:px-9 bg-red-400 rounded-2xl'>
                <h2 className='text-3xl text-center max-sm:rounded-full py-2 max-sm:border-2 font-semibold'>{data.taskCounts.failed}</h2>
                <h3 className='text-xl text-center mt-1 font-medium'>Failed Task</h3>
        </div>
        <div className='w-[46%] py-8 px-3 lg:px-9 bg-yellow-400 rounded-2xl'>
                <h2 className='text-3xl text-center max-sm:rounded-full py-2 max-sm:border-2 font-semibold'>{data.taskCounts.newTask}</h2>
                <h3 className='text-xl text-center mt-1  font-medium'>New Task</h3>
        </div>
        <div className='w-[46%] py-8 px-3 lg:px-9 bg-green-400 rounded-2xl'>
                <h2 className='text-3xl text-center max-sm:rounded-full py-2 max-sm:border-2 font-semibold'>{data.taskCounts.completed}</h2>
                <h3 className='text-xl text-center mt-1  font-medium'>Completed <br /> Task</h3>
        </div>
        <div className='w-[46%] py-8 px-3 lg:px-9 bg-blue-400 rounded-2xl'>
                <h2 className='text-3xl text-center max-sm:rounded-full py-2 max-sm:border-2 font-semibold'>{data.taskCounts.active}</h2>
                <h3 className='text-xl text-center mt-1  font-medium'>Accepted Task</h3>
        </div>
    </div>
  )
}

export default TaskNumber