"use client"


import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Editor from '@monaco-editor/react';
import {
ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Image from 'next/image';


const EditorComp = ({editors} :  any) => {
    const [layout, setLayout] = useState<any[]>([]);
    const minSize = 50
    const editorClass = "bg-[#1e1e1e] border border-gray-700 rounded-md  shadow-sm py-4  min-w-[440px]";
    const [isMobile, setIsMobile] = useState(false)


    useEffect(() => {
      const handleResize = () => {
        if(window.innerWidth <  768){
          setIsMobile(true)
        }
      };
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    },[])

    
  
  return (
     <ResizablePanelGroup
      orientation='horizontal'
      onLayoutChange={(size:any) => setLayout(size)}
     className="grid lg:grid-cols-3 grid-colos-1   lg:px-4  px-2  
      w-full   overflow-auto sidebar  mb-4">
          {editors?.map(([title, value, setter, logo, language, imageSize]: any , index: number) => {
            const arrOflayout = Object.values(layout)
            const isMin =  arrOflayout[index] >= 10
            return(
            <ResizablePanel   
            maxSize={'100%'}
            minSize={minSize}
            key={title}>
            <div className={editorClass}>
              <div className={`w-full font-mono text-white
              border-b border-gray-800  px-4 text-md pb-2   flex items-center
                transition duration-700`}>
                {isMin && (
                  <Image
                  priority
                src={logo}  
                width={imageSize}
                // height={40}
                alt='logo'
                className={`mx-2 ${isMin ? 'opacity-100 visible' : 'opacity-0 invisible'}   `}
                />
                )} 
                 <span  className={` ${!isMin && 'transform: translate(50px, 100px)'} `} >{title}</span> 
              </div>
                <Editor
                height="210px"
                loading={false}
                defaultLanguage={language}
                defaultValue={value}
                value={value} 
                theme="vs-dark"
                onChange={(value) => setter(value)}
                className={`${!isMin && 'hidden'}`}
              />
            </div>
       
            </ResizablePanel>
          )})}
        </ResizablePanelGroup>


  )
}

export default React.memo(EditorComp) 
