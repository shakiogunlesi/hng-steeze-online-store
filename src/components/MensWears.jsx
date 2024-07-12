import BgManwear from '../assets/images/mens111.jpg'
import CartIcon from '../assets/images/cartIcon.png'
import Bgstreetguywears from '../assets/images/streetguywears.jpg'
import BgofficeWears from '../assets/images/officeWears.jpg'
import BgInnerShirt from '../assets/images/InnerShirt.jpg'
import BgJeansTop from '../assets/images/menjeantop.jpg'
import BgsweatTop from '../assets/images/sweatTop.jpg'
import BgvintageShirt from '../assets/images/vintageShirt.jpg'
import BgroundneckJeans from '../assets/images/roundneckTop.jpg'
import { Link } from 'react-router-dom'


function MenWearsSection() {
    return (
        <>
        <div className="flex flex-col mx-auto justify-start items-start my-20 overflow-hidden">
            <div className="flex flex-column flex-row justify-between items-center w-full my-8">
                <h1 className="font-[600] text-[25px] md:text-[40px] text-black">For Men</h1>
                <a className="font-semibold  xl:flex px-3 py-1 items-center lg:flex border-2 rounded-xl border-black" href="#">See More</a>
            </div>
            <div className="w-full grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 gap-x-5 gap-y-5">
                <div className="flex flex-col w-[100%] h-[352px] rounded-2xl relative overflow-hidden">
                    <div className="flex flex-row w-full h-[72%] bg-gray-400" style={{ backgroundImage: `url(${BgJeansTop})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                        <div className='bg-black absolute inset-x-0 bottom-0 flex pt-10 px-4'>
                            <div className="flex flex-col text-left text-white w-[350px]">
                                <h2 className="flex-nowrap font-[600] text-[14px]">Men Jean Jacket</h2>
                                <p className='text-[14px] font-[400]'>$200</p>
                                <div className="mb-[2px] border-t-2 border-white w-[90%]"></div>
                                <p className="text-[12px] font-[400]">1 unit left</p>
                            </div>
                            <Link to='/CartPage'>
                                <button className="lg:w-[124px] w-[100px]  h-fit justify-center items-center bg-white mt-3 md:w-[124px] px-2 py-2 rounded-2xl flex flex-row gap-1 text-[12px] font-OpenSans text-black">
                                    Add to cart  
                                    <img 
                                    src={CartIcon}
                                    alt='Cart-icon'
                                    className='md:w-[20px] w-[15px] h-[15px] md:h-[20px]'
                                    />
                                </button>
                            </Link>
                        </div> 
                    </div>
                </div>
                <div className="flex flex-col w-[100%] h-[352px] rounded-2xl relative overflow-hidden">
                    <div className="flex flex-row w-full h-[72%] bg-gray-400" style={{ backgroundImage: `url(${BgroundneckJeans})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                        <div className='bg-black absolute inset-x-0 bottom-0 flex pt-10 px-4'>
                            <div className="flex flex-col text-left text-white w-[350px]">
                                <h2 className="flex-nowrap font-[600] text-[14px]">Casual Shirt for Men</h2>
                                <p className='text-[14px] font-[400]'>$200</p>
                                <div className="mb-[2px] border-t-2 border-white w-[90%]"></div>
                                <p className="text-[12px] font-[400]">1 unit left</p>
                            </div>
                            <Link to='/CartPage'>
                                <button className="lg:w-[124px] w-[100px]  h-fit justify-center items-center bg-white mt-3 md:w-[124px] px-2 py-2 rounded-2xl flex flex-row gap-1 text-[12px] font-OpenSans text-black">
                                    Add to cart  
                                    <img 
                                    src={CartIcon}
                                    alt='Cart-icon'
                                    className='md:w-[20px] w-[15px] h-[15px] md:h-[20px]'
                                    />
                                </button>
                            </Link>
                        </div> 
                    </div>
                </div>
                <div className="flex flex-col w-[100%] h-[352px] rounded-2xl relative overflow-hidden">
                    <div className="flex flex-row w-full h-[72%] bg-gray-400" style={{ backgroundImage: `url(${Bgstreetguywears})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                        <div className='bg-black absolute inset-x-0 bottom-0 flex pt-10 px-4'>
                            <div className="flex flex-col text-left text-white w-[350px]">
                                <h2 className="flex-nowrap font-[600] text-[14px]">Street Fashion Wear</h2>
                                <p className='text-[14px] font-[400]'>$200</p>
                                <div className="mb-[2px] border-t-2 border-white w-[90%]"></div>
                                <p className="text-[12px] font-[400]">1 unit left</p>
                            </div>
                            <Link to='/CartPage'>
                                <button className="lg:w-[124px] w-[100px]  h-fit justify-center items-center bg-white mt-3 md:w-[124px] px-2 py-2 rounded-2xl flex flex-row gap-1 text-[12px] font-OpenSans text-black">
                                    Add to cart  
                                    <img 
                                    src={CartIcon}
                                    alt='Cart-icon'
                                    className='md:w-[20px] w-[15px] h-[15px] md:h-[20px]'
                                    />
                                </button>
                            </Link>
                        </div> 
                    </div>
                </div>
                <div className="flex flex-col w-[100%] h-[352px] rounded-2xl relative overflow-hidden">
                    <div className="flex flex-row w-full h-[72%] bg-gray-400" style={{ backgroundImage: `url(${BgManwear})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                        <div className='bg-black absolute inset-x-0 bottom-0 flex pt-10 px-4'>
                            <div className="flex flex-col text-left text-white w-[350px]">
                                <h2 className="flex-nowrap font-[600] text-[14px]">Cooperate Office Shirt</h2>
                                <p className='text-[14px] font-[400]'>$200</p>
                                <div className="mb-[2px] border-t-2 border-white w-[90%]"></div>
                                <p className="text-[12px] font-[400]">1 unit left</p>
                            </div>
                            <Link to='/CartPage'>
                                <button className="lg:w-[124px] w-[100px]  h-fit justify-center items-center bg-white mt-3 md:w-[124px] px-2 py-2 rounded-2xl flex flex-row gap-1 text-[12px] font-OpenSans text-black">
                                    Add to cart  
                                    <img 
                                    src={CartIcon}
                                    alt='Cart-icon'
                                    className='md:w-[20px] w-[15px] h-[15px] md:h-[20px]'
                                    />
                                </button>
                            </Link>
                        </div> 
                    </div>
                </div>
                <div className="flex flex-col w-[100%] h-[352px] rounded-2xl relative overflow-hidden">
                    <div className="flex flex-row w-full h-[72%] bg-gray-400" style={{ backgroundImage: `url(${BgofficeWears})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                        <div className='bg-black absolute inset-x-0 bottom-0 flex pt-10 px-4'>
                            <div className="flex flex-col text-left text-white w-[350px]">
                                <h2 className="flex-nowrap font-[600] text-[14px]">Cooperate Office Shirt</h2>
                                <p className='text-[14px] font-[400]'>$200</p>
                                <div className="mb-[2px] border-t-2 border-white w-[90%]"></div>
                                <p className="text-[12px] font-[400]">1 unit left</p>
                            </div>
                            <Link to='/CartPage'>
                                <button className="lg:w-[124px] w-[100px]  h-fit justify-center items-center bg-white mt-3 md:w-[124px] px-2 py-2 rounded-2xl flex flex-row gap-1 text-[12px] font-OpenSans text-black">
                                    Add to cart  
                                    <img 
                                    src={CartIcon}
                                    alt='Cart-icon'
                                    className='md:w-[20px] w-[15px] h-[15px] md:h-[20px]'
                                    />
                                </button>
                            </Link>
                        </div> 
                    </div>
                </div>
                <div className="flex flex-col w-[100%] h-[352px] rounded-2xl relative overflow-hidden">
                    <div className="flex flex-row w-full h-[72%] bg-gray-400" style={{ backgroundImage: `url(${BgInnerShirt})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                        <div className='bg-black absolute inset-x-0 bottom-0 flex pt-10 px-4'>
                            <div className="flex flex-col text-left text-white w-[350px]">
                                <h2 className="flex-nowrap font-[600] text-[14px]">Casual-Cooperate Wear</h2>
                                <p className='text-[14px] font-[400]'>$200</p>
                                <div className="mb-[2px] border-t-2 border-white w-[90%]"></div>
                                <p className="text-[12px] font-[400]">1 unit left</p>
                            </div>
                            <Link to='/CartPage'>
                                <button className="lg:w-[124px] w-[100px] h-fit justify-center items-center bg-white mt-3 md:w-[124px] px-2 py-2 rounded-2xl flex flex-row gap-1 text-[12px] font-OpenSans text-black">
                                    Add to cart  
                                    <img 
                                    src={CartIcon}
                                    alt='Cart-icon'
                                    className='md:w-[20px] w-[15px] h-[15px] md:h-[20px]'
                                    />
                                </button>
                            </Link>
                        </div> 
                    </div>
                </div>
                <div className="flex flex-col w-[100%] h-[352px] rounded-2xl relative overflow-hidden">
                    <div className="flex flex-row w-full h-[72%] bg-gray-400" style={{ backgroundImage: `url(${BgsweatTop})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                        <div className='bg-black absolute inset-x-0 bottom-0 flex pt-10 px-4'>
                            <div className="flex flex-col text-left text-white w-[350px]">
                                <h2 className="flex-nowrap font-[600] text-[14px]">Sweat Shirt</h2>
                                <p className='text-[14px] font-[400]'>$200</p>
                                <div className="mb-[2px] border-t-2 border-white w-[90%]"></div>
                                <p className="text-[12px] font-[400]">1 unit left</p>
                            </div>
                            <Link to='/CartPage'>
                                <button className="lg:w-[124px] w-[100px]  h-fit justify-center items-center bg-white mt-3 md:w-[124px] px-2 py-2 rounded-2xl flex flex-row gap-1 text-[12px] font-OpenSans text-black">
                                    Add to cart  
                                    <img 
                                    src={CartIcon}
                                    alt='Cart-icon'
                                    className='md:w-[20px] w-[15px] h-[15px] md:h-[20px]'
                                    />
                                </button>
                            </Link>
                        </div> 
                    </div>
                </div>
                <div className="flex flex-col w-[100%] h-[352px] rounded-2xl relative overflow-hidden">
                    <div className="flex flex-row w-full h-[72%] bg-gray-400" style={{ backgroundImage: `url(${BgvintageShirt})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                        <div className='bg-black absolute inset-x-0 bottom-0 flex pt-10 px-4'>
                            <div className="flex flex-col text-left text-white w-[350px]">
                                <h2 className="flex-nowrap font-[600] text-[14px]">Vintage Shirt</h2>
                                <p className='text-[14px] font-[400]'>$200</p>
                                <div className="mb-[2px] border-t-2 border-white w-[90%]"></div>
                                <p className="text-[12px] font-[400]">1 unit left</p>
                            </div>
                            <Link to='/CartPage'>
                                <button className="lg:w-[124px] w-[100px]  h-fit justify-center items-center bg-white mt-3 md:w-[124px] px-2 py-2 rounded-2xl flex flex-row gap-1 text-[12px] font-OpenSans text-black">
                                    Add to cart  
                                    <img 
                                    src={CartIcon}
                                    alt='Cart-icon'
                                    className='md:w-[20px] w-[15px] h-[15px] md:h-[20px]'
                                    />
                                </button>
                            </Link>
                        </div> 
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default MenWearsSection