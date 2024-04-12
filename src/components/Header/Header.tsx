import RightMenu from './RightMenu'

function Header() {

  return (
    <div className="flex items-center max-auto mb-12 py-3 md:grid-cols-3">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-house-door-fill home-icon" viewBox="0 0 16 16">
                <path
                    d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"
                />
            </svg>
        </div>
        <div className="flex-1">
            <form action="" className='ml-4'>
                <div className="relative rounded-full">
                    <input type="search" id="search" className="block px-10 w-full p-4 ps-10 border border-gray-300 rounded-full focus:outline-gray-300 "/>
                    <button type='submit' className='px-5 py-[9px] rounded-full absolute end-1.5 bottom-1.5'>
                        <img src="search.svg" alt="" />
                    </button>
                </div>
            </form>
        </div>
        <RightMenu/>
    </div>
  )
}

export default Header
