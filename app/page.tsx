"use client";
import { useEffect, useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function Home() {
  const [html, setHtml] = useState("");
  const [css, sectCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState<any>([]);
  const [consoleOutput, setConsoleOutput] = useState("");

  const RunCode = () => {
    const code = `<html lang="en">
        <head>
        <style>
        ${css}
        </style>
      <body>
          ${html}
      </body>
      <script type="text/javascript">
      ${js}
      </script>
      </html>`;
    setSrcDoc(code);
  };

  console.log(consoleOutput);
  useEffect(() => {
    setTimeout(() => {
      RunCode();
    }, 500);
  }, [html, css, js]);

  return (
    <div className="w-full min-h-screen bg-white ">
      <div className="flex items-center justify-between mx-10  my-2">
        <h1 className="text-4xl  font-quicksand font-bold  text-teal-600 text-center  mb-4">
          CodeJS
        </h1>
        <button
          onClick={RunCode}
          className="py-2  px-3 py-1  text-md rounded-xl text-gray-100
       cursor-pointer bg-teal-500  font-bold "
        >
          Code Run
        </button>
      </div>

      {/* Editor */}

      <ResizablePanelGroup
        orientation="horizontal"
        className="p-2  flex items-center    w-full   "
      >
        {/* for html */}
        <ResizablePanel
          defaultSize="32%"
          className="border  border-gray-200 rounded-xl   w-120 min-h-90 scroll-none"
        >
          <h2 className="text-[28px]  font-bold  m-3  text-center text-mauve-600">
            HTML
          </h2>

          <textarea
            className="text-gray-700  w-[90%]  mx-4  h-70
            outline-none  border-none     text-[15px]  resize-none"
            value={html}
            onChange={(e) => setHtml(e.target.value)}
            rows={4}
          ></textarea>
        </ResizablePanel>
        <ResizableHandle withHandle />

        {/* for CSS */}
        <ResizablePanel
          defaultSize="33%"
          className="border  border-gray-200 rounded-xl   w-120 min-h-90     "
        >
          <h2 className="text-[28px]  font-bold  m-3  text-center  text-mauve-600">
            CSS
          </h2>

          <textarea
            className="text-gray-700  w-[90%]  mx-4 h-70
            outline-none  border-none      text-[15px]  resize-none"
            value={css}
            onChange={(e) => sectCss(e.target.value)}
            rows={4}
          ></textarea>
        </ResizablePanel>

        <ResizableHandle withHandle />

        {/* for JS */}
        <ResizablePanel
          defaultSize="33%"
          className="border  border-gray-200 rounded-xl   w-120 min-h-90    "
        >
          <h2 className="text-[28px]  font-bold  m-3  text-center text-mauve-600">
            JavaScript
          </h2>

          <textarea
            className="text-gray-700  w-[90%]  mx-4  h-70
            outline-none  border-none    text-[15px]  resize-none"
            value={js}
            onChange={(e) => setJs(e.target.value)}
            rows={4}
          ></textarea>
        </ResizablePanel>
      </ResizablePanelGroup>

      {/* Previews  */}
      <ResizablePanelGroup
        orientation="vertical"
        className="min-h-[500px] max-w-sm rounded-lg border  max-w-full"
      >
        <ResizablePanel
          defaultSize="75%"
          className=" rounded-xl  w-full h-100 my-4 "
        >
          <p className="text-[28px]  font-bold  m-3  text-mauve-600  mx-4">
            Preview{" "}
          </p>
          {/* For render HTML and CSS */}
          <iframe
            width="100%"
            height="300px"
            frameBorder={0}
            sandbox="allow-scripts"
            srcDoc={srcDoc}
            className="font-semibold"
          >
            {/* {srcDoc} */}
          </iframe>
        </ResizablePanel>

        <ResizableHandle withHandle />

        {/* Console */}
        <ResizablePanel
          defaultSize="25%"
          className="rounded-xl  w-full h-80 my-4 "
        >
          <p className="text-[28px]  font-bold  m-3  text-mauve-600  mx-4">
            Console
          </p>
          {/* For render Javascript */}
          <p className="text-gray-300"></p>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
