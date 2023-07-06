// "use client"
// import React from "react"
// import { useState } from "react"
// import Wrapper from "./Wrapper"
// import memesData from "./memesData"
// import { Console } from "console"
// import Image from "next/image"
// // import Image from "next/image"

// const Memes = () => {

//     const [memeImage, setMemeImage] = useState("https://i.imgflip.com/1h7in3.jpg")

     
//     function getMemeImage(event:any) {
//         event.preventDefault(); // Prevent the default form submission
//         const memesArray = memesData.data.memes
//         const randomNumber = Math.floor(Math.random() * memesArray.length)
//         setMemeImage(memesArray[randomNumber].url)
        
//     }
    
//     return (
//         <section className="mt-8">
//             <Wrapper>
//                 <div className="p-9" >
//                     <form className="grid gap-3">
//                         <input
//                             type="text"
//                             placeholder="Enter your name"
//                             id="nameInput"
//                             className="col-span-1 py-2 rounded-md px-3 indent-1"

//                         />
//                         <input
//                             type="text"
//                             placeholder="Enter your name"
//                             className="col-span-1 py-2 rounded-md px-3 indent-1"
//                             id="emailInput"
//                         />
//                         <button
//                             className="text-white indent-1 font-karla col-span-2 rounded-md bg-gradient-to-r from-purple-700 to-purple-900 
//                             text=lg font-bold align-middle py-2 border-2 border-[#D5D4D8] cursor-pointer"
//                             onClick={getMemeImage}
//                         >
//                             Get a new meme image 🖼
//                         </button >
//                     </form>

//  <div className="max-w-screen-sm max-h-screen-sm flex flex-col mt-5 items-center">
//  <img src={memeImage} alt='hii'  />
//  </div>
                   
//                 </div>
//             </Wrapper>
//         </section>
//     )
// }

// export default Memes