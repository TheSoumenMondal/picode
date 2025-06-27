import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Background {
  name: string;
  value: string;
}

interface AppState {
  code: string;
  title: string;
  theme: string;
  outerBackground: Background;
  backgroundTheme: string;
  showBackground: boolean;
  language: string;
  fontSize: number;
  fontStyle: string;
  padding: number;
  roundness: number;
  lineNumber: boolean;
  dots: boolean;
  setCode: (code: string) => void;
  setTitle: (title: string) => void;
  setTheme: (theme: string) => void;
  setBackgroundTheme: (theme: string) => void;
  setShowBackground: (show: boolean) => void;
  setLanguage: (lang: string) => void;
  setOuterBackground: (background: Background) => void;
  setFontSize: (size: number) => void;
  setFontStyle: (style: string) => void;
  setPadding: (padding: number) => void;
  setRoundness: (roundness: number) => void;
  setLineNumbers: (value?: boolean) => void;
  setDots: (value?: boolean) => void;
}

export const useThemeStore = create<AppState>()(
  persist(
    (set) => ({
      code: "",
      title: "untitled",
      theme: "dark",
      outerBackground: {
        name: "Peach Sunset",
        value:
          "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 25%, #fad0c4 75%, #a18cd1 100%)",
      },
      backgroundTheme: "vscodeDark",
      showBackground: true,
      language: "plaintext",
      fontSize: 16,
      fontStyle: "JetBrainsMono",
      padding: 64,
      roundness: 20,
      lineNumber: true,
      dots: true,
      setCode: (code) => set({ code }),
      setTitle: (title) => set({ title }),
      setTheme: (theme) => set({ theme }),
      setBackgroundTheme: (theme) => set({ backgroundTheme: theme }),
      setShowBackground: (show) => set({ showBackground: show }),
      setLanguage: (lang) => set({ language: lang }),
      setOuterBackground: (background) => set({ outerBackground: background }),
      setFontSize: (size) => set({ fontSize: size }),
      setFontStyle: (style) => set({ fontStyle: style }),
      setPadding: (padding) => set({ padding }),
      setRoundness: (roundness) => set({ roundness }),
      setLineNumbers: (value) =>
        set((state) => ({
          lineNumber: value !== undefined ? value : !state.lineNumber,
        })),
      setDots: (value) =>
        set((state) => ({
          dots: value !== undefined ? value : !state.dots,
        })),
    }),
    {
      name: "theme-store",
    }
  )
);
