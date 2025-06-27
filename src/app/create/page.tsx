"use client";

import React, { useRef } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import Navbar from "@/components/custom/navbar";
import CustomMenu from "@/components/custom/custom-menu";
import CodeEditor from "@/components/custom/code-editor";
import { Resizable } from "re-resizable";
import { useThemeStore } from "@/store/store";
import { cn } from "@/lib/utils";
import * as htmlToImage from "html-to-image";

const CreatePage: React.FC = () => {
  const { outerBackground, padding, roundness, showBackground, title } =
    useThemeStore();
  const imageRef = useRef<HTMLDivElement>(null);

  const handleDownloadImage = () => {
    if (!imageRef.current) return;

    htmlToImage
      .toPng(imageRef.current)
      .then((dataUrl) => {
        let name = title.split(".")[0];
        if (name.length === 0) {
          name = "screenshot";
        }
        const link = document.createElement("a");
        link.download = `${name}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error("Image generation failed:", err);
      });
  };

  return (
    <div className="flex h-screen w-full items-center justify-center relative">
      {/* Navbar Section */}
      <div className="w-full fixed top-0 z-10 flex items-center justify-center">
        <Navbar />
      </div>

      {/* ScrollArea Section */}
      <div className="w-full h-[calc(100vh-96px)] pt-[10px] pb-[80px] flex items-center justify-center">
        <div className="w-fit h-fit">
          <ScrollArea className="w-full max-h-screen py-24 h-full">
            <div ref={imageRef}>
              <Resizable
                enable={{ left: true, right: true }}
                minWidth={padding * 2 + 400}
                defaultSize={{
                  width: "800",
                  height: "100%",
                }}
              >
                <div
                  className={cn(
                    "transition-all ease-out w-full h-full overflow-auto scrollbar-hide"
                  )}
                  style={{
                    background: showBackground
                      ? outerBackground.value
                      : "transparent",
                    padding: `${padding}px`,
                    borderRadius: `${roundness}px`,
                  }}
                >
                  <CodeEditor />
                </div>
              </Resizable>
            </div>
          </ScrollArea>
        </div>
      </div>

      {/* CustomMenu Section */}
      <div className="w-full bottom-0 fixed flex items-center justify-center">
        <CustomMenu onDownloadImage={handleDownloadImage} />
      </div>
    </div>
  );
};

export default CreatePage;
