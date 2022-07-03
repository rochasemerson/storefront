import '../styles/footer.css'
import { AiOutlineWhatsApp, AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai'
import logo from '../assets/logo.png'


export function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-left-container">
                <div className="footer-img">
                    <img src={logo} alt="" />
                </div>
                <div className="footer-links-container">
                    <AiOutlineWhatsApp />
                    <AiOutlineInstagram />
                    <AiOutlineFacebook />
                </div>
            </div>
            <div className="middle-container">
                <ul>
                    <li><a>Home</a></li>
                    <li><a>Mais vendidos</a></li>
                    <li><a>Ofertas</a></li>
                    <li><a>Categorias</a></li>
                    <li><a>Entrega</a></li>
                </ul>
                <div>@ 2022 AMstore</div>
            </div>
            <div className="contacts-container">
                <div>(00) 00000-0000</div>
                <div>Avenida São João das festas<br />
                    ponto comercial n° 00</div>
            </div>
        </footer>
    )
}
