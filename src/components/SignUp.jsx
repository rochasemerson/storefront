import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import logo from '../assets/logo.png'

import '../styles/signup.css'

export function SignUp() {
    return (
        <section className="signup-container">
            <div className="left-container">
                <div className="signup-title">
                    <span>AM</span>
                    <span>store</span>
                </div>
                <img src={logo} alt="" />
            </div>
            <div className="form-container">
                <form>
                    <h2>Cadastro</h2>
                    <input type="text" placeholder='Nome completo' />
                    <input type="email" placeholder='E-mail' />
                    <input type="password" placeholder='Senha' />
                    <div className='account-info'>
                        <button type='button' className="signup-btn">Criar conta</button>
                        <span>Já possui conta? <a href="/">Entrar</a></span>
                        <div>
                            <input type="checkbox" />
                            <label>Lembrar de mim</label>
                        </div>
                    </div>
                </form>
                <div className="social-login">
                    <label>Entrar usando</label>
                    <FcGoogle />
                    <FaFacebookF />
                </div>
            </div>
        </section>
    )
}
