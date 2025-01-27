// Because we use a hook, change it to client side.
'use client';

import Link from 'next/link';

/**
 * In order to get that genre, use a method called "useSearchParams" from next navigation.
 */
import { useSearchParams } from 'next/navigation';

// Lecture #6 ----------------------------------------------------------------------------------
export default function NavbarItem({ title, param })
{
  /**
    "useSearchParams"
    Initialize it.

    "searchParams.get('genre')"
    Get the genre from the URL.
   */
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre');

  //_______________________________________
  return (
    <div>
      {/*_____________________
        Lecture #6

        "href"
        href is going to be dynamic. "/?genre=${param}" with param that we are getting as a prop.

        "hover:text-amber-600"
        Change the background color to be bg amber 600.

        "font-semibold"
        Make the fonts to be semi bold.

        "genre === param? underline"
        When we are in top trending, we have an underline with this color.
        So this is going to be dynamic based on this URL.
        If the genre is equal to param that we are getting as a prop, add a underline.

        "underline-offset-8"
        The underlying offset means the space between the underline and the text, 8.

        "decoration-4"
        Add a decoration of 4, which is the thickness of the underline.

        "decoration-amber-500"
        The color is going to be decoration Amber 500.
        
        " '' "
        Otherwise, we're gonna just say nothing.
      */}
      <Link
        className={`hover:text-amber-600 font-semibold 
          ${genre === param? 
            'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg'
            : ''
          }`
        }
        
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
