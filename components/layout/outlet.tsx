"use client";
import React, { useEffect, useState } from "react";
import Header from "../common/header";
import EditorComp from "../common/editor";
import PreviewConsole from "../common/previewConsole";
import {
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import HTML  from '@/public/html-lates-removebg-preview.png'
import CSS  from '@/public/css2.png'
import JavaScript  from '@/public/js-new.png'
import { saveProject } from "@/app/actions/save.project";

const Outlet = ({ initialData, isIdMatch} : { initialData : any , isIdMatch : boolean}) => {
  const [saveLoading,setSaveLoading ] = useState(false)
  const [html, setHtml] = useState(initialData?.html || "");
  const [css, setCss] = useState(initialData.css || "");
  const [js, setJs] = useState(initialData.js || "");
  const [srcDoc, setSrcDoc] = useState<any>([]);
  const [consoleOutput, setConsoleOutput] = useState("");

  const RunCode = () => {
    setConsoleOutput("");
    const code = `
        <html lang="en">
            <head>
            <style>
            ${css}
            </style>
          <body>
              ${html}
          </body>
          <script>
          const oldLog = console.log;
          console.log = function(...args){

           oldLog.apply(console,args)
          window.parent.postMessage({
          type : "console",
          message : args.join(" ")
          }, "*")
          }
          try{
            ${js}
          }catch(error){
          window.parent.postMessage({
          type : "console",
          message : error.toString()
          }, "*")
          }
          </script>
          </html>`;
    setSrcDoc(code);
  };

  const editors = [
    ["HTML", html, setHtml, HTML, "html", 25],
    ["CSS", css, setCss,  CSS,    "css" , 35 ],
    ["JavaScript", js, setJs,JavaScript , "javascript", 25  ],
  ];



  const handleSaveProject =  async () => {
    try{
      setSaveLoading(true)
      const res =  await saveProject({
         projectId :initialData.id ,
          html : html,
          css : css,
          js : js
      })
      if(!res?.success){
        console.log("save failed ")
        return
      }
      setSaveLoading(false)
    }catch(error:unknown){
      if(error instanceof Error){
        console.log("failed save project", error.message)
      }
    }
  }

  useEffect(() => {
    const handleMessage = (event:any) => {
      if(event.data?.type === 'console'){
        setConsoleOutput((prev:any) => (prev + "\n" + event.data?.message) )
      }
    }
    window.addEventListener("message", handleMessage)
    return () => window.removeEventListener("message", handleMessage)
},[])

  useEffect(() => {
    const timer = setTimeout(() => {
      RunCode();
    }, 500);

    return () =>  clearInterval(timer)
  }, [html, css, js]);





  return (
    <section className="w-full min-h-screen bg-black  overflow-scroll scrollbar ">
      <Header   
      heading={initialData.title}
      saveLoading={saveLoading}
      handleSaveProject={handleSaveProject}
      isIdMatch={isIdMatch}
      />
      <ResizablePanelGroup
      orientation="vertical"
      className="lg:min-h-[580px]  min-h-[1000px]  w-full   ">
        <ResizablePanel
        defaultSize="50%">
          <div>
        <EditorComp editors={editors} />
          </div>
        </ResizablePanel>

          <ResizablePanel
        defaultSize="50%">
        <PreviewConsole 
        srcDoc={srcDoc}
        consoleOutput={consoleOutput}
        />
        </ResizablePanel>
        </ResizablePanelGroup>
    </section>
  );
};

export default React.memo(Outlet);
