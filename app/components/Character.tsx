import { cn } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { IoPlanetSharp } from "react-icons/io5";

const getRandomChar = (ch) => {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789".replace(ch, '') + ch;
  return chars[Math.floor(Math.random() * chars.length)];
};

const useTypewriter = (str, speed = 20) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < str.length) {
      const interval = setInterval(() => {
        let currentChar = displayedText[index] || "";
        if (currentChar !== str[index]) {
          currentChar = getRandomChar(str[index]);
        } else {
          setIndex((prev) => prev + 1);
        }
        setDisplayedText(
          (prev) =>
            prev.substring(0, index) + currentChar + prev.substring(index + 1)
        );
      }, speed);

      return () => clearInterval(interval);
    }
  }, [str, index, displayedText, speed]);

  return displayedText;
};

export default function Character({ data }) {
  return (
    <div
      className={cn(
        "rounded-lg p-3 bg-slate-900 cursor-pointer transition-colors",
        "border-2 border-slate-500 hover:border-slate-300"
      )}
    >
      <h5 className="text-sm text-slate-500 flex gap-2 items-center">
        {/* Species */}
        {data.species.map(({ name }) => name)}
        {/* Planet */}
        <IoPlanetSharp /> {data.homeworld.name}
      </h5>
      {/* Name */}
      <h3>{useTypewriter(data.name)}</h3>
    </div>
  );
}
