import React from 'react'

//importing styling
import './Footer.css'
const Footer = () => {

    return (
        <div>
            <footer>
                <div className="inner-footer">
                    <div className="footer-row-1">
                        <h1>Feedback</h1>
                        <li><a href="/Email">Email</a></li>
                    </div>
                    <div className="footer-row-2">
                        <h1>Support</h1>
                        <li><a href="/Support">Donate</a></li>
                    </div>
                    <div className="footer-row-3">
                        <h1>About</h1>
                        <li><a href="/About">Ref</a></li>

                    </div>
                    <div className="footer-row-4">
                        <h1>Leagle</h1>
                        <li><a href="/tos">Tos</a></li>
                        <li><a href="/tos">Privacy</a></li>
                        <li><a href="/tos">Cookie Settings</a></li>
                    </div>
                    <div className="footer-row-5-social">
                        <h1>Socials</h1>
                        <li><a href="">YouTube</a></li>
                        <li><a href="">Facebook</a></li>
                        <li><a href="">Github</a></li>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
