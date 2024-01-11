import React, { useState, useEffect } from 'react';

interface TextReadAnimationProps{
  text: string,
}

const TextReadAnimation = (props: TextReadAnimationProps) => {
  const originalSentence = props.text;
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState<number>(0);

  const wordsArray = React.useMemo(() => originalSentence.split(/\s+/), [originalSentence]);
  
  useEffect(() => {
    setIndex(0);
  }, [props.text]);
  
  useEffect(() => {
    const delayingAWord = setTimeout(() => {
      if (index < wordsArray.length) {
        setDisplayText(wordsArray.slice(0, index+1).join(' '))
        setIndex(index+1);
      } else {
        clearTimeout(delayingAWord);
      }
    }, 100);

    return () => clearTimeout(delayingAWord);
  }, [index, originalSentence]);


  return (
    <>
      <p dangerouslySetInnerHTML={{ __html: displayText }} />
    </>
  );
};

export default TextReadAnimation;