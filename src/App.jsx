import React, { useContext, useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import { Search } from "./components/Search.jsx"; 
import Display from "./components/Display.jsx";
import { SearchContext } from "./components/Search.jsx";
import { FontTypeContext } from "./components/FontType.jsx";
import { WordContext } from "./components/WordContext.jsx";
import { getWord } from "./dictionary";

function App() {
  const { search } = useContext(SearchContext);
  const { fontType } = useContext(FontTypeContext); 
  const { setWord } = useContext(WordContext);
  const [errorWord, setErrorWord] = useState(false);

  useEffect(() => {
    setErrorWord(false);

    async function fetchData() {
      try {
        const response = await getWord(search);
        setWord(response);
        setErrorWord(false);
      } catch (e) {
        setErrorWord(true);
      }
    }

    fetchData();
  }, [search]);

  let content;
  if (errorWord) {
    content = (
      <section className="w-full flex flex-col justify-center items-start overflow-hidden">
        <p className="text-red-500">An error occurred while fetching data. Please try again.</p>
      </section>
    );
  } else {
    content = (
      <section className="w-full flex flex-col justify-center items-start overflow-hidden">
        <Display />
      </section>
    );
  }

  return (
    <div className={`min-h-screen w-screen flex justify-center items-start dark:bg-black ${fontType}`}>
      <main className="h-full w-90 max-w-2xl py-8 flex flex-col items-center dark:text-white overflow-hidden">
        <Header />
        <Search text="Search a word" />
        {content}
      </main>
    </div>
  );
}

export default App;
