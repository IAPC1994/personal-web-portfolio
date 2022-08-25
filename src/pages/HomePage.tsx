import { Link } from 'react-router-dom';

import Img from '../assets/perfil_1.png';
import Pdf from '../assets/CV.pdf';

export const HomePage = () => {
    return (
        <div className="home__container">
            <div className="home__container--title">
               <h2>Hello World!</h2>
               <h1>I'm <span>Ivan Panussis</span></h1>
            </div>
            <div className="home__container--image">
                <img src={ Img } alt='Profile image from the home page.'/>
            </div>
            <div className="home__container--description">
                <p> I'm a profesional passionate about </p>
                <p> development of web and mobile </p>
                <p> applications. </p>
                <br />
                <Link to={ Pdf } target='_blank' download><i className="fa-solid fa-file"></i>Download CV</Link>
            </div>
        </div>
    )
}
