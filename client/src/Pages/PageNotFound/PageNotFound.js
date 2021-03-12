import React from 'react'

//importing styling
import './PageNotFound.css'

//importing components
import Navbar from '../../components/Navar/Navbar';
import Footer from '../../components/Footer/Footer';
const PageNotFound = () => {
    return (
        <div>
            <Navbar />
            <h1>404</h1>
            <Footer />
        </div>
    )
}
export default PageNotFound;