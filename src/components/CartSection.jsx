import { useState } from 'react';
import ArrowLeft from '../assets/images/arrowleft.png';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart, incrementQuantity, decrementQuantity } from '../features/cart/cartSlice';
import { Modal, Button } from '@mantine/core';  // Adjust import if you are using a different modal library

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
                <p className="text-[20px]">Return to store</p>
            </Link>
            <div className="w-full flex flex-col justify-start items-start mt-6">
                <p className="flex md:text-5xl text-3xl font-[600]">Shopping Cart</p>
                <div className="container mx-auto mt-5 md:p-5 rounded-lg">
                    {cartItems.length === 0 ? (
                        <p className="text-gray-500">Your cart is empty.</p>
                    ) : (
                        <div className="cart-items">
                            {cartItems.map((item) => (
                                <div key={item.id} className="cart-item flex justify-between items-center mb-3 border-b">
                                    <div className="cart-item-info relative w-full flex flex-col md:flex-row xl:justify xl:items-end md:items-end sm:items-start xl:gap-6 border border-gray-300 shadow-md rounded-xl md:px-20 md:py-5 px-2 py-2 mt-4">
                                        <img src={item.image} alt={item.name} className="md:w-[250px] md:h-[234px] w-[350px] h-[300px] object-cover rounded-md" />
                                        <button
                                            className="absolute top-2 left-2 bg-white rounded-full px-2 py-1 text-black text-[12px]"
                                            onClick={() => dispatch(removeFromCart({ id: item.id }))}  // Correct payload structure
                                        >
                                            X
                                        </button>
                                        <div className="md:ml-12 md:mr-16 ml-2 mr-2 text-left md:w-[350px]">
                                            <h2 className="text-[28px] font-[600] leading-[33.6px] mb-4">{item.name}</h2>
                                            <p className="text-gray-600 text-[18px] font-[400] leading-[21.6px] mb-4">Eligible for free shipping</p>
                                            <p className="text-gray-600 text-[18px] font-[400] leading-[21.6px] mb-4"><span className='text-gray-500'>Price:</span> ${item.price}</p>
                                            <p className="text-gray-600 text-[18px] font-[400] leading-[21.6px] mb-4">Quantity</p>
                                            <div className="flex items-center mt-2">
                                                <button
                                                    className="px-2 py-2 bg-black text-white rounded-full"
                                                    onClick={() => dispatch(decrementQuantity(item.id))}  // Correct payload structure
                                                >
                                                    -
                                                </button>
                                                <span className="mx-2 px-2 py-2 bg-black text-white rounded-[16px]">{item.quantity} unit</span>
                                                <button
                                                    className="px-2 py-2 bg-black text-white rounded-full"
                                                    onClick={() => dispatch(incrementQuantity(item.id))}  // Correct payload structure
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div>
                                            <p className='text-[18px] font-[400] leading-[21.6px] text-gray-500 text-left mt-4'>Subtotal:</p>
                                            <p className="text-[28px] font-[600] leading-[33.6px]">${(item.price * item.quantity).toFixed(2)}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="cart-item-info w-full md:flex-row xl:justify xl:items-end md:items-end sm:items-start xl:gap-6 border border-gray-300 shadow-md rounded-xl md:px-20 md:py-5 px-2 py-2 mt-4">
                                <p className="flex md:text-5xl text-3xl font-[600]">Price Details</p>
                                <div className='text-left md:pl-20 mt-16'>
                                    <div className="cart-total mt-5 mb-4 flex flex-column flex-row md:w-[362px] md:gap-[200px] gap-[100px]">
                                        <div>
                                            <h2 className="text-[24px] font-[600] text-gray-500 mb-2 leading-[33.6px]">Subtotal: </h2>
                                        </div>
                                        <div>
                                            <h2 className="text-[28px] font-[600] mb-2 leading-[33.6px]">${totalAmount.toFixed(2)}</h2>
                                        </div>
                                    </div>
                                    <div className="border-t-2 border-black md:w-[43%]"></div>
                                    <div className="cart-actions mt-5">
                                        <div className="cart-total mt-5 mb-4 flex flex-column flex-row md:w-[362px] md:gap-[240px] gap-[140px]">
                                            <div>
                                                <h2 className="text-[24px] font-[600] text-gray-500 mb-2 leading-[33.6px]">Total: </h2>
                                            </div>
                                            <div>
                                                <h2 className="text-[28px] font-[600] mb-2 leading-[33.6px]">${totalAmount.toFixed(2)}</h2>
                                            </div>
                                        </div>
                                        <button
                                            className="px-5 py-2 bg-black text-white rounded-md mr-2 md:w-[420px]"
                                            onClick={handlePurchase}
                                        >
                                            Pay ${totalAmount.toFixed(2)}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Modal opened={isConfirmModalOpen} onClose={() => setConfirmModalOpen(false)} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-[#F2F2F3] justify-center items-center p-8 xl:px-12 md:px-10 px-8 rounded-md flex flex-col">
                    <h2 className="text-2xl font-bold mb-4">Payment</h2>
                    <form className="space-y-4 flex flex-col xl:justify-start justify-center xl:items-start w-full items-center">
                        <div className="flex flex-col w-full">
                            <label htmlFor="email" className="font-OpenSans font-semibold">Email <span className="text-red-600">*</span></label>
                            <input id="email" placeholder="Email" className="border rounded-md p-2" type="email" />
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="cardHolderName" className="font-OpenSans font-semibold">Card Holder’s Name <span className="text-red-600">*</span></label>
                            <input id="cardHolderName" placeholder="Enter card holder’s name" className="border rounded-md p-2" type="text" />
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="cardNumber" className="font-OpenSans font-semibold">Card Number <span className="text-red-600">*</span></label>
                            <input id="cardNumber" placeholder="0000 0000 0000 0000" className="border rounded-md p-2 " type="text" />
                        </div>
                        <div className="flex flex-row xl:gap-10 justify-between items-center gap-5 w-full">
                            <div className="flex flex-col xl:w-full w-[150px] ">
                                <label htmlFor="expirationDate" className="font-OpenSans font-semibold sm:text-[14px]">Expiration Date <span className="text-red-600">*</span></label>
                                <input id="expirationDate" placeholder="14/04" className="border rounded-md p-2 " type="text" />
                            </div>
                            <div className="flex flex-col xl:w-full w-[150px] ">
                                <label htmlFor="cvvCode" className="font-OpenSans font-semibold">CVV Code <span className="text-red-600">*</span></label>
                                <input placeholder="***" id="cvvCode" className="border rounded-md p-2 " type="text" />
                            </div>
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="deliveryAddress" className="font-OpenSans font-semibold">Delivery Address <span className="text-red-600">*</span></label>
                            <input id="deliveryAddress" placeholder="Enter Address" className="border rounded-md p-2" type="text" />
                        </div>
                        <div className="flex justify-between flex-col w-full px-14">
                            <div className="flex flex-row w-full justify-between gap-1 mb-2">
                                <p className="text-gray-400 text-sm">Subtotal:</p>
                                <p className="font-semibold text-black">${totalAmount.toFixed(2)}</p>
                            </div>
                            <div className="flex flex-row w-full justify-between gap-1 mb-2">
                                <p className="text-gray-400 text-sm">VAT:</p>
                                <p className="font-semibold text-black">$0.00</p>
                            </div>
                            <div className="flex flex-row w-full justify-between gap-1 mb-2">
                                <p className="text-gray-400 text-sm">Total:</p>
                                <p className="font-semibold text-black">${totalAmount.toFixed(2)}</p>
                            </div>
                        </div>
                        <div className="flex flex-row justify-center items-center w-full">
                            <button onClick={() => setConfirmModalOpen(false)} type="button" className="px-5 py-2 bg-gray-300 rounded mr-2">
                                Cancel
                            </button>
                            <button className="px-4 py-2 bg-black text-white rounded-md mt-4 mx-auto" onClick={handleConfirmPurchase}>
                                Pay Now
                            </button>
                        </div>
                    </form>
                </div>
            </Modal>
            <Modal opened={isSuccessModalOpen} onClose={handleSuccessModalClose} centered>
                <div className="p-5">
                    <h2 className="text-xl font-bold mb-4">Purchase Successful</h2>
                    <p>Thank you for your purchase!</p>
                    <div className="mt-5 flex justify-end">
                        <Button className="px-5 py-2 bg-blue-500 text-white rounded" onClick={handleSuccessModalClose}>
                            Close
                        </Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default CartSection;
