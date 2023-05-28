import React from 'react'
import '../../styles/testimonial.css'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";
import pic1 from '../../assets/img/pic1.png';
import avtar01 from '../../assets/img/avatar01.png'
import avtar02 from '../../assets/img/avatar02.png';

export default function Testimonials() {
    return (
        <>
            <section>
                <div className='container sliders'>
                    
                    <h2 className='section__title'>Testimonials</h2>

                    <Swiper
                        effect={"cards"}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className='slide__item'>
                                <div className='slide__img-01'>
                                    <img src={pic1} alt='' />
                                </div>
                                <h4>Bhairav Jangid</h4>
                                <p align="justify">
                                Joining this gym has been a game-changer for me. The state-of-the-art equipment, 
                                knowledgeable trainers, and motivating atmosphere have pushed me to achieve my 
                                fitness goals faster than ever before.
                                </p>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                        <div className='slide__item'>
                            <div className='slide__img-02'>
                                <img src={avtar02} alt='' />
                            </div>
                            <h4>Jesica Fernandes</h4>
                            <p align="justify">
                            I've tried several gyms in the past, but none compare to the level of excellence 
                            I've experienced here. The variety of classes, friendly staff, and clean environment 
                            create an motivated environment..
                            </p>

                        </div>
                        </SwiperSlide>

                        <SwiperSlide>
                        <div className='slide__item'>
                            <div className='slide__img-03'>
                                <img src={avtar01} alt='' />
                            </div>
                            <h4>Mariana Luna</h4>
                            <p align="justify">
                            This gym has exceeded all my expectations, providing top-notch facilities, expert trainers,
                             and a supportive community that has propelled my fitness journey to new heights. 
                            </p>

                        </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    );
}
