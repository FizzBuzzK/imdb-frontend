/*
  This component needs to be client side to be able to use it.
  Because we are using use contexts, we cannot use server side for this component.
  By default, all the components of Nextjs are server side, but.
  When we are using use contexts at any hooks or onclick 
  we need to create a client's side to be able to interact with the website, 
  so any interaction with the website should be in client side.

  And this component, which is a react functional component, should be a client side.
  So we need to add use client at the top to be able to change it to use client.
*/
'use client';

/*
  So we're going to use a package called Next Theme 
  that is going to use use context to save the preference of the user.
  For example, if the user wants to their system to be dark mode, 
  they're going to detect that and make a dark mode by default.
  So what we do here we're going to install that package.
  "npm i next-themes"

  And then we want to use the theme provider from the next themes 
  that we have installed to create it.
*/
import { ThemeProvider } from 'next-themes';

// Lecture #4 ----------------------------------------------------------------------------------
export default function Providers({ children }) 
{
  return (
    /* 
    And then we want to cover everything here with that team provider.
    Inside this, we're going to have a div that is covering all our website.
    And then we want to add the children here.
    So all our website goes inside this team provider, and they're going to be inside the dark mode 
    and light mode because we want to change all the website when we click on dark mode and light mode.
    
    What we need to do next is to go to the layout JS inside the app, and then we want to cover everything
    inside the body section with that providers that we have created.
    
    So we want to have a default team.

    We want to use the system theme.
    For example, the system team can be dark or light based on the preference of that person.
    This one depends on the operating system.
    For example, windows or Mac OS.
    So the person can use a light mode or dark mode.
    So Theme provider is going to detect that one and choose it for us.
    
    And then we want to add attributes class here to be able to use tailwind CSS classes.
    And in order to complete this we need to go to tailwind dot config.js and add another.
    */
    <ThemeProvider defaultTheme='system' attribute='class'>
      {/* 
        Here in the this div that is covering everything, I want to add some classes.
        For example, I want to make the text to be gray 700 for the light mode.
        But a dark mode, I want to make the text to be gray 200.

        And let's change the background color for the dark mode to be gray 700.

        Let's make the minimum height of the screen.
        So we just say minimum height of the screen to be 100% of the viewport height 
        by just adding min height screen.

        I don't want to click when we click on the text to select it.
        So we just say select none.

        And also we want to add some transition when we change the colors with the duration of 300
      */}
      {/* <div className='text-gray-700 dark:text-gray-200 dark:bg-gray-700 min-h-screen select-none transition-colors duration-300'> */}
      <div className='bg-black min-h-screen select-none transition-colors duration-300'>

        {children}
      </div>
    </ThemeProvider>
  );
}
