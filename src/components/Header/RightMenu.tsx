import { useState } from 'react'

function RightMenu() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuIcon, setMenuIcon] = useState('menu.svg');

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        setMenuIcon(menuOpen ? 'menu.svg' : 'close.svg');
    }

  return (
    <div>
      <div className="hidden md:flex space-x-4 pt-2 px-4">
            <a href="#" className="text-gray-500 hover:text-gray-700 px-3 font-normal py-2" aria-current="page">Explore</a>
            <a href="#" className="text-gray-500 hover:text-gray-700 px-3 font-normal py-2">Advertise</a>
            <a href="#" className="text-gray-500 hover:text-gray-700 px-3 font-normal py-2">Log in</a>
            <a href="#" className="text-gray-500 hover:text-gray-700 px-3 font-normal border-2 border-gray-400 hover:border-gray-800 rounded-lg py-2">Submit a photo</a>
        </div>
        <div className="relative">
            <button type='button' onClick={toggleMenu} className='block md:hidden px-4'>
                <img src={menuIcon} alt="" />
            </button>
            <div className={`absolute right-0 mt-2 shadow-md rounded-md p-4 w-48 bg-gray-200 ${menuOpen ? 'block' : 'hidden'}`}>
                <a href="#" className="block text-gray-500 hover:text-gray-700 px-3 font-normal py-2">Explore</a>
                <a href="#" className="block text-gray-500 hover:text-gray-700 px-3 font-normal py-2">Advertise</a>
                <a href="#" className="block text-gray-500 hover:text-gray-700 px-3 font-normal py-2">Log in</a>
                <a href="#" className="block text-gray-500 hover:text-gray-700 px-3 font-normal border-2 border-gray-400 hover:border-gray-800 rounded-lg py-2">Submit a photo</a>
            </div>
        </div>
    </div>
  )
}

export default RightMenu
