"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CodeMirrorThemeBackGroundGroup } from "@/lib/themes";
import { useThemeStore } from "@/store/store";
import { languages } from "@/lib/languages";
import { Backgrounds } from "@/lib/backgrounds";
import { PaddingSlider } from "./slider";
import { RoundnessSlider } from "./roundness-slider";
import ButtonGroup from "./button-group";
import { Button } from "../ui/button";

const CustomMenu = ({ onDownloadImage }: { onDownloadImage: any }) => {
  const {
    language,
    setLanguage,
    backgroundTheme,
    setBackgroundTheme,
    outerBackground,
    setOuterBackground,
    setDots,
    setLineNumbers,
  } = useThemeStore();

  const handleClick = () => {
    const bg = Backgrounds.find((bg) => bg.name === "Peach Sunset");

    if (bg) {
      setLanguage("javascript");
      setBackgroundTheme("vscodeDark");
      setOuterBackground(bg);
      setDots(true);
      setLineNumbers(true);
    } else {
      console.warn("Background not found");
    }
  };

  return (
    <div className="w-full max-w-3xl rounded-t-md border backdrop-blur-lg p-4 grid grid-cols-5 gap-4 shadow-md select-none">
      {/* Editor Theme */}
      <div className="flex flex-col gap-2 items-start">
        <p className="text-xs font-medium">Editor Theme</p>
        <Select value={backgroundTheme} onValueChange={setBackgroundTheme}>
          <SelectTrigger
            size="sm"
            className="text-sm px-3 py-2 rounded-md bg-background hover:bg-accent border"
          >
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {CodeMirrorThemeBackGroundGroup.map((theme, idx) => (
                <SelectItem key={idx} value={theme.theme}>
                  {theme.theme}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Background */}
      <div className="flex flex-col gap-2 items-start">
        <p className="text-xs font-medium">Background</p>
        <Select
          value={outerBackground.name}
          onValueChange={(name) => {
            const bg = Backgrounds.find((b) => b.name === name);
            if (bg) setOuterBackground(bg);
          }}
        >
          <SelectTrigger
            size="sm"
            className="text-sm px-3 py-2 rounded-md bg-background hover:bg-accent border"
          >
            <SelectValue placeholder="Select Background" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {Backgrounds.map((bg, idx) => (
                <SelectItem key={idx} value={bg.name}>
                  <div className="flex items-center gap-1.5">
                    <div
                      className="w-4 h-4 rounded-full border"
                      style={{ background: bg.value }}
                    />
                    <span>{bg.name}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Language */}
      <div className="flex flex-col gap-2 items-start">
        <p className="text-xs font-medium">Language</p>
        <Select value={language} onValueChange={setLanguage}>
          <SelectTrigger
            size="sm"
            className="text-sm px-3 py-2 rounded-md bg-background hover:bg-accent border"
          >
            <SelectValue placeholder="Select Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {Object.entries(languages).map(([key, label]) => (
                <SelectItem key={key} value={key}>
                  {label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Padding + Roundness */}
      <div className="h-full row-span-2">
        <div className="col-span-1 flex flex-col gap-2 min-h-14">
          <label className="text-xs font-medium">Padding</label>
          <PaddingSlider />
        </div>

        <div className="col-span-1 flex flex-col gap-2">
          <label className="text-xs font-medium">Roundness</label>
          <RoundnessSlider />
        </div>
      </div>

      {/* Export + Reset Buttons */}
      <div className="w-full flex flex-col row-span-2 h-full items-center justify-center gap-3">
        <Button
          onClick={onDownloadImage}
          size="sm"
          className="cursor-pointer w-full"
          variant="secondary"
        >
          Export
        </Button>
        <Button
          onClick={handleClick}
          size="sm"
          className="cursor-pointer w-full"
          variant="secondary"
        >
          Reset
        </Button>
      </div>

      {/* Toggle Group */}
      <div className="flex items-center gap-3 col-span-3">
        <ButtonGroup />
      </div>
    </div>
  );
};

export default CustomMenu;
