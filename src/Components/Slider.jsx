import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "../custom.css";
import { Autoplay, Navigation } from 'swiper/modules';
import 'animate.css';

const Slider = () => {
    return (
        <div className="sliders lg:mt-5 relative animate__animated lg:animate__fadeIn lg:animate__delay-1.5s">
            <Swiper navigation={true} modules={[Autoplay, Navigation]}
                autoplay={{ delay: 2500, disableOnInteraction: false, }} loop={true} 
                className="mySwiper rounded-2xl z-10">
                <SwiperSlide>
                    <div className="slider slider1 flex flex-col items-center justify-center">
                        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl 
                        text-[#E5C287] font-bold w-4/5 lg:w-3/5 capitalize">
                            <span className="text-deep-purple text-4xl md:text-5xl lg:text-7xl font-black font-bebas">Over 500 </span>
                            hospitality properties for sale/rent</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider slider2 flex flex-col items-center justify-center">
                        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl 
                        text-[#E5C287] font-bold w-4/5 lg:w-3/5 capitalize">
                            Offering estates from more than
                            <span className="text-deep-purple text-4xl md:text-5xl lg:text-7xl font-black font-bebas"> 30 </span>
                            different places</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider slider3 flex flex-col items-center justify-center">
                        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl 
                        text-[#E5C287] font-bold w-4/5 lg:w-3/5 capitalize">
                            Professionally trained agents guiding you in
                            <span className="text-deep-purple text-4xl md:text-5xl lg:text-7xl font-black font-bebas"> every step </span></h1>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;