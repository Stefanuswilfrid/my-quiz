import { useRef } from "react";
import React from "react";

const Home = ({setName}) => {
    const inputRef = useRef();

    const handleClick = () => {
        setName(inputRef.current.value);
      
    }
    return ( 
        <>
        <div className="flex flex-col mt-40 px-4 items-center">
        <h1 className="text-4xl md:text-5xl font-bold mx-auto items-center text-center">
          How well do you know me? 
        </h1>
        <h2 className="mx-auto text-gray-400 xs:text-2xl md:text-3xl mt-4 text-center">
          Take this fun and easy Quiz to find out how well you know me!
        </h2>
        <i className="mx-auto mt-4 rounded-full bg-gray-200 p-2 font-bold">
          ✍️  Aug 12, 2022
        </i>
      </div>


      <form class=" flex items-center ">
        <div class="flex items-center border-b border-gray-500 py-2 mx-auto mt-12 ">
          <input 
            className="
              appearance-none 
              bg-transparent 
              border-none 
              text-gray-700 mr-3 py-1 px-2 
              leading-tight focus:outline-none
              " 
            type="text" 
            placeholder="Enter your name "
            aria-label="Full name"
            ref={inputRef}
            />
          
          <button 
            class="flex-shrink-0 bg-gray-400 hover:bg-gray-500 border-gray-400 hover:border-gray-500 text-sm border-4 text-white py-1 px-2 rounded" 
            type="button"
            onClick={handleClick}
            >
            Start Quiz
          </button>
          
        </div>
      </form>
      </>
     );
}
 
export default Home;