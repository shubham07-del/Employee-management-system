import React from 'react'

const Failedtask = ({data}) => {
  return (
    <div className="lg:h-full w-[350px] sm:shrink-0 bg-red-500 rounded-xl p-10">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-400 px-3 py-1 rounded text-xl">{data.category}</h3>
          <h4 className="text-xl font-semibold">{data.date}</h4>
        </div>
        <h1 className="mt-5 text-2xl font-semibold">{data.title} </h1>
        <p className="mt-3 text-lg">{data.description}</p>
        <div className='mt-5'>
            <button className='bg-red-500 w-full text-black border-2 font-medium active:scale-95 cursor-pointer px-3 py-1 rounded text-sm"'>Failed</button>
        </div>
      </div>
  )
}

export default Failedtask