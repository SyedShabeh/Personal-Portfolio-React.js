import React, { useEffect, useState } from 'react';

const words = ["DESIGNER", "DEVELOPER"];
const Typewriter = () => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 150;
  const erasingSpeed = 100;
  const delayBetweenWords = 1500;

  // Helper to get the index where current word and next word differ
  const getCommonPrefixLength = (a, b) => {
    let i = 0;
    while (i < a.length && i < b.length && a[i] === b[i]) {
      i++;
    }
    return i;
  };

  useEffect(() => {
    let timeout;
    const currentWord = words[wordIndex];
    const nextWord = words[(wordIndex + 1) % words.length];
    const commonPrefixLength = getCommonPrefixLength(currentWord, nextWord);

    if (isDeleting) {
      timeout = setTimeout(() => {
        if (charIndex > commonPrefixLength) {
          setText(currentWord.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }, erasingSpeed);
    } else {
      timeout = setTimeout(() => {
        if (charIndex < currentWord.length) {
          setText(currentWord.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          timeout = setTimeout(() => setIsDeleting(true), delayBetweenWords);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, wordIndex, charIndex, isDeleting]);

  return <span className="main-font">{text}</span>;
};

export default Typewriter;
