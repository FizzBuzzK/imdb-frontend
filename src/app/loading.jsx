
/* Lecture #9 --------------------------------------------------------
   Add the loading effect using the new feature of Next.js.
   Use a website called "loading.io" to get some spinner.
   Put it inside the public folder.
   But, because the the result is fetched so fast, you're not gonna see the loading effect.
*/
export default function loading()
{
  return (
    /*
      "flex justify-center"
      Bring this to the center.
    */
    <div className='flex justify-center mt-16'>
      {/* 
        Add some height of 52 to the image in order to make it big.
      */}
      <img className='h-52' src='spinner.svg' alt='loading...' />
    </div>
  );
}


