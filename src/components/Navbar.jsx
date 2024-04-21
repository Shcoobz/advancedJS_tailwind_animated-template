/**
 * Hook for managing state within React.
 */
import { useState } from 'react';

/**
 * Navbar component for navigation within the application.
 * @returns {React.Component} - Responsive top navigation bar.
 */
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Toggles the visibility of the mobile navbar menu.
   */
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg'>
      <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
        <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
          <a
            className='text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white'
            href='https://shcoobz.github.io/'>
            Project Portfolio
          </a>
          <button
            className='cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
            type='button'
            onClick={toggleNavbar}>
            <i className='text-white fas fa-bars'></i>
          </button>
        </div>
        <div
          className={`lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none${
            isOpen ? ' block' : ' hidden'
          }`}
          id='example-collapse-navbar'>
          <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
            <li className='flex items-center'>
              <a
                className='lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                href='#pablo'>
                <i className='lg:text-gray-300 text-gray-500 fab fa-linkedin text-lg leading-lg'></i>
                <span className='lg:hidden inline-block ml-2'>Share</span>
              </a>
            </li>
            <li className='flex items-center'>
              <a
                className='lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                href='#pablo'>
                <i className='lg:text-gray-300 text-gray-500 fab fa-instagram text-lg leading-lg'></i>
                <span className='lg:hidden inline-block ml-2'>Share</span>
              </a>
            </li>
            <li className='flex items-center'>
              <a
                className='lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                href='#pablo'>
                <i className='lg:text-gray-300 text-gray-500 fab fa-github text-lg leading-lg'></i>
                <span className='lg:hidden inline-block ml-2'>Star</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
