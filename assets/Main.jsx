import React, { useState } from "react";
import axios from 'axios';

const Main = () => {
  const [data, setData] = useState({});
  const [word, setWord] = useState('');

  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  const searchWord = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setWord('')
    }
  }

  return (
    <div className="">
      <div className="flex justify-center p-14">
        <input
          className="border-[#93B1A6] bg-white border-solid border-0 rounded-xl p-4 w-[200px] xl:w-[500px] lg:w-[300px]"
          type="text"
          value={word}
          onChange={(event) => setWord(event.target.value)}
          
          onKeyDown={searchWord}
          placeholder="Enter the word..."
        />
      </div>  
      <div className="text-white font-Poppins grid gap-4 p-4">
        <div className="flex justify-center">
        <h1 className="justify-self-center font-bold text-3xl p-4">{data[0]?.word}</h1>

        </div>
        <p className="p-2">{data[0]?.phonetic}</p>
        <div className="md:flex md:gap-4 md:justify-evenly">
          <div className="md:grid md:gap-2">
          <p className="text-center text-[#183D3D] font-bold md:relative md:top-[13px]">definitions</p>
          < div className="border-2 border-[#183D3D] rounded-xl md:w-[300px] lg:w-[400px] xl:w-[600px] xl:h-[200px]">
        <p className="p-4">{data[0]?.meanings[0]?.definitions[0]?.definition}</p>
        <p className="p-4">{data[0]?.meanings[0]?.definitions[1]?.definition}</p>
        <p className="p-4">{data[0]?.meanings[0]?.definitions[2]?.definition}</p>

        </div>
        </div>
        <div className="md:grid md:gap-2">
          <p className="p-4 text-[#183D3D] text-center font-bold">more about this word</p>
          <div className="border-2 border-[#183D3D] rounded-xl md:w-[300px] lg:w-[400px] xl:w-[600px] xl:h-[200px]">
        <p className="p-4">{data[0]?.meanings[0]?.synonyms[0]}</p>
        <p className="p-4">{data[0]?.meanings[0]?.antonyms[0]}</p>
        <p className="p-4">{data[0]?.meanings[0]?.definitions[0]?.example}</p>
        <p className="p-4">{data[0]?.meanings[0]?.antonyms[10]}</p>

        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Main;