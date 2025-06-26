"use client";

import React from "react";
import CodeEditor from "@/components/custom/code-editor";
import CustomMenu from "@/components/custom/custom-menu";
import Navbar from "@/components/custom/navbar";
import { useThemeStore } from "@/store/store";
import { cn } from "@/lib/utils";

const NAVBAR_HEIGHT = 56;
const FOOTER_HEIGHT = 100;

const CreatePage: React.FC = () => {
  const { outerBackground, padding, roundness, showBackground } =
    useThemeStore();

  return (
    <div className="w-full h-screen flex flex-col overflow-hidden bg-background">
      <div className="fixed top-0 w-full z-20 h-14 bg-transparent">
        <div className="w-full max-w-4xl mx-auto h-full flex items-center">
          <Navbar />
        </div>
      </div>

      <div
        className="flex-1 overflow-y-auto px-4 scrollbar-hide"
        style={{
          marginTop: `${NAVBAR_HEIGHT}px`,
          marginBottom: `${FOOTER_HEIGHT}px`,
        }}
      >
        <div className="min-h-full flex items-center justify-center py-10">
          <div
            className={cn("transition-all ease-out")}
            style={{
              background: showBackground ? outerBackground : "transparent",
              padding: `${padding}px`,
              borderRadius: `${roundness}px`,
            }}
          >
            <CodeEditor />
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 h-auto w-full z-20 border-border">
        <div className="h-full flex items-center justify-center">
          <CustomMenu />
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
