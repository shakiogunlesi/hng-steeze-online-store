import ArrowLeft from '../assets/images/arrowleft.png'
import { Link } from "react-router-dom"

function CartSection() {
    return (
        <>
            <div className="flex flex-col mx-auto justify-start items-start my-20 overflow-hidden">
                <Link to="/" className="flex flex-row gap-1">
                    <img 
                        src={ArrowLeft}
                        alt='Arrow-left'
                        className='md:w-[20px] w-[15px] h-[15px] md:h-[20px] pt-2'
                    />
                    <p className="text-[20px]">Return to store</p>
                </Link>
                <div className="w-full flex flex-col justify-start items-start mt-6">
                    <p className="flex xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-OpenSans font-semibold">Shopping Cart</p>
                    <div className="w-[100%] flex xl:flex-row flex-col md:flex-row xl:justify xl:items-end md:items-end sm:items-start xl:gap-6 border rounded-xl px-12 py-5 mt-4">
                        <div className="flex flex-col gap-2 max-w-[362px]">
                            <div className="flex flex-row justify-between px-2 items-center">
                                <p className="font-OpenSans">Subtotal</p>
                                <p className="font-bold text-black font-OpenSans">$0.00</p>
                            </div>
                            <div className="flex flex-row justify-between px-2 items-center mb-3">
                                <p className="font-OpenSans">Delivery</p><p className="font-bold text-black font-OpenSans">$0.00</p>
                            </div>
                            <div className="border-t w-full border-black"></div>
                            <div className="flex flex-row justify-between px-2 items-center">
                                <p className="font-OpenSans">Total</p>
                                <p className="font-bold text-black font-OpenSans">$0.00</p>
                            </div>
                            <button className="w-full font-OpenSans text-xl px-6 py-3 flex justify-center items-center text-white rounded-lg bg-black">Pay $0.00</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartSection
