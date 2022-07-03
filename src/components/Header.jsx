import { Navigation } from './Navigation'
import '../styles/header.css'
import { AiOutlineWhatsApp, AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai'
import woman from '../assets/woman.png'

export function Header() {
    return (
        <header className="header">
            <Navigation />
            <div className="main-title">
                <h1>OFERTAS<br/> IMPERDÍVEIS</h1>
                <h5>Moda, importados e tecnologia<br/> com qualidade e preços acessíveis</h5>
                <button>Conferir ofertas</button>
            </div>
            <div className='burger-container'>
                <img src={woman} alt="" className='burger-img' />
            </div>
            <div className="social-media-icons">
                <AiOutlineWhatsApp />
                <AiOutlineInstagram />
                <AiOutlineFacebook />
            </div>
        </header>
    )
}
