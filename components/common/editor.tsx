"use client"


import React, { useState } from 'react'
import Editor from '@monaco-editor/react';
import {
ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Image from 'next/image';


const EditorComp = ({editors} :  any) => {
  const [rotate, setRotate] = useState(false)
const editorClass = "bg-[#1e1e1e] border border-gray-700 rounded-md  shadow-sm py-4  min-w-[440px]";
// const textAreClass ="bg-transparent text-white resize-none min-h-[210px] w-full text-[14px] outline-none border-none p-4  font-mono";


const minSize = '5%'


  return (
     <ResizablePanelGroup
      orientation='horizontal'
     className="grid lg:grid-cols-3 grid-colos-1   lg:px-4  px-2  
      w-full   overflow-auto sidebar  mb-4">
          {editors?.map(([title, value, setter, logo]: any) => (
            <ResizablePanel 
            maxSize={'100%'}
            minSize={minSize}
            key={title}>
            <div className={editorClass}>
              <div className="w-full font-mono text-white
               border-b border-gray-800 px-4 text-md pb-2   flex items-center">
                <Image
                src={logo}
                width={40}
                height={40}
                alt='logo'
                className={minSize ? 'hidden' : 'block'}
                />
                 <span  className=''>{title}</span> 
              </div>
              {/* <textarea
                className={textAreClass}
                value={value}
                onChange={(e) => setter(e.target.value)}
                rows={4}
              ></textarea> */}
                <Editor
                height="210px"
                loading={false}
                defaultLanguage="javascript"
                defaultValue={value}
                value={value}
                theme="vs-dark"
                onChange={(value) => setter(value)}
              />
            </div>
       
            </ResizablePanel>
          ))}
        </ResizablePanelGroup>


  )
}

export default React.memo(EditorComp) 
