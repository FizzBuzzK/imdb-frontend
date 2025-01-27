import Link from 'next/link';
import MenuItem from './MenuItem';
import SearchBox from './SearchBox';

// Lecture #3
// Using this package, add the icons.
// Check this website "react-icons.github.io" to search icons.
// Use this import to add it to your project.
import { AiFillHome } from 'react-icons/ai';

import { BsFillInfoCircleFill } from 'react-icons/bs';
// import DarkModeSwitch from './DarkModeSwitch';

// Lecture #3 ----------------------------------------------------------------------------------
/* 
  This header is common in all pages.
  Add it to the "layout.js" file to be able to see it in everywhere.
*/
export default function Header()
{
  return (
    /*____________________________________________________________________
      "flex"
      For the div that is covering both of the menu and the logo, let's make it this one flex.
      
      "justify-between"
      Add a space between them.

      "max-w-6xl"
      In the larger screen I want to have a maximum width of 6xl.

      "mx-auto"
      Put them to be in the center.
      
      "item-center"
      Align them vertically.

      "p-3"
      Add a padding of 3.
    */
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>

      {/* LOGO __________________________________ 
        "flex"
        Have a div for the dark mode and also that logo.
        Use "flex" to to bring them next to each other.
        
        "gap-4"
        Add a space between them using gap.
      */}
      <div className='flex items-center gap-4'>
        
        {/*___________________
        "flex"
        Use "flex" to to bring them next to each other. 
        
        "gap-1"
        Add a space between them

        "items-center"
        Align with each other.
        */}
        <Link href={'/'} className='flex gap-1 items-center'>

          {/*
          "text-2xl"
          For the IMDb part, make this 2XL 
          
          "font-bold"
          Make the font to be bold.

          "bg-amber-500"
          Have a background color for that of amber 500.

          "py-1"
          Add some padding in the y axis of 1 
          
          "px-2"
          Add some padding in the x axis of 2, 
          
          "rounded-lg"
          Make the icon rounded large to have a rounded corner.
          */}
          <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg'>
            IMDb
          </span>
        </Link>

        {/* Lecture #4 */}
        {/* <DarkModeSwitch /> */}
      </div>

      {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
      {/* SearchBox __________________________________ */}
      <div className='flex items-center gap-4'>
        <SearchBox />
      </div>
      {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */}

      {/* HOME, ABOUT Button __________________________________ 
      Inside the header, Have a div for menu.
      */}
      <div className='flex items-center gap-4'>

        {/* Lecture #3
        "MenuItem"
        Instead of putting the each menu, create a component called "MenuItem.jsx" for the menu item.

        "title"
        Add some props here, something to send there.
        The first one is "HOME", the title.
        But then in a smaller screen, this "HOME" changes to an icon.
        So we have title in the largest screen, just an icon in the smaller screen.
        
        "address"
        When we click on it, goes to the address.

        "Icon"
        Make it uppercase because it's the component.
        Use a package for getting the icons called react icons.
        Inside the terminal, install a package called react-icons, "npm i react-icons".
        Add an icon here as a prop to pass.
        */}
        <MenuItem title='home' address='/' Icon={AiFillHome} />

        <MenuItem title='about' address='/about' Icon={BsFillInfoCircleFill} />
      </div>

    </div>
  );
}
