import Card from './Card';

// Lecture #7 ----------------------------------------------------------------------------------
/**
  Get this result as a prop here.
  Inside the results, loop through that results.
 */
export default function Results({ results })
{
  return (
    /**
      "sm:grid"
      Have 5 cards, 5 columns.
      In the smaller screen, have 4, and then 3, 2 and finally 1.
      In the small size and above, have a grid.

      "sm:grid-cols-2"
      Inside the small size and above, have the grid size, the column size to be 2.

      "lg:grid-cols-3"
      For the large size and above, make this grid and want to be 3.

      "xl:grid-cols-4"
      So inside the X large, the column should be 4. 
      
      "2xl:grid-cols-5"
      For 2xl, I'm going to have 5 columns.

      "max-w-6xl"
      The maximum width of the screen, 6xl.
      
      "mx-auto"
      Bring them to the center.

      "py-4"
      Add some padding as well in the y axis of four.
    */
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4'>
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
}
