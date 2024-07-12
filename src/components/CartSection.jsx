import React, { useState } from 'react';
import ArrowLeft from '../assets/images/arrowleft.png'
import { Link } from "react-router-dom"
import Modal from './Cart/Modal';
import PaymentSuccessful from './ConfirmPayment/PaymentSuccessful';
import BgredTop from '../assets/images/red-top.jpg'
import BgManwear from '../assets/images/mens111.jpg'

function CartSection() {

    const [showModal, setShowModal] = React.useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const [showSuccess, setShowSuccess] = useState(false);

    const handlePayment = () => {
        setTimeout(() => {
        setShowSuccess(true);
        }, 1000);
    };

    const handleClose = () => {
        setShowSuccess(false);
    };


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
                    <p className="flex xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-semibold">Shopping Cart</p>
                    <div className="w-[100%] flex xl:flex-row flex-col md:flex-row xl:justify xl:items-end md:items-end sm:items-start xl:gap-6 border border-gray-300 rounded-xl px-12 py-5 mt-4 shadow-md">
                        <div className="flex xl:flex-row md:flex-row flex-col gap-4 justify-center items-center relative">
                            <img 
                                src={BgManwear}
                                alt='Bgred-top'
                                className='md:w-[250px] w-[160px] h-[150px] md:h-[234px] mr-4'
                            />
                            <button className="absolute top-2 left-2 bg-white rounded-full px-2 py-1 text-black text-[12px]">X</button>
                            <div className="flex flex-col gap-4 py-5 text-left">
                                <h1 className="xl:text-[28px] text-[20px] font-bold">Cooperate Office Shirt</h1>
                                <p className="text-base font-semibold">Eligible for free shipping</p>
                                <p className="font-OpenSans text-gray-400">Price: <span className="font-semibold text-black">$200</span></p>
                                <div className="flex flex-row gap-1">
                                    <button className="py-1 px-3 rounded-full justify-center items-center flex bg-black text-white">-</button>
                                    <div className="py-1 px-3 rounded-full justify-center items-center flex bg-black text-white">
                                        <p> 1</p>
                                    </div>
                                    <button className="py-1 px-3 rounded-full justify-center items-center flex bg-black text-white">+</button>
                                </div>
                                <p className="text-gray-400 text-sm">Total: $420.00</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 ml-6 mb-2">
                            <p className="text-gray-400 text-sm">Subtotal</p>
                            <p className="font-semibold text-black">$420.00</p>
                        </div>
                    </div>
                    <div className="w-[100%] flex xl:flex-row flex-col md:flex-row xl:justify xl:items-end md:items-end sm:items-start xl:gap-6 border border-gray-300 rounded-xl px-12 py-5 mt-4 shadow-md">
                        <div className="flex xl:flex-row md:flex-row flex-col gap-4 justify-center items-center relative">
                            <img 
                                src={BgredTop}
                                alt='Bgred-top'
                                className='md:w-[250px] w-[160px] h-[150px] md:h-[234px] mr-4'
                            />
                            <button className="absolute top-2 left-2 bg-white rounded-full px-2 py-1 text-black text-[12px]">X</button>
                            <div className="flex flex-col gap-4 py-5 text-left">
                                <h1 className="xl:text-[28px] text-[20px] font-bold">Pink Lady’s Coat</h1>
                                <p className="text-base font-semibold">Eligible for free shipping</p>
                                <p className="font-OpenSans text-gray-400">Price: <span className="font-semibold text-black">$200</span></p>
                                <div className="flex flex-row gap-1">
                                    <button className="py-1 px-3 rounded-full justify-center items-center flex bg-black text-white">-</button>
                                    <div className="py-1 px-3 rounded-full justify-center items-center flex bg-black text-white">
                                        <p> 1</p>
                                    </div>
                                    <button className="py-1 px-3 rounded-full justify-center items-center flex bg-black text-white">+</button>
                                </div>
                                <p className="text-gray-400 text-sm">Total: $420.00</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 ml-6 mb-2">
                            <p className="text-gray-400 text-sm">Subtotal</p>
                            <p className="font-semibold text-black">$420.00</p>
                        </div>
                    </div>
                    <div className="w-[100%] flex xl:flex-row flex-col md:flex-row xl:justify xl:items-end md:items-end sm:items-start xl:gap-6 border border-gray-300 rounded-xl px-12 py-5 mt-4 shadow-md">
                        <div className="flex flex-col gap-2 max-w-[362px]">
                            <div className="flex flex-row justify-between px-2 items-center">
                                <p className="font-OpenSans">Subtotal</p>
                                <p className="font-bold text-black">$0.00</p>
                            </div>
                            <div className="flex flex-row justify-between px-2 items-center mb-3">
                                <p className="font-OpenSans">Delivery</p><p className="font-bold text-black">$0.00</p>
                            </div>
                            <div className="border-t w-full border-black"></div>
                            <div className="flex flex-row justify-between px-2 items-center">
                                <p className="font-OpenSans">Total</p>
                                <p className="font-bold text-black">$0.00</p>
                            </div>
                            <button onClick={handleOpenModal} className="w-full text-xl px-6 py-3 flex justify-center items-center text-white rounded-lg bg-black">Pay $0.00</button>
                        </div>
                    </div>
                </div>
                <Modal show={showModal} handleClose={handleCloseModal} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
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
                                <button onClick={handlePayment} type="submit" className="px-4 py-2 bg-black text-white rounded-md mt-4 mx-auto">Pay Now</button>
                            </div>
                        </form>
                    </div>
                </Modal>
                <PaymentSuccessful show={showSuccess} handleClose={handleClose} />
            </div>
        </>
    )
}

export default CartSection
