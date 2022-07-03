import { Children } from 'react'

export function SlidingMenu({limit, products} = props) {
    return Children.toArray(products && products.slice(limit, limit + 9).map(product => {
        return (
            <div className="product-container">
                <h3 className="product-title">{product.title}</h3>
                <span className="product-price">{`${product.price.toFixed(2)} R$`}</span>
                <p className="product-description">{product.description}</p>
            </div>
        )
    }))
}