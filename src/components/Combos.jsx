import { useState, useEffect, useRef, Children } from 'react'
import { ItemCard } from './ItemCard'
import '../styles/combo.css'

export function Combos() {
    const [products, setProducts] = useState()
    const [initialIndex, setInitialIndex] = useState(0)
    const [pageIndex, setPageIndex] = useState(0)
    const containerElement = useRef()

    async function loadProducts() {
        await fetch('https://fakestoreapi.com/products?limit=12')
            .then(res => res.json())
            .then(data => setProducts(data))
    }

    const moveSlider = (event) => {
        const parentElement = event.target.parentElement.childNodes
        parentElement.forEach(element => {
            element.classList.remove('slide-active')
        })
        containerElement.current.style.opacity = '0'
        event.target.classList.add('slide-active')
        setPageIndex(parseInt(event.target.dataset.index))
    }

    function handleTransitionEnd(event) {
        setInitialIndex(pageIndex)

        event.target.style.opacity = '1'
    };

    useEffect(() => {
        loadProducts()
    }, [])

    return (
        <section className='menu-container'>
            <h2 className="menu-header">Sozinho ou acompanhado,<br /> aproveite os nossos kits</h2>
            <div
                className="combo-container"
                ref={containerElement}
                onTransitionEnd={handleTransitionEnd}>
                {Children.toArray(products && products.slice(initialIndex, initialIndex + 4).map(product => {
                    return (
                        <ItemCard
                            title={product.title}
                            description={product.description}
                            price={`${product.price.toFixed(2)} R$`}
                            image={product.image}
                        />
                    )
                }))}
            </div>
            <div className='slider-container' >
                <span onClick={moveSlider} data-index={0} className='slide slide-active'></span>
                <span onClick={moveSlider} data-index={4} className='slide'></span>
                <span onClick={moveSlider} data-index={8} className='slide'></span>
            </div>
        </section>
    )
}
