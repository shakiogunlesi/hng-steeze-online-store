import BgManwear from '../assets/images/mens111.jpg'
import CartIcon from '../assets/images/cartIcon.png'
import BgblackInner from '../assets/images/black132313.jpg'
import BgredTop from '../assets/images/red-top.jpg'
import BgJacket from '../assets/images/jacket-wears.jpg'
import BgMeanJeans from '../assets/images/menjean.jpg'
import BgJeansTop from '../assets/images/menjeantop.jpg'
import BgroundneckJeans from '../assets/images/roundneckTop.jpg'
import Bgladieswears from '../assets/images/ladieswears.jpg'
import { Link } from 'react-router-dom';



function DailyPickSection() {
    return (
        <>
        <div className="flex flex-col mx-auto justify-start items-start my-20 overflow-hidden">
            <div className="flex flex-column flex-row justify-between items-center w-full my-8">
                <h1 className="font-semibold text-[25px] md:text-[45px] text-black">Daily Pick</h1>
                <a className="font-semibold  xl:flex px-3 py-1 items-center lg:flex border-2 rounded-xl border-black" href="#">See More</a>
            </div>
            <div className="w-full grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 gap-x-5 gap-y-5">
                <div className="flex flex-col w-[100%] h-[352px] rounded-2xl relative overflow-hidden">
                    <div className="flex flex-row w-full h-[70%] bg-gray-400" style={{ backgroundImage: `url(${BgManwear})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                        <div className='bg-black absolute inset-x-0 bottom-0 flex pt-10 px-4'>
                            <div className="flex flex-col text-left text-white md:w-[350px] w-full">
                                <h2 className="flex-nowrap font-semibold text-[15px]">Cooperate Office Shirt</h2>
                                <p>$700</p>
                                <div className="mb-[2px] border-t-2 border-white w-[90%]"></div>
                                <p className="">1 unit left</p>
                            </div>
                            <div>
                                <Link to='/CartPage'>
                                    <button className="w-full XS:W-[200px]  h-fit justify-center items-center bg-white mt-4 px-2 py-2 rounded-2xl flex flex-row gap-1 text-[12px] font-OpenSans text-black">  
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
            
                <div className="flex flex-col w-[100%] h-[352px] rounded-2xl relative overflow-hidden">
                    <div className="flex flex-row w-full h-[70%] bg-gray-400" style={{ backgroundImage: `url(${BgblackInner})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                        <div className='bg-black absolute inset-x-0 bottom-0 flex pt-10 px-4'>
                            <div className="flex flex-col text-left text-white md:w-[350px] w-full">
                                <h2 className="flex-nowrap font-semibold text-[15px]">Light Ladies Top</h2>
                                <p>$200</p>
                                <div className="mb-[2px] border-t-2 border-white w-[90%]"></div>
                                <p className="">1 unit left</p>
                            </div>
                            <Link to='/CartPage'>
                                <button className="w-full XS:W-[200px]  h-fit justify-center items-center bg-white mt-4 px-2 py-2 rounded-2xl flex flex-row gap-1 text-[12px] font-OpenSans text-black">
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
                    <div className="flex flex-row w-full h-[70%] bg-gray-400" style={{ backgroundImage: `url(${BgredTop})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                        <div className='bg-black absolute inset-x-0 bottom-0 flex pt-10 px-4'>
                            <div className="flex flex-col text-left text-white md:w-[350px] w-full">
                                <h2 className="flex-nowrap font-semibold text-[15px]">Pink Lady’s Coat</h2>
                                <p>$420</p>
                                <div className="mb-[2px] border-t-2 border-white w-[90%]"></div>
                                <p className="">1 unit left</p>
                            </div>
                            
                            <Link to='/CartPage'>
                                <button className="w-full XS:W-[200px]  h-fit justify-center items-center bg-white mt-4 px-2 py-2 rounded-2xl flex flex-row gap-1 text-[12px] font-OpenSans text-black">
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
                    <div className="flex flex-row w-full h-[70%] bg-gray-400" style={{ backgroundImage: `url(${BgJacket})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                        <div className='bg-black absolute inset-x-0 bottom-0 flex pt-10 px-4'>
                            <div className="flex flex-col text-left text-white md:w-[350px] w-full">
                                <h2 className="flex-nowrap font-semibold text-[15px]">Sweat Jacket</h2>
                                <p>$800</p>
                                <div className="mb-[2px] border-t-2 border-white w-[90%]"></div>
                                <p className="">1 unit left</p>
                            </div>
                            <Link to='/CartPage'>
                                <button className="w-full XS:W-[200px]  h-fit justify-center items-center bg-white mt-4 px-2 py-2 rounded-2xl flex flex-row gap-1 text-[12px] font-OpenSans text-black">
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
                    <div className="flex flex-row w-full h-[70%] bg-gray-400" style={{ backgroundImage: `url(${BgMeanJeans})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                        <div className='bg-black absolute inset-x-0 bottom-0 flex pt-10 px-4'>
                            <div className="flex flex-col text-left text-white md:w-[350px] w-full">
                                <h2 className="flex-nowrap font-semibold text-[15px]">Cooperate Office Shirt</h2>
                                <p>$200</p>
                                <div className="mb-[2px] border-t-2 border-white w-[90%]"></div>
                                <p className="">1 unit left</p>
                            </div>
                            <Link to='/CartPage'>
                                <button className="w-full XS:W-[200px]  h-fit justify-center items-center bg-white mt-4 px-2 py-2 rounded-2xl flex flex-row gap-1 text-[12px] font-OpenSans text-black">
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
                    <div className="flex flex-row w-full h-[70%] bg-gray-400" style={{ backgroundImage: `url(${BgJeansTop})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                        <div className='bg-black absolute inset-x-0 bottom-0 flex pt-10 px-4'>
                            <div className="flex flex-col text-left text-white md:w-[350px] w-full">
                                <h2 className="flex-nowrap font-semibold text-[15px]">Men Jean Jacket</h2>
                                <p>$200</p>
                                <div className="mb-[2px] border-t-2 border-white w-[90%]"></div>
                                <p className="">1 unit left</p>
                            </div>
                            <Link to='/CartPage'>
                                <button className="w-full XS:W-[200px]  h-fit justify-center items-center bg-white mt-4 px-2 py-2 rounded-2xl flex flex-row gap-1 text-[12px] font-OpenSans text-black">
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
                    <div className="flex flex-row w-full h-[70%] bg-gray-400" style={{ backgroundImage: `url(${BgroundneckJeans})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                        <div className='bg-black absolute inset-x-0 bottom-0 flex pt-10 px-4'>
                            <div className="flex flex-col text-left text-white md:w-[350px] w-full">
                                <h2 className="flex-nowrap font-semibold text-[15px]">Casual Shirt for Men</h2>
                                <p>$200</p>
                                <div className="mb-[2px] border-t-2 border-white w-[90%]"></div>
                                <p className="">1 unit left</p>
                            </div>
                            <Link to='/CartPage'>
                                <button className="w-full XS:W-[200px]  h-fit justify-center items-center bg-white mt-4 px-2 py-2 rounded-2xl flex flex-row gap-1 text-[12px] font-OpenSans text-black">
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
                    <div className="flex flex-row w-full h-[70%] bg-gray-400" style={{ backgroundImage: `url(${Bgladieswears})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                        <div className='bg-black absolute inset-x-0 bottom-0 flex pt-10 px-4'>
                            <div className="flex flex-col text-left text-white md:w-[350px] w-full">
                                <h2 className="flex-nowrap font-semibold text-[15px]">Ladies Baggy Sweat Wear</h2>
                                <p>$800</p>
                                <div className="mb-[2px] border-t-2 border-white w-[90%]"></div>
                                <p className="">1 unit left</p>
                            </div>
                            <Link to='/CartPage'>
                                <button className="w-full XS:W-[200px]  h-fit justify-center items-center bg-white mt-4 px-2 py-2 rounded-2xl flex flex-row gap-1 text-[12px] font-OpenSans text-black">
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

export default DailyPickSection