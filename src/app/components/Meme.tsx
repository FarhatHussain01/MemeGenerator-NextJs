"use client"
import React, { useState , useEffect } from "react";
import Wrapper from "./Wrapper";
import memesData from "./memesData";



const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1g8my4.jpg",
  });

  // const [allMeme, setAllMeme] = useState(memesData);
  const [allMeme, setAllMeme] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMeme(data.data.memes))
}, [])


  function getMemeImage(event:any) {
    event.preventDefault();
    // const memesArray = allmemes.data.memes;
    // const randomNumber = Math.floor(Math.random() * memesData.length);
    const randomNumber = Math.floor(Math.random() * allMeme.length);
    const url = allMeme[randomNumber].url;
    setMeme((previousMeme) => {
      return {
        ...previousMeme,
        randomImage: url,
      };
    });
  }

  const handleChange = (event:any) => {
const {name , value} = event.target

setMeme((previousText)=>{
    return {
        ...previousText,
        [name]:value
    }

})
  };

  return (
    <section className="mt-8">
      <Wrapper>
        <div className="p-9">
          <form className="grid gap-3">
            <input
              type="text"
              placeholder="topText"
              id="nameInput"
              className="col-span-1 py-2 rounded-md px-3 indent-1 "
              name = "topText"
              onChange={handleChange}
              value = {meme.topText}
            />
            <input
              type="text"
              placeholder="bottomText"
              className="col-span-1 py-2 rounded-md px-3 indent-1"
              id="emailInput"
              name = "bottomText"
              onChange={handleChange}
              value = {meme.bottomText}
            />
            <button
              className="text-white indent-1 font-karla col-span-2 rounded-md bg-gradient-to-r from-purple-700 to-purple-900 
                            text-lg font-bold align-middle py-2 border-2 border-[#D5D4D8] cursor-pointer"
              onClick={getMemeImage}
            >
              Get a new meme image 🖼
            </button>
          </form>

          <div className="max-w-screen-sm max-h-screen-sm flex flex-col mt-5 items-center relative">
            <img src={meme.randomImage} alt="hii"  className="max-w-screen-md rounded-md" />
            <h2 className="top-0 absolute w-80 mx-auto text-center left-1/2 transform -translate-x-1/2 my-6 px-2 font-impact text-2xl uppercase text-white tracking-wider">
            {meme.topText}
            </h2>
            <h2 className="bottom-0 absolute w-80 mx-auto text-center left-1/2 transform -translate-x-1/2 my-6 px-2 font-impact text-2xl uppercase text-white tracking-wider">
            {meme.bottomText}
            </h2>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Meme;
