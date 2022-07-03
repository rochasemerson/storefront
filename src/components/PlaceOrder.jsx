import { AiOutlineWhatsApp } from 'react-icons/ai'
import '../styles/place-order.css';

export function PlaceOrder() {
  return (
    <section className="place-order-container">
      <div className="left-side-container">
        <h2>Não passe vontade, aproveite nossa semana de entrega grátis para todos os lugares</h2>
        <p>Na compra de cinco hambugueres você ganha um especial do chef</p>
        <button className="order-btn">
          <AiOutlineWhatsApp ></AiOutlineWhatsApp>
          Fazer pedido direto
        </button>
      </div>
      <div className="right-side-container">
      </div>
    </section>
  )
}
