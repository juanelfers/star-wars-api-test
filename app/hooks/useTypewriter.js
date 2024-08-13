import { useEffect, useState } from "react";

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

export default useTypewriter;
