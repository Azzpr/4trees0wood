import React from 'react'

//importing styling
import './Navbar.css'
const Navbar = () => {

    return (
        <div>
            <nav>
                <div className="left-side">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Shop</a></li>
                </div>
                <div className="middle-side">

                    <div className="middle-side-top">
                        <h1>4Trees</h1>
                    </div>
                    <div className="middle-side-bottom">

                        <h1>0Wood</h1>
                    </div>

                </div>
                <div className="right-side">
                    <div className="right-side-choose-language">
                        <select name="" id="">
                            <option value="English">Eng</option>
                            <option value="German">Ger</option>
                            <option value="Norwegian">No</option>
                        </select>
                    </div>
                    <div className="pd-right-15px"><br /></div>
                    <div className="right-side-bug-report">
                        <span class="material-icons">
                            bug_report
                        </span>
                    </div>
                    <div className="right-side-who-we-are">
                        <span class="material-icons">
                            supervised_user_circle
                        </span>
                    </div>
                    <div className="right-side-donate">
                        <span class="material-icons">
                            favorite_border
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
