import { useState, useEffect } from 'react';
import './TypewriterTitle.css';

interface TypewriterTitleProps {
  text: string;
  className?: string;
}

export default function TypewriterTitle({ text, className = '' }: TypewriterTitleProps) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [text]);

  const lines = displayedText.split('\n');

  return (
    <h1 className={className}>
      {lines.map((line, i) => (
        <span key={i}>
          {line}
          {i < lines.length - 1 && <br />}
        </span>
      ))}
      <span className="typewriter-cursor"></span>
    </h1>
  );
}
