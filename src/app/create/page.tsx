"use client";

import React from "react";
import CodeEditor from "@/components/custom/code-editor";
import CustomMenu from "@/components/custom/custom-menu";
import Navbar from "@/components/custom/navbar";
import { useThemeStore } from "@/store/store";
import { Resizable } from "re-resizable";
import { cn } from "@/lib/utils";

const NAVBAR_HEIGHT = 56;
const FOOTER_HEIGHT = 80;

const CreatePage: React.FC = () => {
  const { outerBackground, padding, roundness, showBackground } =
    useThemeStore();

  return (
    <div className="w-full h-screen flex flex-col bg-background">
      <div className="fixed top-0 w-full z-30 h-14 bg-background">
        <div className="w-full max-w-4xl mx-auto h-full flex items-center">
          <Navbar />
        </div>
      </div>

      <div style={{ height: `${NAVBAR_HEIGHT}px` }} />

      <div className="flex-1 overflow-y-auto px-4 scrollbar-hide">
        <div className="w-full max-w-4xl mx-auto min-h-[calc(100vh_-_${NAVBAR_HEIGHT + FOOTER_HEIGHT}px)] flex items-center justify-center py-10">
          <Resizable
            enable={{ left: true, right: true }}
            minWidth={padding * 2 + 400}
            defaultSize={{ width: "100%", height: "100%" }}
          >
            <div
              className={cn(
                "transition-all ease-out w-full h-full overflow-auto scrollbar-hide"
              )}
              style={{
                background: showBackground ? outerBackground : "transparent",
                padding: `${padding}px`,
                borderRadius: `${roundness}px`,
              }}
            >
              <CodeEditor />
            </div>
          </Resizable>
        </div>
      </div>

      <div style={{ height: `${FOOTER_HEIGHT}px` }} />

      <div className="fixed bottom-0 w-full z-30 bg-background">
        <div className="h-full flex items-center justify-center">
          <CustomMenu />
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
