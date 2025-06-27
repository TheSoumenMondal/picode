"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import CodeMirror, { Extension, oneDark } from "@uiw/react-codemirror";
import {
  abyss,
  androidstudio,
  atomone,
  bbedit,
  bespin,
  dracula,
  darcula,
  duotoneDark,
  duotoneLight,
  eclipse,
  githubDark,
  githubLight,
  gruvboxDark,
  gruvboxLight,
  material,
  monokai,
  nord,
  solarizedDark,
  solarizedLight,
  sublime,
  tokyoNight,
  tokyoNightDay,
  tomorrowNightBlue,
  vscodeDark,
  xcodeDark,
  xcodeLight,
} from "@uiw/codemirror-themes-all";

import { loadLanguage } from "@uiw/codemirror-extensions-langs";
import { EditorView } from "@codemirror/view";
import { useThemeStore } from "@/store/store";
import { CodeMirrorThemeBackGroundGroup } from "@/lib/themes";

const CodeEditor = () => {
  const {
    backgroundTheme,
    language,
    title,
    setTitle,
    lineNumber,
    code,
    setCode,
    dots,
  } = useThemeStore();

  const [backgroundColor, setBackGroundColor] = useState<string>("#1e1e1e");
  const [titleThemeType, setTitleThemeType] = useState<"dark" | "light">(
    "dark"
  );
  const [editorTheme, setEditorTheme] = useState<Extension>(vscodeDark);

  const editorRef = useRef<HTMLDivElement>(null);

  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const debouncedSaveCode = (value: string) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setCode(value);
    }, 300);
  };

  useEffect(() => {
    const selectedTheme = CodeMirrorThemeBackGroundGroup.find(
      (item) => item.theme === backgroundTheme
    );

    if (selectedTheme) {
      setBackGroundColor(selectedTheme.bg);
      setTitleThemeType(selectedTheme.type);
    }

    const themeMap: Record<string, Extension> = {
      abyss,
      androidstudio,
      atomone,
      bbedit,
      bespin,
      darcula,
      dracula,
      duotoneDark,
      duotoneLight,
      eclipse,
      githubDark,
      githubLight,
      gruvboxDark,
      gruvboxLight,
      material,
      monokai,
      nord,
      solarizedDark,
      solarizedLight,
      sublime,
      tokyoNight,
      tokyoNightDay,
      tomorrowNightBlue,
      vscodeDark,
      xcodeDark,
      xcodeLight,
    };

    setEditorTheme(themeMap[backgroundTheme] ?? oneDark);
  }, [backgroundTheme]);

  return (
    <div
      className={cn(
        "min-w-[400px] rounded-xl shadow-2xl border border-white/20"
      )}
      style={{ backgroundColor }}
    >
      <header className="grid grid-cols-6 gap-3 items-center px-4 py-3">
        <div className="flex gap-1.5">
          <div
            className={`w-3 h-3 rounded-full ${
              dots ? "bg-red-500" : "bg-transparent"
            }`}
          />
          <div
            className={`w-3 h-3 rounded-full ${
              dots ? "bg-yellow-500" : "bg-transparent"
            }`}
          />
          <div
            className={`w-3 h-3 rounded-full ${
              dots ? "bg-green-500" : "bg-transparent"
            }`}
          />
        </div>
        <div className="col-span-4 flex justify-center">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            spellCheck={false}
            onClick={(e: any) => e.target.select()}
            className={`bg-transparent text-center focus:outline-none text-sm font-medium w-full ${
              titleThemeType === "dark" ? "text-gray-300" : "text-gray-900"
            }`}
          />
        </div>
      </header>

      <div className="px-4 pb-4" ref={editorRef}>
        <CodeMirror
          theme={editorTheme}
          value={code === "" ? 'print("Hello World!")' : code}
          onChange={debouncedSaveCode}
          extensions={[
            loadLanguage(
              language === "plaintext" ? "javascript" : (language as any)
            ) as any,
            EditorView.lineWrapping,
            EditorView.theme({
              "&": {
                fontSize: "16px",
              },
              ".cm-content": {
                minHeight: "40px",
                padding: "8px 0",
              },
              ".cm-focused": {
                outline: "none",
              },
              ".cm-gutters": {
                backgroundColor: "transparent",
                border: "none",
              },
            }),
          ]}
          basicSetup={{
            lineNumbers: lineNumber,
            foldGutter: false,
            dropCursor: false,
            allowMultipleSelections: false,
            autocompletion: true,
            bracketMatching: true,
            closeBrackets: true,
            highlightSelectionMatches: false,
          }}
          className={cn(
            "[&_.cm-gutters]:!bg-transparent [&_.cm-gutters]:!border-none",
            "[&_.cm-lineNumbers]:!bg-transparent",
            "[&_.cm-content]:!bg-transparent",
            "[&_.cm-line]:!bg-transparent",
            "[&_.cm-activeLine]:!bg-transparent",
            "[&_.cm-activeLineGutter]:!bg-transparent",
            "[&_.cm-scroller]:scrollbar-none",
            "[&_.cm-scroller::-webkit-scrollbar]:hidden",
            "[&_.cm-scroller]:-ms-overflow-style:none",
            "[&_.cm-scroller]:scrollbar-width:none"
          )}
        />
      </div>
    </div>
  );
};

export default CodeEditor;
