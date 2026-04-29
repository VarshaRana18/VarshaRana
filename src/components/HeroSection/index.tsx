"use client";

import { useState, useEffect } from "react";

// 1. Simplified array (Make sure to copy this part!)
const mantras = [
  ["असतो मा सद्गमय ।", "तमसो मा ज्योतिर्गमय ।", "मृत्योर्मा अमृतं गमय ॥"],
  ["અસતો મા સદ્ગમય ।", "તમસો મા જ્યોતિર્ગમય ।", "મૃત્યોર્મા અમૃતં ગમય ॥"],
  ["অসতো মা সদ্গময় ।", "তমসো মা জ্যোতির্গময় ।", "মৃত্যোর্মামৃতং গময় ॥"],
  [
    "Lead me from the unreal to the real,",
    "Lead me from darkness to light,",
    "Lead me from death to immortality.",
  ],
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // 2. We now use an array in state to track all 3 lines separately
  const [displayedLines, setDisplayedLines] = useState(["", "", ""]);

  // Handle the 20-second rotation
  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % mantras.length);
    }, 20000);

    return () => clearInterval(rotationInterval);
  }, []);

  // Handle the Typewriter effect
  useEffect(() => {
    // Reset all 3 lines when language changes
    setDisplayedLines(["", "", ""]);

    let lineIndex = 0;
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      const currentMantra = mantras[currentIndex];

      // Are we still typing a valid line?
      if (lineIndex < currentMantra.length) {
        const fullLineText = currentMantra[lineIndex];

        // Are there more characters in this specific line?
        if (charIndex < fullLineText.length) {
          setDisplayedLines((prev) => {
            const newLines = [...prev];
            newLines[lineIndex] = fullLineText.substring(0, charIndex + 1);
            return newLines;
          });
          charIndex++;
        } else {
          // This line finished! Jump to the next line and reset the character count
          lineIndex++;
          charIndex = 0;
        }
      } else {
        // The whole mantra is finished!
        clearInterval(typingInterval);
      }
    }, 60);

    return () => clearInterval(typingInterval);
  }, [currentIndex]);

  return (
    <>
      <div className="w-[90vw] max-w-[1400px] min-h-[50vh] mx-auto my-5 rounded-2xl border-[1px] grid grid-cols-1 lg:grid-cols-2 p-6 lg:p-10 bg-gradient-to-r from-rose-100/60 to-purple-500/60 backdrop-blur-[3px]">
        {/* Left side column */}
        <div className="flex items-center justify-center w-full h-full"></div>

        {/* Right side column */}
        <div className="flex items-center justify-end w-full h-full">
          <div className="text-5xl font-mystic text-right text-violet-300 font-bold p-4 w-full flex flex-col m-10">
            {displayedLines.map((lineText, index) => {
              const fullLine = mantras[currentIndex][index];

              const isCurrentlyTyping =
                lineText.length > 0 && lineText.length < fullLine.length;
              const isWaitingForNextLine =
                lineText.length === fullLine.length &&
                (index === 2 || displayedLines[index + 1] === "");

              return (
                // THE ULTIMATE OVERRIDE: Using raw inline styles for the bottom margin
                <div
                  key={index}
                  style={{ marginBottom: "40px", minHeight: "60px" }}
                >
                  {lineText}

                  {(isCurrentlyTyping || isWaitingForNextLine) && (
                    <span className="animate-pulse border-r-4 border-violet-300 ml-1 opacity-70"></span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
