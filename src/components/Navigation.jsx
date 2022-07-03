import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import '../styles/navigation.css'
import logo from '../assets/logo.png'

export function Navigation() {
  return (
    <section className="header-container">
                <div className="header-title">
                    <img className='logo-img' src={logo} alt="" />
                </div>
                <div className="navigation-container">
                    <div className="links-container">
                        <a href="#">Home</a>
                        <a href="#">Mais Vendidos</a>
                        <a href="#">Ofertas</a>
                        <a href="#">Categorias</a>
                        <a href="#">Entrega</a>
                    </div>
                    <div className="btn-container">
                        <AiOutlineShoppingCart />
                        <AiOutlineUser />
                    </div>
                </div>
            </section>
  )
}
