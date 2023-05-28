import React from 'react'
import '../../styles/footer.css'
import logo from '../../assets/img/dumble.png'

const Footer = () => {
    const year= new Date().getFullYear()
    return (
        <footer className='footer' data-aos='fade-up' 
        data-aos-duration='1500'>
            <div className='container'>
                <div className='footer__wrapper'>
                    <div className='footer__box'>
                        <div className="logo">
                            <div className="logo__img"><img src={logo} alt="" />
                            </div>
                            <h2>FitBhairav</h2>
                        </div>
                        <p align="justify"> FitBhairav's gym website is a virtual fitness sanctuary, providing 
                        a seamless blend of expert guidance.
                        </p>
                    </div>

                    <div className='footer__box'>
                    <h4 className='footer__title'>Company</h4>
                    
                    <ul className='footer__links'>

                    <li><a href='#'></a> Our program</li>
                    <li><a href='#'></a> Our plan</li>
                    <li><a href='#'></a> Become a member</li>

                    </ul>
                    </div>

                    <div className='footer__box'>
                    <h4 className='footer__title'>Quick Links</h4>
                    
                    <ul className='footer__links'>

                    <li><a href='#'></a> About Us</li>
                    <li><a href='#'></a> Contact Us</li>
                    <li><a href='#'></a> Support</li>

                    </ul>
                    </div>

                    <div className='footer__box'>
                    <h4 className='footer__title'>Social Media</h4>
                    
                    <ul className='footer__links'>

                    <li><a href='#'></a> Instagram</li>
                    <li><a href='#'></a> Facebook</li>
                    <li><a href='#'></a> Youtube</li>

                    </ul>
                    </div>


                </div>
                <p className='copyright'> Copyright - {year} developed by <a href="https://github.com/Fitbhairav/">
                <b>Bhairav</b></a>. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer