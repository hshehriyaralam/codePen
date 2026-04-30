import React from 'react'
import Editor from '@monaco-editor/react';
import {
ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";


const EditorComp = ({editors} :  any) => {
const editorClass = "bg-[#1e1e1e] border border-gray-700 rounded-md  shadow-sm py-4  min-w-[440px]";
const textAreClass ="bg-transparent text-white resize-none min-h-[210px] w-full text-[14px] outline-none border-none p-4  font-mono";


// const handleEditorChange = (value:any, event:any) => {
// console.log("values", value)
// }


  return (
     <ResizablePanelGroup
      orientation='horizontal'
     className="grid lg:grid-cols-3 grid-colos-1   lg:px-4  px-2  
      w-full   overflow-auto sidebar  mb-4">
          {editors?.map(([title, value, setter]: any) => (
            <ResizablePanel  key={title}>
            <div className={editorClass}>
              <div className="w-full font-mono text-white
               border-b border-gray-800 px-4  text-md pb-2">
                {title}
              </div>
              <textarea
                className={textAreClass}
                value={value}
                onChange={(e) => setter(e.target.value)}
                rows={4}
              ></textarea>
                {/* <Editor
                height="210px"
                loading={false}
                defaultLanguage="javascript"
                defaultValue={value.js}
                value={value.js}
                theme="vs-dark"
                onChange={handleEditorChange}
              /> */}
              
            </div>
       
            </ResizablePanel>
          ))}
        </ResizablePanelGroup>


  )
}

export default React.memo(EditorComp) 
