import BgManwear from '../assets/images/mens111.jpg'
import CartIcon from '../assets/images/cartIcon.png'
import Bgstreetguywears from '../assets/images/streetguywears.jpg'
import BgofficeWears from '../assets/images/officeWears.jpg'
import BgInnerShirt from '../assets/images/InnerShirt.jpg'
import BgJeansTop from '../assets/images/menjeantop.jpg'
import BgsweatTop from '../assets/images/sweatTop.jpg'
import BgvintageShirt from '../assets/images/vintageShirt.jpg'
import BgroundneckJeans from '../assets/images/roundneckTop.jpg'


import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';


function MenWearsSection() {

    const dispatch = useDispatch();

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
    };

    const products = [
        { id: 1, name: 'Men Jean Jacket', price: 200, image: BgJeansTop },
        { id: 2, name: 'Casual Shirt for Men', price: 200, image: BgroundneckJeans },
        { id: 3, name: 'Street Fashion Wear', price: 200, image: Bgstreetguywears },
        { id: 4, name: 'Cooperate Office Shirt', price: 800, image: BgManwear },
        { id: 5, name: 'Cooperate Office Shirt', price: 200, image: BgofficeWears },
        { id: 6, name: 'Casual-Cooperate Wear', price: 200, image: BgInnerShirt },
        { id: 7, name: 'Sweat Shirt', price: 200, image: BgsweatTop },
        { id: 8, name: 'Vintage Shirt', price: 800, image: BgvintageShirt },
    ];


    return (
        <div className="flex flex-col mx-auto justify-start items-start my-20 overflow-hidden">
            <div className="flex flex-column flex-row justify-between items-center w-full my-8">
                <h1 className="font-[600] text-[25px] md:text-[40px] text-black">For Men</h1>
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

export default MenWearsSection