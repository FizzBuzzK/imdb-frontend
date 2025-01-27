/**
  As we're using Usestate, which is a react hook, 
  we need to change this component to a client side.
 */
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

// Lecture #12 ----------------------------------------------------------------------------------
export default function SearchBox()
{
  // State for a search.
  const [search, setSearch] = useState('');
  
  // To go to that specific page, use "useRouter" from next navigation.
  const router = useRouter();

  /*______________________________________________________________________
    "e.preventDefault()"
    Prevent the default behavior, which is the refreshing the page when we submit this form.
    When we click, we don't refresh the page.

    "/search/${search}"
    Create a search page called "search/[searchTerm]/page.jsx" with the dynamic search.
  */
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);

    setSearch("");
  };

  //_______________________________________________
  return (
    /*
      "input"
      Search box is a form that has an input with the type of text.

      "flex"
      Bring the input, button next to each other.

      "justify-between" 
      Add a space between them

      "px-5"
      Add padding in the x axis of 5.

      "max-w-6xl"
      Make the maximum width to be 6xl.

      "mx-auto"
      Bring it to the center.

      "onSubmit"
      Add onSubmit event listener for the form to call a function called handle submit.
    */
    <form
      className='flex justify-between bg-white bg-opacity-10 ml-2 px-2 mx-auto rounded'
      onSubmit={handleSubmit}
    >
      {/*
        "w-full"
        "h-14"
        Make text box to be with the full size width and the height of 14.
        
        "rounded-md"
        Make it rounded medium.

        "placeholder-gray-500"
        Make the placeholder color to be gray 500.

        "outline-none"
        Remove the outline. So when we click on it, we don't see any line around it.

        "bg-transparent"
        Change the background color to be transparent.

        "flex-1"
        Cover all the place until we see the button.

        "onChange"
        Add a Onchange event listener in order to set this change, whatever the target.value is.
      */}
      <input
        type='text'
        placeholder='Search...'
        className=' rounded-md placeholder-gray-500 bg-transparent outline-none flex-1'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      
      {/*
        "disabled:text-gray-400'"
        Make this one disabled when we don't have a search.
        When it's disabled, have a text Gray 400.
      */}
      <button
        className='bg-white text-amber-600 disabled:text-gray-600 rounded mt-1 mb-1 p-2'
        disabled={search === ''}
      >
        Search
      </button>
    </form>
  );
}
