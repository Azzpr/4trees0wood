import React from 'react'

//importing styling
import './Projects.css'

//importing components
import Navbar from '../../components/Navar/Navbar';
import Footer from '../../components/Footer/Footer';
const Projects = () => {
    return (
        <body>
            <Navbar />
            <div className="projects-container">
                {/*project item 1 */}
                <div className="project-item">
                    <div className="thumbnail-image">
                        <img src="/images/flappybirdProjectThumbnail.jpg" alt="Preview image" />
                    </div>
                    <div className="name">
                        <a href="https://github.com/Azzpr/FlappyBird-SFML">
                            <h1 id="name">Flappybird</h1>
                        </a>
                    </div>
                    <div className="small-description">
                        <p>A game jam project, made using C++ with the library SFML(Simple fast media library)</p>
                    </div>
                    <div className="github-url"> 
                        <a href="https://github.com/Azzpr/FlappyBird-SFML">
                            <span class="material-icons">
                                code
                        </span>
                        </a>
                    </div>
                </div>
                {/*project item 1 */}
            </div>
            <Footer />
        </body>
    )
}
export default Projects;