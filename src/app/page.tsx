"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Navbar from "@/components/custom/navbar";
import Link from "next/link";
import {
  IconChevronRight,
  IconSparkles,
  IconStarFilled,
} from "@tabler/icons-react";
import { useTheme } from "next-themes";

export default function PiCodeLanding() {
  const [particles, setParticles] = useState<
    { left: number; top: number; duration: number; delay: number }[]
  >([]);

  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark");
  }, []);

  useEffect(() => {
    const generated = Array.from({ length: 20 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden select-none">
      {/* Outer vignette */}
      <div className="absolute inset-0 z-0 bg-black">
        <div className="w-full h-full bg-gradient-to-r from-black via-transparent to-black opacity-80" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 h-full overflow-hidden">
        {/* Background gradients */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{ x: [0, -80, 0], y: [0, 60, 0], scale: [1, 0.8, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Glow boxes */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          {[0.2, 0.4, 0.6].map((delay, idx) => (
            <motion.div
              key={idx}
              className={`absolute ${
                idx === 0
                  ? "top-32 left-10 w-80 h-80"
                  : idx === 1
                  ? "top-48 right-10 w-72 h-72"
                  : "bottom-32 left-24 w-64 h-64"
              } border border-gray-700/40 rounded-lg`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay }}
            />
          ))}
        </div>

        {/* UI section */}
        <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center space-y-6">
          <Navbar />

          {/* Badge */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Badge className="bg-gradient-to-r from-orange-500/40 to-pink-500/40 border-orange-500/80 text-orange-200 rounded-full px-2.5 py-1.5 text-xs backdrop-blur-sm">
              <IconSparkles className="w-4 h-4 mr-2" />
              Design code screenshots effortlessly
            </Badge>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-4xl md:text-5xl max-w-2xl font-semibold bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent leading-tight tracking-tight"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Turn your code into beautiful visuals fast
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-sm text-gray-300 mt-4 max-w-2xl"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Share your code with style on social media.
            <br className="hidden md:block" />
            <span className="text-pink-400 font-medium">picode</span> makes it
            effortless — clean design, dev-focused, and blazing fast.
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex gap-2 flex-col w-full sm:flex-row items-center justify-center"
          >
            <Link href={"/create"} className="w-full sm:w-fit">
              <Button className="bg-gradient-to-r w-full from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white md:w-auto gap-0 cursor-pointer">
                Start creating now
                <IconChevronRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link
              className="w-full sm:w-fit"
              href={"https://github.com/TheSoumenMondal/picode"}
            >
              <Button variant={"outline"} className="group w-full sm:w-fit cursor-pointer">
                <IconStarFilled className="w-4 h-4 group-hover:animate-spin text-yellow-400" />
                Star on Github
              </Button>
            </Link>
          </motion.div>

          {/* Code preview */}
          <motion.div
            className="pt-10"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
          >
            <div className="bg-gradient-to-br from-stone-900/80 to-stone-950/80 rounded-2xl p-6 border border-gray-700/50 backdrop-blur-xl shadow-lg max-w-md mx-auto">
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full shadow" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full shadow" />
                  <div className="w-3 h-3 bg-green-500 rounded-full shadow" />
                </div>
                <Badge className="text-xs" variant={"secondary"}>
                  snippet.js
                </Badge>
              </div>
              <pre className="text-sm font-mono text-left space-y-1 text-gray-300">
                <div>
                  <span className="text-blue-400">const </span>
                  <span className="text-yellow-400">generateSnippet</span> = ()
                  =&gt; {"{"}
                </div>
                <div className="ml-4">
                  return{" "}
                  <span className="text-green-400">'Beautiful Code'</span>;
                </div>
                <div>{"}"}</div>
              </pre>
            </div>
          </motion.div>
        </div>

        {/* Floating particles (client-only) */}
        {particles.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full opacity-30"
            style={{ left: `${pos.left}%`, top: `${pos.top}%` }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: pos.duration,
              repeat: Infinity,
              delay: pos.delay,
            }}
          />
        ))}
      </div>
    </div>
  );
}
