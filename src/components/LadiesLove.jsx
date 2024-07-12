import Bgladiessuit from '../assets/images/ladiessuit.jpg'
import CartIcon from '../assets/images/cartIcon.png'
import BgblackDinner from '../assets/images/blackDinner.jpg'
import BgweastBand from '../assets/images/weastBand.jpg'
import Bgjeansweart from '../assets/images/jeansweart.jpg'
import BgtopWears from '../assets/images/topWears.jpg'
import BgredTop from '../assets/images/red-top.jpg'
import Bgblackinner from '../assets/images/black132313.jpg'
import Bgladieswears from '../assets/images/ladieswears.jpg'


import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

function LadiesLoveSection() {

    const dispatch = useDispatch();

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
    };

    const products = [
        { id: 1, name: 'Pink Lady’s Coat', price: 200, image: Bgladiessuit },
        { id: 2, name: 'Ladies Baggy Sweat Wear', price: 200, image: Bgladieswears },
        { id: 3, name: 'Black Dinner Gown', price: 200, image: BgblackDinner },
        { id: 4, name: 'Waist Belt for Ladies', price: 800, image: BgweastBand },
        { id: 5, name: 'Knitted Top', price: 200, image: BgtopWears },
        { id: 6, name: 'Jean & Sweater', price: 200, image: Bgjeansweart },
        { id: 7, name: 'Pink Lady’s Coat', price: 200, image: BgredTop },
        { id: 8, name: 'Light Ladies Top', price: 800, image: Bgblackinner },
    ];

    return (
        <div className="flex flex-col mx-auto justify-start items-start my-20 overflow-hidden">
            <div className="flex flex-column flex-row justify-between items-center w-full my-8">
                <h1 className="font-[600] text-[25px] md:text-[40px] text-black">Ladies Love</h1>
                <a className="font-semibold xl:flex px-3 py-1 items-center lg:flex border-2 rounded-xl border-black" href="#">See More</a>
            </div>
            <div className="w-full grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 gap-x-5 gap-y-5">
                {products.map((product) => (
                    <div key={product.id} className="flex flex-col w-[100%] h-[352px] rounded-2xl relative overflow-hidden">
                        <div className="flex flex-row w-full h-[72%] bg-gray-400" 
                            style={{
                                backgroundImage: `url(${product.image})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: '#fff',
                                overflow: 'hidden',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                            }}
                        
                        >
                            <div className='bg-black absolute inset-x-0 bottom-0 flex pt-10 px-4'>
                                <div className="flex flex-col text-left text-white w-[300px]">
                                    <h2 className="font-[600] text-[14px]">{product.name}</h2>
                                    <p className='text-[14px] font-[400]'>${product.price}</p>
                                    <div className="mb-[2px] border-t-2 border-white w-[90%]"></div>
                                    <p className="text-[12px] font-[400]">1 unit left</p>
                                </div>
                                <div>
                                    <button onClick={() => handleAddToCart(product)} className="lg:w-[124px] w-[100px] h-fit justify-center items-center bg-white mt-3 md:w-[124px] px-2 py-2 rounded-2xl flex flex-row gap-1 text-[12px] text-black">  
                                        Add to cart  
                                        <img 
                                            src={CartIcon}
                                            alt='Cart-icon'
                                            className='md:w-[20px] w-[15px] h-[15px] md:h-[20px]'
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
    )
}

export default LadiesLoveSection