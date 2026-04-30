import React from 'react'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

const PreviewConsole = ({srcDoc, consoleOutput}:any) => {
  return (
    <ResizablePanelGroup
          orientation="vertical"
          className="min-h-[400px] max-w-sm rounded-lg border  max-w-full   overflow-hidden"
        >
          {/* Preview div */}
          <ResizablePanel
            defaultSize="60%"
            className="w-full h-[280px] bg-gray-100 overflow-hidden"
          >
            <div
              className="w-full font-mono text-rose-500  font-semibold  border-b
             border-gray-300 px-4  text-md pb-4 mt-4"
            >
              Preview
            </div>

            <iframe
              width="100%"
              height="180px"
              frameBorder={0}
              sandbox="allow-scripts"
              srcDoc={srcDoc}
              className="font-semibold  text-md font-mono p-1 px-2"
            />
          </ResizablePanel>

          <ResizableHandle withHandle />

          {/* Console Div */}
          <ResizablePanel
            defaultSize="40%"
            className="w-full h-[350px] bg-black "
          >
            <div
              className="w-full font-mono text-green-500  font-semibold  border-b
             border-gray-700 px-4  text-md py-4 "
            >
              Console
            </div>
            <pre className="font-medium   text-sm font-mono p-4 px-4 text-green-500 ">
              {consoleOutput || "> Ready"}
            </pre>
          </ResizablePanel>
        </ResizablePanelGroup>
  )
}

export default   React.memo(PreviewConsole)
