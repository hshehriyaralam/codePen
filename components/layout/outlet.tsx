"use client";
import React, { useEffect, useState } from "react";

import Header from "../common/header";
import Editor from "../common/editor";
import PreviewConsole from "../common/previewConsole";

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
          window.parent.postMessage({
          type : console,
          message : args.join(" ")
          })
          }
          try{
            ${js}
          }catch(error){
          window.parent.postMessage({
          type : console,
          message : error.toString()
          })
          }
          </script>
          </html>`;
    setSrcDoc(code);
  };

  const editors = [
    ["HTML", html, setHtml],
    ["CSS", css, setCss],
    ["JavaScript", js, setJs],
  ];

  

  useEffect(() => {
    setTimeout(() => {
      RunCode();
    }, 500);
  }, [html, css, js]);
  return (
    <section className="w-full min-h-screen bg-[#1e1e1e]  overflow-hidden ">
      <Header />
      <div className="grid grid-cols-1  gap-2  w-full ">
        <Editor editors={editors} />
        <PreviewConsole 
        srcDoc={srcDoc}
        consoleOutput={consoleOutput}
        />
      </div>
    </section>
  );
};

export default React.memo(Outlet);
