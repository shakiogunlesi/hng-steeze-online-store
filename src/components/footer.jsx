import FacebookIcon from '../assets/images/facebookIcon.png'
import InstagramIcon from '../assets/images/instagramIcon.png'
import TwitterIcon from '../assets/images/twitterIcon.png'

const Footer = () => {
 
    return (
        <>
            <div className='my-10 rounded-[30px] py-10 md:px-16 px-6 bg-black flex gap-16 xl:flex-row lg:flex-row md:flex-row flex-col-reverse justify-between items-center mx-auto'>
                <div className=" flex md:flex-col flex-col-reverse items-start gap-4 justify-start">
                    <p className=" text-white md:text-[24px] text-[18px] font-[400]">Copyright © SteeZers 2024</p>
                    <div className=" flex flex-row gap-3 items-start justify-start">
                        <div className="flex flex-row justify-start items-start p-2 rounded-full bg-white">
                            <img 
                                src={FacebookIcon}
                                alt='Arrow-right'
                                className='md:w-[50px] w-[30px] h-[30px] md:h-[50px]'
                            />
                        </div>
                        <div className="flex flex-row justify-start items-start p-2 rounded-full bg-white">
                            <img 
                                src={InstagramIcon}
                                alt='Arrow-right'
                                className='md:w-[50px] w-[30px] h-[30px] md:h-[50px]'
                            />
                        </div>
                        <div className="flex flex-row justify-start items-start p-2 rounded-full bg-white">
                            <img 
                                src={TwitterIcon}
                                alt='Arrow-right'
                                className='md:w-[50px] w-[30px] h-[30px] md:h-[50px]'
                            />
                        </div>
                    </div>
                </div>
                <form className="flex flex-col gap-2" action="">
                    <label className=" text-white md:text-[20px] text-[16px] font-[400]">Subscribe to our Newsletter</label>
                    <input type="email" placeholder="Enter your email here" className="bg-white text-gray-600 px-3 py-4 rounded-md " />
                    <button type="submit" className=" bg-black text-white border-white border rounded-lg py-2 px-4 w-fit h-fit"> Submit</button>
                </form>
            </div>
        </>
    );
}

export default Footer;