import React from 'react'

const Header = ({RunCode} : any) => {
  return (
        <div className="flex  flex-col gap-4 
         lg:gap-0  lg:flex-row  lg:items-center lg:justify-between  p-2  ">
        <div className='mx-3'>
          <h1 className="text-4xl  font-quicksand font-bold  text-teal-600     font-mono ">
            CodeJS
          </h1>
          <p className="text-white font-mono  text-sm">
            {" "}
            Live Preview for HTML, CSS and JavaScript
          </p>
        </div>

        <button
          onClick={RunCode}
          className="py-1.5 px-3.5 py-1  text-md rounded-xl text-white 
       cursor-pointer bg-teal-500  font-bold  font-mono  "
        >
          Run code
 </button>
      </div>
  )
}

export default  React.memo(Header) 
