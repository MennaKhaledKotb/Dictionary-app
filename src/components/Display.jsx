import React, { useState, useEffect, useContext } from "react";
import playSound from "../assets/images/icon-play.svg";
import newWindowsIcon from "../assets/images/icon-new-window.svg";
import { WordContext } from "./WordContext";

function Display() {

  const { word } = useContext(WordContext);
  const [soundWord, setSoundWord] = useState("");

  useEffect(() => {
    if (word && word.phonetics) {
      const audioUrl = word.phonetics.find(item => item.audio);
      setSoundWord(audioUrl ? audioUrl.audio : "");
    }
  }, [word]);

  const handlePlaySound = () => {
    if (soundWord) {
      new Audio(soundWord).play();
    } else {
      console.warn("No audio URL available.");
    }
  };

  return (
    <article className="w-full">
      <header className="w-full flex justify-between items-center mb-5">
        <div>
          <strong className="text-5xl">{word?.word}</strong>
          {word?.phonetics?.map((pho, i) => (
            <p key={i} className="text-2xl text-purple-main">
              {pho?.text}
            </p>
          ))}
        </div>
        <img
          src={playSound}
          alt="Play sound"
          className="cursor-pointer h-14"
          onClick={handlePlaySound}
        />
      </header>

      <section className="w-full">
        <div className="mb-5">
          <strong className="text-xl">{word?.partOfSpeech}</strong>
          <hr className="w-full mt-2" />
        </div>

        <div className="mb-5">
          <p className="block text-gray-main mb-2">Meaning</p>
          <ul>
            {word?.definitions?.map((def, i) => (
              <li key={i} className="list-disc ml-4 text-purple-main mb-3">
                <span className="text-black dark:text-white">{def.definition}</span>
                <br />
                <p className="text-gray-main">{def.example && `"${def.example}"`}</p>
              </li>
            ))}
          </ul>
        </div>

        {word?.synonyms?.length > 0 && (
          <div className="w-full mb-5">
            <p className="inline text-gray-main mb-2 pr-4">Synonyms:</p>
            {word.synonyms.map((syn, i) => (
              <span key={i} className="inline text-purple-main font-semibold">
                {syn}
                {i !== word.synonyms.length - 1 ? ", " : "."}
              </span>
            ))}
          </div>
        )}

        <hr className="w-full mb-5" />

        <div className="mb-5 flex items-center">
          <p className="inline pr-4">Source:</p>
          <a
            href={word?.sourceUrls?.[0]}
            className="underline text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            {word?.sourceUrls?.[0]}
          </a>
          <img
            src={newWindowsIcon}
            alt="Open in new window"
            className="inline-block ml-2"
          />
        </div>
      </section>
    </article>
  );
}

export default Display;
