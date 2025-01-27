import { Inter } from 'next/font/google';
import './globals.css';

// @ is just the alias for the base file path
import Header from '@/components/Header';
import Providers from './Providers';
import Navbar from '@/components/Navbar';
import SearchBox from '@/components/SearchBox';

//------------------------------------------------------------------------
const inter = Inter({ subsets: ['latin'] });

// Lecture #2 ------------------------------------------------------------------------
// Meta data for HTML
export const metadata = {
  title: 'IMDb clone',
  description: 'This is a movie database clone',
};

//------------------------------------------------------------------------
/*
  "children"
  Inside the layout we have the children. That is all our website.
*/
export default function RootLayout({ children }) 
{
  return (
    //_______________________________________
    <html lang='en'>
      <body className={inter.className}>

        {/*______________________
          Lecture #4
          We want to cover everything inside the body section with "Providers.jsx" that we have created. 
          And then, put everything inside this provider.

          These providers is client side, but inside is all server side.
          So Next.js app directory is kind of a smart to understand.
          The inside is server side and outside is client side.
          And then keep everything separated.
        */}
        <Providers>
          {/* 
            Lecture #3
            Put this header inside the body section, but outside the children.
          */}
          <Header />

          {/* Lecture #6 */}
          <Navbar />

          {/* Lecture #12 */}
          {/* <SearchBox /> */}
          
          {children}
        </Providers>
      </body>
    </html>
  );
}
