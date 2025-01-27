import Results from '@/components/Results';
import Banner from '@/components/Banner';

// Lecture #7 ------------------------------------------------------------------------
/*
  "process.env.API_KEY" 
  Use the API key from the .env.local file in our application.
*/
const API_KEY = process.env.API_KEY;

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
export default async function Home({ searchParams }) 
{
  /*
    "searchParams.genre || 'fetchTrending'"
    The genre is from searchParams. 
    And if this is not available, if there is nothing, fetch the trending.
    So in the home page, if there is no query, we fetch trending.
    Otherwise we check the genre.
  */
  const genre = searchParams.genre || 'fetchTrending';

  /**
    "${genre === 'fetchTopRated'?`/movie/top_rated`:`/trending/all/week`}"
    Have a dynamic URL 
    because we want to create a request based on the "top trending" or "top rated".
    Based on this query of the genre, we want to get different data from the API.
    If there is something else rather than top rated, search a trending for the last week.
    
    "?api_key=${API_KEY}"
    Add a question mark and API key.
    The API key is coming from our environmental variable.

    "language=en-US"
    We want to set the language to be English.

    "page=1"
    We can get the first page.
    We can add another query.
    Page equal to one.
  */
  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}&language=en-US&page=1`,
    
    /**
      "revalidation"
      Revalidate every for example, 10s or something.
      If you use this one every 10s at the next js server, 
      it is going to fetch again the data.
      And if something is changed, it's going to show it for us.
      For revalidation, we don't need every 10s 
      because the movie's gonna change, for example, daily or weekly.
      So 10s is really quick to check the new one.
      So add, for example, 10000.
    */ 
    { next: { revalidate: 10000 } }
  );

  /**
    "res.json()"
    After that we're going to convert the response to Json.
    So we get the data.
   */
  const data = await res.json();
  
  /*_______________________________________________ 
    Lecture #8
    "Error()"
    If the response is not okay, throw an error.
    Handle the error by the new method that Nextjs provides.
  */
  if (!res.ok) 
  {
    throw new Error('Failed to fetch data');
  }
  
  /*_______________________________________________
    "data.results"
    we can get the data
  */
  console.log("data ----------------------> ", data);
  const results = data.results;
  // console.log("data.results ---> ", data.results);

  //_______________________________________________
  // Pass this result here and then loop through it
  return (
    <div>

      {/* +++++++++++++++++++++++++++++++++++++++++++++++ */}
      <Banner api={API_KEY}/>

      <Results results={results} />
    </div>
  );
}
