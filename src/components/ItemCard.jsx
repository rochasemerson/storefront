import { AiOutlinePlus } from 'react-icons/ai'
import '../styles/item-card.css'

export function ItemCard(props) {
    return (
        <div className="card-container">
            <h3 className="card-title">{props.title}</h3>
            <p>{props.description}</p>
            <h2 className="item-price">{props.price}</h2>
            <button type='button' className="card-button">
                <AiOutlinePlus />
                Adicionar Produto
            </button>
            <img src={props.image} alt="" className="item-img" />
        </div>
    )
}
