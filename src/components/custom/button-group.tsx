import React from "react";
import { Switch } from "../ui/switch";
import { useThemeStore } from "@/store/store";

const ButtonGroup = () => {
  const { lineNumber, setLineNumbers, showBackground, setShowBackground } =
    useThemeStore();

  return (
    <div className="flex items-center gap-2 w-full">
      <div className="w-full flex flex-row gap-3">
        <p className="text-xs font-bold">Show line number</p>
        <Switch
          checked={lineNumber}
          className="cursor-pointer"
          onCheckedChange={setLineNumbers}
        />
      </div>
      <div className="w-full flex flex-row gap-3">
        <p className="text-xs font-bold">Show Backgronud</p>
        <Switch
          checked={showBackground}
          className="cursor-pointer"
          onCheckedChange={setShowBackground}
        />
      </div>
    </div>
  );
};

export default ButtonGroup;
