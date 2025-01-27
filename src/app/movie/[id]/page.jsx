import Image from 'next/image';

// Lecture #11 ----------------------------------------------------------------------------------
/**
  "app/movie/[id]/page.jsx"
  Make a dynamic page with a different ID.
  Have a page for "/movie", and then after that we have a dynamic ID.
  Create it like this in Next.js.
  Create a folder called "movie" inside the "app" directory for the page.
  Inside the movie, have another folder with this method.
  Inside the bracket,add ID ([id]).
  Have a file called "page.jsx" inside the ID folder, not inside the movie folder.

  "params"
  If we add a forward slash some number, for example, "localhost:3000/movie/4236142",
  then we have the movie page.
  Any numbers added at the end is going to be ID.
  We're going to be redirected to this movie page.
  The way that we get that ID in Next.js is like this,
  in the MoviePage(), we just add "params"
  By thing we get from here, we can get the ID at the end of the URL.

  "async"
  Use await, asynchronous.
  So this is going to be a server side.
*/
export default async function MoviePage({ params }) 
{
  /*
    "params.id"
    Get the movie ID
  */
  const movieId = params.id;

  /**
    "${movieId}"
    Pass the movie ID.

    "${process.env.API_KEY}"
    Pass the API key which is inside the environment variable.
  */
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );

  // After fetching the data, convert this one to Json.
  const movie = await res.json();

  //_______________________________________________
  return (

    // Make div to be with the width of full.
    <div className='w-full'>

      {/* 
        "p-4"
        Put a padding of 4.

        "md:pt-8"
        In the medium size and above, add padding at the top of 8.

        "flex"
        "flex-col"
        "md:flex-row"
        Make it flex and flex column in a mobile size 
        but in the medium size, a tablet size and above.

        "content-center"
        Bring the content to the center.
        
        "max-w-6xl"
        Add a maximum width of 6xl.

        "mx-auto"
        Bring everything to the center.

        "md:space-x-6"
        In the medium size and above, add a space between these things, space-x-6.
      */}
      <div className='p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6'>

        {/*
          "maxWidth: '100%', height: '100%'" 
          In different size of the window, for responsive design,
          to keep the proper size of the image in different sizes of devices,
          Use inline style to add two sets of curly braces with maxWidth 100% and height 100%.
        */}
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          className='rounded-lg'
          style={{ maxWidth: '100%', height: '100%' }}
        ></Image>

        {/* 
          Have a padding of 2.
        */}
        <div className='p-2'>
          
          {/* 
            "movie.title || movie.name"
            Movie title or name in H2 tag.

            "text-lg"
            Make the text to be large.

            "mb-3"
            Add a margin bottom of 3.
            
            "font-bold"
            Make the font to be bold.
          */}
          <h2 className='text-lg mb-3 font-bold'>
            {movie.title || movie.name}
          </h2>

          {/* 
            "movie.overview"
            This is going to be a movie overview.
          
            "text-lg"
            Make the text be large.

            "mb-3"
            Add a margin at the bottom of 3.
          */}
          <p className='text-lg mb-3'>{movie.overview}</p>

          {/* 
            "movie.release_date || movie.first_air_date"
            Have their release date, movie release date,
            or if it's not available, have the movie first air date.

            "font-semibold"
            Before adding this paragraph, this movie date, 
            add a span to say "Date Released", making the font to be semibold.
          
            "mr-1"
            Add the margin on the right side of 1.
          */}
          <p className='mb-3'>
            <span className='font-semibold mr-1'>Date Released:</span>

            {movie.release_date || movie.first_air_date}
          </p>
          
          {/*
            "movie.vote_count"
            Show the number of votes.

            "mb-3"
            Add some margin at the bottom of 3.
          */}
          <p className='mb-3'>
            <span className='font-semibold mr-1'>Rating:</span>

            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}
