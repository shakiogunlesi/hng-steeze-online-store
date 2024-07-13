import { useState } from 'react';
import ArrowLeft from '../assets/images/arrowleft.png';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, clearCart } from '../features/cart/cartSlice';
import Modal from './Cart/Modal';

function CartSection() {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const [isConfirmModalOpen, setConfirmModalOpen] = useState(false);
    const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);

    const handlePurchase = () => {
        setConfirmModalOpen(true);
    };

    const handleConfirmPurchase = () => {
        setConfirmModalOpen(false);
        setSuccessModalOpen(true);
        dispatch(clearCart());
    };

    const handleSuccessModalClose = () => {
        setSuccessModalOpen(false);
    };

    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="flex flex-col mx-auto justify-start items-start my-20 overflow-hidden">
            <Link to="/" className="flex flex-row gap-1">
                <img 
                    src={ArrowLeft}
                    alt='Arrow-left'
                    className='md:w-[20px] w-[15px] h-[15px] md:h-[20px] pt-2'
                />
                <Link to="/" >
                    <p className="text-[20px]">Return to store</p>
                </Link>
            </Link>
            <div className="w-full flex flex-col justify-start items-start mt-6">
                <p className="flex xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-semibold">Shopping Cart</p>
                <div className="container mx-auto mt-5 p-5 rounded-lg">
                    <h1 className="text-2xl font-bold mb-5">Cart</h1>
                    {cartItems.length === 0 ? (
                        <p className="text-gray-500">Your cart is empty.</p>
                    ) : (
                        <div className="cart-items">
                            {cartItems.map((item) => (
                                <div key={item.id} className="cart-item flex justify-between items-center mb-3 p-3 border-b">
                                    <div className="cart-item-info flex items-center">
                                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                                        <div className="ml-4">
                                            <h2 className="text-lg font-semibold">{item.name}</h2>
                                            <p className="text-gray-500">${item.price}</p>
                                            <div className="flex items-center mt-2">
                                                <button
                                                    className="px-2 py-1 bg-gray-200 rounded"
                                                    onClick={() => dispatch(removeFromCart(item))}
                                                >
                                                    -
                                                </button>
                                                <span className="mx-2">{item.quantity}</span>
                                                <button
                                                    className="px-2 py-1 bg-gray-200 rounded"
                                                    onClick={() => dispatch(addToCart(item))}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-lg font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                </div>
                            ))}
                            <div className="cart-total mt-5 text-right">
                                <h2 className="text-xl font-bold">Total: ${totalAmount.toFixed(2)}</h2>
                            </div>
                            <div className="cart-actions mt-5 flex justify-end">
                                <button
                                    className="px-5 py-2 bg-blue-500 text-white rounded mr-2"
                                    onClick={handlePurchase}
                                >
                                    Proceed to Checkout
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Modal open={isConfirmModalOpen} onClose={() => setConfirmModalOpen(false)} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-[#F2F2F3] justify-center items-center p-8 xl:px-12 md:px-10 px-8 rounded-md flex flex-col">
                    <h2 className="text-2xl font-bold mb-4">Payment</h2>
                    <form className="space-y-4 flex flex-col xl:justify-start justify-center xl:items-start w-full items-center ">
                        <div className="flex flex-col w-full">
                            <label htmlFor="email" className="font-OpenSans font-semibold">Email <span className="text-red-600">*</span></label>
                            <input id="email" placeholder="Email" className="border rounded-md p-2" type="email" value="" />
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="cardHolderName" className="font-OpenSans font-semibold">Card Number <span className="text-red-600">*</span></label>
                            <input id="cardHolderName" placeholder="Enter card holder’s name" className="border rounded-md p-2" type="text" value="" />
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="cardNumber" className="font-OpenSans font-semibold">Card Number <span className="text-red-600">*</span></label>
                            <input id="cardNumber" placeholder="0000 0000 0000 0000" className="border rounded-md p-2 " type="text" value="" />
                        </div>
                            
                        <div className=" flex flex-row xl:gap-10 justify-between items-center gap-5 w-full">
                            <div className="flex flex-col xl:w-full  w-[150px] ">
                                <label htmlFor="expirationDate" className="font-OpenSans font-semibold sm:text-[14px]">Expiration Date <span className="text-red-600">*</span></label>
                                <input id="expirationDate" placeholder="14/04" className="border rounded-md p-2 " type="text" value="" />
                            </div>
                            <div className="flex flex-col xl:w-full w-[150px] ">
                                <label htmlFor="cvvCode" className="font-OpenSans font-semibold">CVV Code <span className="text-red-600">*</span></label>
                                <input placeholder="***" id="cvvCode" className="border rounded-md p-2 " type="text" value="" />
                            </div>
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="deliveryAddress" className="font-OpenSans font-semibold">Delivery Address <span className="text-red-600">*</span></label>
                            <input id="deliveryAddress" placeholder="Enter Address" className="border rounded-md p-2" type="text" value="" />
                        </div>
                        <div className="flex justify-between flex-col w-full px-14">
                            <div className="flex flex-row w-full justify-between gap-1 mb-2">
                                <p className="text-gray-400 text-sm">Subtotal:</p>
                                <p className="font-semibold text-black">$0.00</p>
                            </div>
                            <div className="flex flex-row w-full justify-between gap-1 mb-2">
                                <p className="text-gray-400 text-sm">VAT:</p>
                                <p className="font-semibold text-black">$0.00</p>
                            </div>
                            <div className="flex flex-row w-full justify-between gap-1 mb-2">
                                <p className="text-gray-400 text-sm">Total:</p>
                                <p className="font-semibold text-black">$0.00</p>
                            </div>
                        </div>
                        <div className=" flex flex-row justify-center items-center w-full  ">
                            <button onClick={() => setConfirmModalOpen(false)} type="submit" className="px-5 py-2 bg-gray-300 rounded mr-2">
                                Cancel
                            </button>
                            <button className="px-4 py-2 bg-black text-white rounded-md mt-4 mx-auto" onClick={handleConfirmPurchase}>
                                Pay Now
                            </button>
                        </div>
                    </form>
                </div>
            </Modal>
            <Modal open={isSuccessModalOpen} onClose={handleSuccessModalClose} center>
                <div className="p-5">
                    <h2 className="text-xl font-bold mb-4">Purchase Successful</h2>
                    <p>Thank you for your purchase!</p>
                    <div className="mt-5 flex justify-end">
                        <button className="px-5 py-2 bg-blue-500 text-white rounded" onClick={handleSuccessModalClose}>
                            Close
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default CartSection;

