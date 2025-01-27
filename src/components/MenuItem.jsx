
// Lecture #3
import Link from 'next/link';

// Lecture #3 ----------------------------------------------------------------------------------
/*
"title, address, Icon"
Import these information inside the menu item component as a prop here.
Get the title, address, and icon.
*/
export default function MenuItem({ title, address, Icon })
{
  //_________________________________________________________________________________
  return (

    /*__________________________________________________
    "href"
    When we click on it, go to the different places.
    Use a link tag from next-link. 
    
    "hover:text-amber-500"
    When we hover over them, I want to have this different color like text amber 500.
    I want them to be in a color text-amber when we hover over them.
    */
    <Link href={address} className='hover:text-amber-500'>
      {/*________________________
      "text-2xl"
      Make it bigger.
      
      "sm:hidden"
      In the mobile size and above, make this one hidden.
      */}
      <Icon className="text-2xl sm:hidden"/>
      
      {/*________________________
      "hidden"
      To see the icons in the small screen, "title" in the larger screen, make it hidden.
      Make it hidden in the mobile screen.
      Use hidden class to create this effect.

      "sm:inline"
      In the small size and above, show "title".
      In the larger screen, more than mobile size, see these icons.
      Use "ctrl+space" to get some help from the tailwind CSS IntelliSense extension.
      

      "text-sm"
      Say text is small, which is this font size 14 pixels.
      */}
      <p className='uppercase hidden sm:inline text-sm'>
        {title}
      </p>

    </Link>
  );
}
