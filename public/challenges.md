/**
     * Challenge 1: 
     * As soon as the Meme component loads the first time,
     * make an API call to "https://api.imgflip.com/get_memes".
     * 
     * When the data comes in, save just the memes array part
     * of that data to the `allMemes` state
     * 
     * Think about if there are any dependencies that, if they
     * changed, you'd want to cause to re-run this function.
     * 
     * Hint: for now, don't try to use an async/await function.
     * Instead, use `.then()` blocks to resolve the promises
     * from using `fetch`. We'll learn why after this challenge.
     */


       /**
     * Challenge 2: 
     * Try to figure out why our code is broken! 😞
     * 
     * Hint: it has to do with the difference between
     * what we were importing before from memesData.js
     * and what we're setting our state as with `allMemes`
     */