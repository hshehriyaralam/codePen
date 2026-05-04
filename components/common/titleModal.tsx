import React from 'react'
import { Spinner } from '../ui/spinner'
import type { HeaderProps } from '@/types/project'


const TitleModal = ({
    handleCreateProject,
    title,
    setTitle,
    loading,
    setShowModal,
}:HeaderProps) => {
  return (
            <div
         onClick={(e)  => e.stopPropagation()}
        className="fixed inset-0  bg-[#0f1117]/20 backdrop-blur-sm flex items-center justify-center z-50">
          <div 
     
          className="w-[400px] h-[200px]   shadow-xl bg-[#1e1e1e]/50  rounded-xl  p-6
          flex flex-col gap-4 items-center
          ">
            <h2 className="text-[22px]  font-quicksand font-bold  text-teal-400     font-mono">
               Project Title
            </h2>

            <form
            onSubmit={handleCreateProject}
            >
            <input
              placeholder="Enter Project Title"
              className="rounded-xl   bg-[#0f111e]  text-white text-sm outline-none   px-6 py-3  font-mono  focus:border   focus:border-teal-500 "
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <div  className="flex items-center justify-center gap-4 my-3">
              <button
               type="submit"
                className="w-26 h-9 py-1.5 px-3.5 py-1  text-md rounded-xl text-white 
                cursor-pointer bg-teal-500  font-bold  hover:bg-teal-600   font-mono
                flex items-center justify-center
                "
              >
              {loading ? <Spinner className="w-5 h-5" /> : "Create"}

              </button>
              <button
               type="button"
              onClick={() => setShowModal(false)}
                className="w-26 h-9 px-3.5 py-1 flex items-center justify-center  text-md rounded-xl text-white 
                cursor-pointer bg-teal-500  hover:bg-teal-600  font-bold  font-mono  "
              >
                Cancel
              </button>
              </div>
            </form>

            </div>
          </div>
  )
}

export default TitleModal
