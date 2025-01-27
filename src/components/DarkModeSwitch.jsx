/**
  This component needs to be client side to be able to use it.
  Because we are using use contexts, we cannot use server side for this component.
  By default, all the components of Nextjs are server side, but.
  When we are using use contexts at any hooks or onclick 
  we need to create a client's side to be able to interact with the website, 
  so any interaction with the website should be in client side.

  This is a client side because we want to add some hook here 
  to detect if the system or the choice of the user is light or dark.

  And as we are using a hook we need to change the server side to client side.
  Otherwise we're going to get an error in Next.js.
*/
'use client';

/**
 We want to have some icons, a moon and light icons.
 */
import { MdLightMode, MdDarkMode } from 'react-icons/md';

/**
 *So we're going to use a package called Next Theme 
  that is going to use use context to save the preference of the user.
  For example, if the user wants to their system to be dark mode, 
  they're going to detect that and make a dark mode by default.
  So what we do here we're going to install that package.
  "npm i next-themes"
*/
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

// Lecture #4 ----------------------------------------------------------------------------------
/**
  We want to add another component for the dark mode switch and add it to the header section.
  So inside the components we're going to create another component called darkMode switch.
  But we want to add this one to our header JSX.
*/

export default function DarkModeSwitch()
{
  /**
    First thing first I want to see what's the theme we have and then we create the condition.
    So in order to know we need to import use theme.
    And also we want to have a function to set the theme, because when we click on the icon, 
    we want to change the theme.
    And also we want to get the system theme from use theme.
    So we have imported use theme.
    And then using this hook we're going to use we get these three.

   */
  const { theme, setTheme, systemTheme } = useTheme();


  const [mounted, setMounted] = useState(false);
  
  /**
   So the current theme is going to be equal to the theme from useTheme.
   If the theme is equal to system, we want to use the system theme.
   Otherwise we want to use the original theme.
   */
  const currentTheme = theme === 'system' ? systemTheme : theme;

  //_______________________________________________
  /**
    Lecture #4
    Mounting takes time for the page to be loaded,
    and the system decides which theme we have.
    Otherwise, we're going to have some conflict between the server and client.
    When the page is loaded completely, we can detect it by useEffect
    */
  useEffect(
    () => setMounted(true)
  ,[]);

  //_______________________________________________
  return (
    <div>
      {/** 
        We want to create a condition.
        So if it's a dark mode, we want to show the light icon.
        And if it's light mode we want to show the dark icon which is the moon icon.
        So we just say here, if the current theme is dark, we want to show that MD light icon.
        Otherwise we want to see the dark icon.

        The classes I want to add, I want to make them larger. 
        We just say x large Tex.
        We set the cursor to be pointer, so we see a pointing hand when we click on them.
        When we hover over them and then when we hover over them, I want to change their color to be amber.
        
        And also we want to add an onClick event listener.
        So in the light mode when we click on it, we want to set the theme to be light.

        We need to define some colors for different themes inside the "Providers.jsx".

        If it's mounted and the current mode theme is dark, show this one.
        So we're not going to see any icon when we refresh the page until the page is mounted.
      */}
      {mounted &&
        (currentTheme === 'dark' ? (
          <MdLightMode
            onClick={() => setTheme('light')}
            className='text-xl cursor-pointer hover:text-amber-500'
          />
        ) : (
          <MdDarkMode
            onClick={() => setTheme('dark')}
            className='text-xl cursor-pointer hover:text-amber-500'
          />
        ))}
    </div>
  );
}
