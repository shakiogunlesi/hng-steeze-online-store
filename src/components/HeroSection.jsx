import BgImage from '../assets/images/bgImage.jpg'
import Navbar from './navbar'

function heroSection() {
    return (
        <>
        <div className='mt-10 rounded-[25px] py-10' style={{ backgroundImage: `url(${BgImage})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <Navbar />
            <div className="w-full flex flex-col justify-center lg:gap-8 sm:gap-0 items-center leading-[56px] my-16 mx-auto">
                <h1 className=" font-semibold md:text-[66px] text-[40px] font-OpenSans text-white sm:leading-3">Your Number one Fashion Store</h1>
                <p className=" md:text-[46px] font-normal text-white text-[26px]">A taste of class</p>
                <div className="w-full justify-center items-center hidden max-[1000px]:flex">
                    <form className="relative">
                        <button className="absolute xl:left-3 -translate-y-1/2 top-1/2 p-1">
                            <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search" className="w-5 h-5 text-gray-700">
                                <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                        <input className=" xl:w-[569px] sm:placeholder:left-2 rounded-full xl:px-8 px-4 w-[300px]  xl:py-3 border-2 border-transparent focus:outline-none focus:border-gray-500 placeholder-gray-400 transition-all duration-300 shadow-md" placeholder="Search..." required="" type="text" />
                        <button type="reset" className="absolute xl:right-3 right-4 -translate-y-1/2 top-1/2 p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>

        </>
    )
}

export default heroSection