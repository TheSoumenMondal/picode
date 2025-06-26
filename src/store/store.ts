import { create } from "zustand";
import { persist } from "zustand/middleware";


interface AppState {
  code: string;
  title: string;
  theme: string;
  outerBackground: string;
  backgroundTheme: string;
  showBackground: boolean;
  language: string;
  fontSize: number;
  fontStyle: string;
  padding: number;
  roundness: number;
  lineNumber: boolean;
  setCode: (code: string) => void;
  setTitle: (title: string) => void;
  setTheme: (theme: string) => void;
  setBackgroundTheme: (theme: string) => void;
  setShowBackground: (show: boolean) => void;
  setLanguage: (lang: string) => void;
  setOuterBackground: (background: string) => void;
  setFontSize: (size: number) => void;
  setFontStyle: (style: string) => void;
  setPadding: (padding: number) => void;
  setRoundness: (roundeness: number) => void;
  setLineNumbers: () => void;
}

export const useThemeStore = create<AppState>()(
  persist(
    (set) => ({
      code: "",
      title: "untitled",
      theme: "dark",
      outerBackground: "",
      backgroundTheme: "vscodeDark",
      showBackground: true,
      language: "plaintext",
      fontSize: 16,
      fontStyle: "JetBrainsMono",
      padding: 64,
      roundness: 20,
      lineNumber: true,
      setCode: (code) => set({ code }),
      setTitle: (title) => set({ title }),
      setTheme: (theme) => set({ theme }),
      setBackgroundTheme: (theme) => set({ backgroundTheme: theme }),
      setShowBackground: (show) => set({ showBackground: show }),
      setLanguage: (lang) => set({ language: lang }),
      setFontSize: (size) => set({ fontSize: size }),
      setOuterBackground: (bg) => set({ outerBackground: bg }),
      setFontStyle: (style) => set({ fontStyle: style }),
      setPadding: (padding) => set({ padding }),
      setRoundness: (roundness) => set({ roundness }),
      setLineNumbers: () => set((state) => ({ lineNumber: !state.lineNumber })),
    }),
    {
      name: "theme-store",
    }
  )
);
