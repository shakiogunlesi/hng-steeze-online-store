
import { useSelector } from 'react-redux';
import CartIcon from '../assets/images/cartIcon2.png';
import LogoutIcon from '../assets/images/loginoutIcon.png';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <nav className="bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex flex-column flex-row justify-between items-center w-full">
                        <div className="flex-shrink-0">
                            <Link to="/" >
                                <h1 className="text-black md:text-[36px] text-[25px] font-[700]">SteeZers</h1>
                            </Link>
                        </div>
                        <div className="hidden md:block w-fit flex items-center">
                            <form className="relative">
                                <button className="absolute xl:left-3 -translate-y-1/2 top-1/2 p-1">
                                <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search" className="w-5 h-5 text-gray-700">
                                <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                </button>
                                <input className="xl:w-[569px] sm:placeholder:left-2 rounded-full xl:px-[19px] px-[19px] w-[400px] h-[50px] xl:py-[9px] border-2 border-transparent focus:outline-none focus:border-gray-500 placeholder-gray-400 transition-all duration-300 shadow-md" placeholder=" Search..." required="" type="text" />
                                <button type="reset" className="absolute xl:right-3 right-4 -translate-y-1/2 top-1/2 p-1"><svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg></button>
                            </form>
                        </div>
                        <div className="">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link to="/CartPage" className="cursor-pointer flex-row flex items-center mr-3">
                                    <p className="text-white text-[16px] justify-center flex items-center flex-row gap-2">Cart 
                                        <img 
                                        src={CartIcon}
                                        alt='Cart-Icon'
                                        className='md:w-[18.79px] w-[15px] h-[15px] md:h-[18px]'
                                        />
                                        <span className='text-white bg-red-500 pr-[0.5px] w-[25px] h-[25px] rounded-full cartButton'>({cartCount})</span>
                                    </p>
                                </Link>
                                <a href="/" className="cursor-pointer flex-row flex items-center gap-1">
                                    <p className="text-white text-[16px] justify-center flex items-center flex-row gap-2">Logout
                                        <img 
                                        src={LogoutIcon}
                                        alt='Logout-Icon'
                                        className='md:w-[18.79px] w-[15px] h-[15px] md:h-[18px]'
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
};

export default Navbar