import '../styles/about.css';
import logo from "../assets/logo.png";

export function About() {
  return (
    <section className="about-container">
      <img src={logo} alt="" />
      <div className="right-side-text">
        <p className='main-text'>A empresa AMstore foi criada com intuito de trazer beleza, tecnologia, preços baixos e comodidade em um único lugar. Criamos um ambiente interativo para facilitar suas compras.</p>
      </div>
    </section>
  )
}
