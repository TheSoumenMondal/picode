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
import { codeSnippets } from "@/lib/codeSnippets";
import { useThemeStore } from "@/store/store";
import { CodeMirrorThemeBackGroundGroup } from "@/lib/themes";

const CodeEditor = () => {
  const { backgroundTheme, language, title, setTitle, lineNumber } =
    useThemeStore();

  const [code, setCode] = useState(() => {
    const snippet = codeSnippets.find((s) => s.language === language);
    return snippet?.code || "";
  });

  const [backgroundColor, setBackGroundColor] = useState<string>("#1e1e1e");
  const [titleThemeType, setTitleThemeType] = useState<"dark" | "light">(
    "dark"
  );
  const [editorTheme, setEditorTheme] = useState<Extension>(vscodeDark);
  const [localTitle, setLocalTitle] = useState(title);
  const editorRef = useRef<HTMLDivElement>(null);

  // Update title
  useEffect(() => {
    setLocalTitle(title);
  }, [title]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setTitle(localTitle);
    }, 300);
    return () => clearTimeout(handler);
  }, [localTitle, setTitle]);

  // Update theme and background
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

  // Update code when language changes
  useEffect(() => {
    const snippet = codeSnippets.find((s) => s.language === language);
    setCode(snippet?.code || "");
  }, [language]);

  const languageExtension = loadLanguage(language as any);

  return (
    <div
      className={cn(
        "min-w-[400px] w-[500px] rounded-xl shadow-2xl border border-white/20"
      )}
      style={{ backgroundColor }}
    >
      <header className="grid grid-cols-6 gap-3 items-center px-4 py-3">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="col-span-4 flex justify-center">
          <input
            type="text"
            value={localTitle}
            onChange={(e) => setLocalTitle(e.target.value)}
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
          value={code}
          onChange={(value) => setCode(value)}
          extensions={[
            ...(languageExtension ? [languageExtension] : []),
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
