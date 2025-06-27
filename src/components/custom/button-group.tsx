import React from "react";
import { Switch } from "../ui/switch";
import { useThemeStore } from "@/store/store";

const ButtonGroup = () => {
  const {
    lineNumber,
    setLineNumbers,
    showBackground,
    setShowBackground,
    dots,
    setDots,
  } = useThemeStore();

  return (
    <div className="flex items-center gap-2 w-full">
      <div className="w-full flex flex-row gap-2">
        <p className="text-xs font-bold">Line number</p>
        <Switch
          checked={lineNumber}
          className="cursor-pointer"
          onCheckedChange={setLineNumbers}
        />
      </div>
      <div className="w-full flex flex-row gap-2">
        <p className="text-xs font-bold">Backgronud</p>
        <Switch
          checked={showBackground}
          className="cursor-pointer"
          onCheckedChange={setShowBackground}
        />
      </div>
      <div className="w-full flex flex-row gap-2">
        <p className="text-xs font-bold">RYG Dots</p>
        <Switch
          checked={dots}
          className="cursor-pointer"
          onCheckedChange={setDots}
        />
      </div>
    </div>
  );
};

export default ButtonGroup;
