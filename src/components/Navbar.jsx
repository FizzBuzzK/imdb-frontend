import NavbarItem from './NavbarItem';

// Lecture #6 ----------------------------------------------------------------------------------
/**
  Add it inside the "layout.js" 
 */
export default function Navbar()
{
  //_______________________________________________________________________
  return (
    /**
      "dark:bg-gray-600"
      Change the background color in the dark mode.
      Change the background color to be bg amber 600.
      
      "bg-amber-100"
      In the light mode, change the background to be amber 100.

      "p-4"
      Add some padding of four.

      "lg:text-lg"
      Make the text to be larger in the larger screen and above.

      "justify-center"
      Bring them to the center.
      
      "gap-6"
      Add a gap, having any space between them.
    */
    <div className='flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-6'>
      {/*
      "title"
      Pass the title and the parameters.
      Title for the first one is going to be "Trending".
      
      "param"
      Use this parameter to change the URL.
      The parameter for that one is going to be "fetchTrending".
      */}
      <NavbarItem title='Trending' param='fetchTrending' />
      <NavbarItem title='Top Rated' param='fetchTopRated' />
    </div>
  );
}
