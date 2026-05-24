import { useState, useEffect, useRef } from 'react';

const ScrambleText = ({ text }) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef(null);
  const characters = 'MSKJFJMCHDFJABCDEFGHIJLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

  const triggerScramble = () => {
    let iteration = -3;

    // Clear any currently running animation so they don't overlap
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(() =>
        text
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join('')
      );

      // Stop the interval once the word is fully revealed
      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
        // Force the final text just to be safe
        setDisplayText(text); 
      }

      iteration += 0.7 ; // Increase by 0.2 to slow down the reveal a bit, adjust as needed
    }, 40); // Adjust the interval time for faster/slower scrambling effect
  };

  // We still use a small useEffect just to clean up the interval 
  // if the user navigates away from the page while it is animating
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <span 
      onMouseEnter={triggerScramble}
      className="font-sans font-extrabold text-black tracking-widest cursor-default inline-block" // Added cursor-default to indicate it's not clickable, and inline-block to prevent layout shift when scrambling
    >
      {displayText}
    </span>
  );
};

export default ScrambleText;