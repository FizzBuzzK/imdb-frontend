import Results from '@/components/Results';

// Lecture #12 ----------------------------------------------------------------------------------
export default async function SearchPage({ params }) 
{
  const seachTerm = params.searchTerm;

  /**
    "api_key=${process.env.API_KEY}"
    Pass the API key, which is the "process.env.API_KEY".
    
    "query=${seachTerm}"
    Pass that query which is the search terms.

    "language=en-US"
    Add more things like Language, English.

    "page=1"
    Get only one page.

    "include_adult=false"
    Remove the adult, make it false.
  */
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${seachTerm}&language=en-US&page=1&include_adult=false`
  );

  // Convert it to Json and show them using Card component later.
  const data = await res.json();
  const results = data.results;

  //_______________________________________________
  return (
    /**
      "results && "
      Create a condition.
      If there is a result, and if the results length is equal to zero,
      meaning if there is no movie with that title,
      have a H1 tag, saying No Results Found.
      Otherwise, if the result is more than zero, 
      meaning if we have the result, pass it to Results component and show it.

      "text-center"
      Bring this one to the center.

      "pt-6"
      Add a padding at the top of 6 after the H1 tag.
     */
    <div>
      { results.length === 0 && <h1 className='text-center pt-6'>No results found</h1> }

      { results && <Results results={results} /> }
    </div>
  );
}

