import React from 'react'

const Editor = ({editors} :  any) => {
       const editorClass =
            " bg-[#1e1e1e] border border-gray-700 rounded-xl  shadow-sm py-4 ";
        
          const textAreClass =
            "bg-transparent text-white resize-none  h-[280px] w-full text-[14px] outline-none border-none p-4  font-mono    ";
  return (
     <div className="grid lg:grid-cols-3 grid-colos-1 gap-4  lg:px-4  px-2   w-full  ">
          {editors?.map(([title, value, setter]: any) => (
            <div className={editorClass} key={title}>
              <div className="w-full font-mono text-white border-b border-gray-800 px-4  text-md pb-4">
                {title}
              </div>
              <textarea
                className={textAreClass}
                value={value}
                onChange={(e) => setter(e.target.value)}
                rows={4}
              ></textarea>
            </div>
          ))}
        </div>
  )
}

export default React.memo(Editor) 
