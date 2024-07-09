import CartIcon from '../assets/images/cartIcon2.png'
import LogoutIcon from '../assets/images/loginoutIcon.png'

const Navbar = () => {
 

  return (
    <nav className="bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <div className="flex flex-column flex-row justify-between items-center w-full">
                    <div className="flex-shrink-0">
                        <h1 className="text-black md:text-[45px] text-[35px] font-[900]">SteeZers</h1>
                    </div>
                    <div className="hidden md:block w-fit flex items-center">
                        <form className="relative">
                            <button className="absolute xl:left-3 -translate-y-1/2 top-1/2 p-1">
                            <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search" className="w-5 h-5 text-gray-700">
                            <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </button>
                            <input className="xl:w-[569px] sm:placeholder:left-2 rounded-full xl:px-8 px-4 w-[400px] h-[50px] xl:py-6 border-2 border-transparent focus:outline-none focus:border-gray-500 placeholder-gray-400 transition-all duration-300 shadow-md" placeholder=" Search..." required="" type="text" />
                            <button type="reset" className="absolute xl:right-3 right-4 -translate-y-1/2 top-1/2 p-1"><svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg></button>
                        </form>
                    </div>
                    <div className="">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <a href="/" className="cursor-pointer flex-row flex items-center mr-3">
                                <p className="text-white text-[22px] justify-center flex items-center flex-row gap-2">Cart 
                                    <img 
                                    src={CartIcon}
                                    alt='Arrow-right'
                                    className='md:w-[20px] w-[15px] h-[15px] md:h-[20px]'
                                    />
                                </p>
                                
                            </a>
                            <a href="/" className="cursor-pointer flex-row flex items-center gap-1">
                                <p className="text-white text-[22px] justify-center flex items-center flex-row gap-2">Logout
                                    <img 
                                    src={LogoutIcon}
                                    alt='Arrow-right'
                                    className='md:w-[20px] w-[15px] h-[15px] md:h-[20px]'
                                    />
                                </p>
                                
                            </a>
                        </div>
                    </div>
                </div>
            
            </div>
      </div>

    </nav>
  );
}

export default Navbar;
