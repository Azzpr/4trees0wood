import React from 'react'

//importing styling
import './About.css'

//importing components
import Navbar from '../../components/Navar/Navbar';
import Footer from '../../components/Footer/Footer';
const About = () => {
    return (
        <div>
            <Navbar />
            <div className="info-boxes">
                <div className="info-box-left">
                    <div className="innerbox">
                        <h1>Latin Hat Devs</h1>
                        <hr color="black" size="20px" />
                        <p>2 Devs</p>
                        <p>Norwegian Based</p>
                        <p>Favourite font: <span>Comic Sans</span></p>
                    </div>
                </div>
                <div className="info-box-right">
                    <img src="/images/logo.png" alt=""/>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default About;