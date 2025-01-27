/**
  It should be a client side component to add onClick to it.
*/
'use client';

import { useEffect } from 'react';

// Lecture #8 ----------------------------------------------------------------------------------
/**
  "error, reset"
  This error is going to give us two things. Error, Reset.
  Reset means you're gonna try again.
  When we call that reset function, this is going to try again.
  And if doesn't work, it shows the error again.
  Otherwise it's going to show the page.
*/
export default function Error({ error, reset }) 
{
  // Anytime an error happened, we want to run this component.
  useEffect(() => {
    console.log(error);
  }, [error]);

  //_______________________________________________
  return (
    /*
      "text-center"
      Bring everything to the center. 
      
      "mt-10"
      Add some margin at the top of 10.
    */
    <div className='text-center mt-10'>
      <h1>Something went wrong. Please try again later.</h1>

      {/* 
        "reset()"
        Have a button to be able to reset the server, saying try again, 
        which is going to call our reset function.
        
        "hover:text-amber-600"
        When we hover over it, change the text color to be amber 600.
      */}
      <button className='hover:text-amber-600' onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
}
