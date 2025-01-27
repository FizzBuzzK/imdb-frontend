'use client';

// import React, { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import Link from 'next/link';


import "./Banner.css";
// import styled from "styled-components";

// Lecture #7 ------------------------------------------------------------------------
/*
  "process.env.API_KEY" 
  Use the API key from the .env.local file in our application.
*/

// Lecture #7 ------------------------------------------------------------------------
/*
  "async"
  "await fetch"
  The way that the Next.js works is
  when we want to create a server side component and fetch the data 
  before the page is loaded inside the client side,
  we need to change this react function component to asynchronous.
  We can do fetching, create an await, fetch for the result, and wait for the result (res).

  "searchParams"
  So the way we get the genre, 
  we get the genre like searchParams.
*/
export default async function Banner({ api }) 
{
  const [movie, setMovie] = useState([]);   // >>>>> 1
  const [id, setId] = useState('');
  const [isClicked, setIsClicked] = useState(false);  // >>>>> 2

  //__________________________________________________________
  // Get a new movie info via fetchData() whenever page refreshes.
  useEffect(() => {
    fetchData();
  }, []);


  //__________________________________
  // Get image info to use as Banner.
  const fetchData = async () => {

    const request = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${api}&language=en-US&page=1`);
    console.log("request ------------------------------------------------------> ", request);


    const data = await request.json();
    console.log("data ------------------------------------------------------> ", data);


    const movieId = data.results[Math.floor(Math.random() * data.results.length)].id;
    console.log("movieId ------------------------------------------------------> ", movieId);
    setId(movieId);



    // const { data: movieDetail } = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${api}&language=en-US`)
    // .then(res => res.json())
    // .then(res => console.log(res))
    // .catch(err => console.error(err));

    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api}&append_to_response=videos&language=en-US`);
    const movieDetail = await response.json();

    
    // const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
    //     params: { append_to_response: "videos" },
    //   });
  
      setMovie(movieDetail);  // >>>>> 1

      console.log("movieDetail ------------------------------------------------------> ", movieDetail);   
  };

  const truncate = (str, n) => 
  {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  
  /*_______________________________________________ 
    Lecture #8
    "Error()"
    If the response is not okay, throw an error.
    Handle the error by the new method that Nextjs provides.
  */
//   if (!res.ok) 
//   {
//     throw new Error('Failed to fetch data');
//   }
  
  /*_______________________________________________
    "data.results"
    we can get the data
  */
//   console.log("data ---> ", data);
//   const results = data.results;
//   console.log("data.results ---> ", data.results);

  //_______________________________________________
  // Pass this result here and then loop through it
  if (!isClicked) 
  {
    return (
    <header // >>>>>
        className="bg-contain bg-center h-screen bg-no-repeat sm:bg-contain md:bg-cover lg:bg-cover"
        // style={{
        //   // backdrop_path: One of the data object's property returned by axios.get()
        //   backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`, 
        //   backgroundPosition: "top center",
        //   backgroundSize: "cover",
        // }}
        style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")` }}

      >
        {/*__________________________________ */}
        <div className="banner__contents">

          <h1 className="banner__title">
            {movie.title || movie.name || movie.original_name}
          </h1>

          <div className="flex flex-row">
            {/* 
              If "Play" button is clicked,
              make the video play.   
            */}
            <button
              className="flex flex-row items-center justify-start cursor-pointer 
              bg-gray-500 hover:bg-gray-700 
              outline-none border-none 
              text-base font-bold rounded py-1 px-1 pr-3 pl-3 mr-4"
              onClick={() => setIsClicked(true)} // >>>>> 2
            >
              Play
            </button>

            <Link href={`/movie/${id}`}>
                <div
                  className="flex flex-row items-center justify-start cursor-pointer 
                  bg-gray-500 hover:bg-gray-700 
                  outline-none border-none 
                  text-base font-bold rounded py-1 px-1 pr-3 pl-3 mr-4"
                >
                  More Information
                </div>
            </Link>

            
          </div>

          {/* 
            If the length of description is over 100, 
            truncate it with ... at the end. 
          */}
          <h1 className="banner__description">
            {truncate(movie.overview, 100)}
          </h1>
        </div>

        
      </header>
    );
  }


  //__________________________________________________________
  
  else 
  {   
    return (          
        <iframe
        className = 'w-full h-screen'
        
        // movie.videos.results[0].key = Id of the first movie out of the fetched movies.
        src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
        title="YouTube video player"
        frameborder="0"
        allow="autoplay"      
        allowfullscreen
        ></iframe>
    );
  } 
}

// ------------------------------------------------------------------
// const Iframe = styled.iframe`
//   width: 100%;
//   height: 100%;
//   z-index: -1;
//   opacity: 0.65;
//   border: none;

//   &::after {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//   }
// `;

// ------------------------------------------------------------------
// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   width: 100%;
//   height: 100vh;
// `;

// ------------------------------------------------------------------
// const HomeContainer = styled.div`
//   width: 100%;
//   height: 100%;
// `;

