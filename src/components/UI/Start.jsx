import React from 'react';
import '../../styles/start.css';
import trainerImg from '../../assets/img/trainer.png'

const Start = () => {
    return (
        <section id='classes'>
            <div className="container">
                <div className="start__wrapper">
                    <div className="start__img">
                        <img src={trainerImg} alt="" data-aos='fade-left' 
                        data-aos-duration='1500'/>
                    </div>

                    <div className="start__content" data-aos='fade-right' 
                    data-aos-duration='1500'>
                        <h2 className="section__title">
                            Ready to make a 
                            <span className='highlights'> change?</span>
                        </h2>
                        <p align="justify">
                        Embrace the opportunity to make a change for fitness, as it holds 
                        the power to transform your body, mind, and spirit. Dedicate yourself 
                        to a consistent exercise routine, fuel your body with nutritious foods, 
                        and witness the incredible journey of self-improvement and personal growth unfold.
                        </p>

                        <button className="register__btn">Get Started</button>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Start;