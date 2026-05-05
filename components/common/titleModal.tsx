"use client"
import { Spinner } from '../ui/spinner'
import type { HeaderProps } from '@/types/project'
import { Button } from '../ui/button'
import Switch from './toogle'
import React from 'react'


const TitleModal = ({
    handleCreateProject,
    title,
    setTitle,
    loading,
    setShowModal,
    setIsPublic,
    isPublic
}:HeaderProps) => {



  const handleCheckBox = () => {
    setIsPublic((prev:any) => !prev)
  }

  return (
            <div
         onClick={(e)  => e.stopPropagation()}
        className="fixed inset-0  bg-[#0f1117]/60 backdrop-blur-md flex items-center justify-center z-50">
          <div 
     
          className="w-[400px] h-[200px]   shadow-xl bg-[#1e1e1e]/50  rounded-xl  p-6
          flex flex-col gap-4 items-center
          ">
            <h2 className="text-[22px]  font-quicksand font-bold  text-white     font-mono">
               Project Title
            </h2>

            <form
            onSubmit={handleCreateProject}
            >
              <div  className='flex items-center gap-2  justify-center '>
            <input
              required
              placeholder="Enter Project Title"
              className="rounded-xl   bg-[#0f111e]  text-white text-sm outline-none   px-6 py-3  font-mono  focus:border   focus:border-teal-500 "
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              />
              <div  className='flex flex-col  items-center  justify-center '>
               <span  className='text-white  text-xs font-mono'> Public  </span> 
              <Switch   
              checkbox={isPublic}
              handleCheckBox={handleCheckBox}
              />
              </div>
              </div>


            

            <div  className="flex items-center justify-center gap-4 my-5">
                   <Button
               type="button"
              onClick={() => {
                setShowModal(false)
                setTitle("")
              }}
                className="w-30 h-9 px-3.5 py-1 flex items-center justify-center  text-md rounded text-white 
                   cursor-pointer border border-gray-700   bg-[#0f2023] font-bold     font-mono   "
              >
                Cancel
              </Button>

              <Button
               type="submit"
                className="w-30 h-9 py-1.5 px-3.5 py-1  text-md rounded text-white 
               cursor-pointer border border-gray-700   bg-[#0f2023] font-bold     font-mono 
                flex items-center justify-center"
              >
              {loading ? <Spinner className="w-5 h-5" /> : "Create"}

              </Button>
         
              </div>
            </form>

            </div>
          </div>
  )
}

export default   React.memo(TitleModal)
