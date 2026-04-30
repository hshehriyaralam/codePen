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
import CSS  from '@/public/CSS-logo-removebg-preview.png'
import JavaScript  from '@/public/js-new-removebg-preview.png'

const Outlet = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
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
    ["HTML", html, setHtml, HTML],
    ["CSS", css, setCss,  CSS,   ],
    ["JavaScript", js, setJs,JavaScript ],
  ];

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
    <section className="w-full min-h-screen bg-[#0f1117]  overflow-scroll scrollbar ">
      <Header />
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
