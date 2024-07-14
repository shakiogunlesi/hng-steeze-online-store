import HeroSection from "../HeroSection";
import CartSection from "../CartSection";
import Footer from "../footer";
import './modal.css'

const CartPage = () => {
    return (
      <>
        <div className="mx-6">
            <HeroSection />
            <CartSection />
            <Footer />
        </div>
      </>
    );
  };
  
  export default CartPage;