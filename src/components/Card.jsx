import Image from 'next/image';
import Link from 'next/link';
import { FiThumbsUp } from 'react-icons/fi';

// Lecture #10 ----------------------------------------------------------------------------------
export default function Card({ result }) 
{
  return (
    /*
      "group"
      When hovering over the card, make some opacity inside the image.
      If we hover over this div that is all the cards, make this image transparent.
      Add a group.
      
      "group-hover"
      In Image tag, set group-hover.

      "cursor-pointer"
      When we hover over them, show a pointing hand.

      "sm:hover:shadow-slate-400"
      In the small size and above, when I hover over them, I want to see a shadow, shadow color slate 400.
      
      "sm:shadow-md"
      In this small size and above, set the size of the shadow, shadow Medium.

      "rounded-lg"
      Make it rounded large.

      "sm:border"
      In the small size and above, have a border.
      
      "sm:border-slate-400"
      In small size and above, make the border a slate 400.

      "sm:m-2"
      Have a margin of 2.

      "transition-shadow"
      "duration-200"
      Have a transition on shadow and with a duration of 200.
    */
    <div className='group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg 
    sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200'>
      
      {/*___________________________________________________________________________
        "href"
        Have an image at the top, 
        but I wanted the image to be inside a Link tag to go to that specific movie page
        when we click on the image.
      */}
      <Link href={`/movie/${result.id}`}>

        {/*______________________________________
          "Image"
          Use the "Image" tag from the next JS, 
          which is going to optimize images automatically based on the size of the screen.

          "result.backdrop_path || result.poster_path"
          If we don't have this one (result.backdrop_path), we're going to see the next onev (result.poster_path),
          because some of the results have this one as an image, some of them have this one.
          
          "width"
          If you don't add a width, you're going to get an error inside the next js.
          So you should have a width.

          "sm:rounded-t-lg"
          In the small size and above, make it rounded in the top section, large.

          "next.config.js"
          When you add some image, add that image to the config file of the "next.config.js".
          
          "group-hover:opacity-75"
          When we hover over the card, make some opacity inside the image.
          If we hover over this group, so group-hover, then change the opacity to 97%.
          
          "transition-opacity"
          "duration-300"
          Add a transition on the opacity with the duration of 300 milliseconds.
          */}
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          className='sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300'
        ></Image>

        {/*______________________________________ */}
        <div className='p-2'>
 
          {/*____________________
          "line-clamp-2"
          I don't want to see all the overview.
          I just want to see the two lines of the overview. 

          "text-md"
          Make the text to be medium.          
          */}
          <p className='line-clamp-2 text-md'>
            {result.overview}
          </p>

          {/*____________________
          "result.title || result.name"
          Add an H2 tag inside that we want to see the title.
          If it's not available, we want to see the name.

          "text-lg"
          Make the title bigger.
          
          "font-bold"
          Make the font to be bold.

          "truncate"
          Make a truncate, adding dot dot dot at the end, if it's more than one line.
          */}
          <h2 className='text-lg font-bold truncate'>
            {result.title || result.name}
          </h2>

          {/*____________________ 
          "result.release_date || result.first_air_date"
          Inside the paragraph, show three things.
          First one is release date.
          Or if it's not available, show the first air date.

          "FiThumbsUp"
          Import it at the top to hhow a thumbs up icon.
          
          "result.vote_count"
          Show the number of votes.

          "flex"
          Bring these three things next to each other.

          "items-center"
          Add items center to align them vertically.

          "h-5"
          Add some space between them inside the thumbsup, making it height 5.
          
          "mr-1"
          Add margin right of 1.

          "ml-3"
          Add margin left of 3.
          */}
          <p className='flex items-center'>
            {result.release_date || result.first_air_date}

            <FiThumbsUp className='h-5 mr-1 ml-3' />

            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}
