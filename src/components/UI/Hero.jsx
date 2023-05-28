import React from 'react';
import heroImg from '../../assets/img/avtar04.png';
import dumbelIcon from '../../assets/img/dumble.png';
import '../../styles/hero.css';

const Hero = () => {
    return (
        <section id='home'>
            <div className="container">
                <div className="hero__wrapper">
                    {/* hero content */}
                    <div className="hero__content">
                        <h2 className="section__title" 
                        data-aos='fade-up' 
                        data-aos-duration='1500'>
                            Exercise is the key to <br/>
                            <span className="highlights"> Healthy </span>
                            Lifestyle</h2>
                        <p 
                        data-aos='fade-up' 
                        data-aos-delay='100'
                        data-aos-duration='1800' align="left">Regular exercise is the cornerstone of a healthy lifestyle, promoting<br/>
                        physical fitness, mental well-being, and reducing the risk of chronic<br/>diseases. It boosts energy 
                        levels, strengthens the immune  system, <br/>and improves overall quality of life.</p>
                        <div className="hero__btns" data-aos='fade-up' 
                        data-aos-delay='200'
                        data-aos-duration='2000'>
                            <button className="register__btn">Get Started</button>
                            <button className="watch__btn"><span><i class="ri-play-fill"></i></span>
                                Watch Video
                            </button>
                        </div>
                    </div>
                    {/* hero img */}
                    <div className="hero__img">
                        <div className="hero__img-wrapper">
                            <div className="box-1">
                                <div className="box-2">
                                    <div className="box-3">
                                        <div className="box__img">
                                            <img src={heroImg} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="heart__rate" data-aos='fade-right' 
                            data-aos-duration='1500'>
                                <h5>Heart Rate</h5>
                                <span><i class="ri-heart-pulse-fill"></i></span>
                                <h6>2567 BPM</h6>
                            </div>

                            <div className="gym__location" data-aos='fade-left' 
                            data-aos-duration='1500'>
                                <span><i class="ri-map-pin-2-fill"></i></span>
                                <h5>Find a new <br/> gym near you</h5>
                            </div>

                            <div className="dumbel__icon" data-aos='fade-down' 
                            data-aos-duration='1500'>
                                <img src={dumbelIcon} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;