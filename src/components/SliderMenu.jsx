import { useState, useEffect, useRef, Children } from 'react'
import { SlidingMenu } from "./SlidingMenu";
import '../styles/slider-menu.css'

export function SliderMenu() {
    const [products, setProducts] = useState()
    const [limit, setLimit] = useState(0)
    const [pageSize, setPageSize] = useState(9)
    const pageContainerElement = useRef()

    async function loadProducts() {
        await fetch('https://fakestoreapi.com/products?limit=18')
            .then(res => res.json())
            .then(data => setProducts(data))
    }

    useEffect(() => {
        loadProducts()
    }, [])

    function changeCategory() {
        const parentElement = event.target.parentElement.childNodes
        parentElement.forEach(element => {
            element.classList.remove('category-active')
            pageContainerElement.current.classList.remove('shrink', 'enlarge')
        })
        event.target.textContent === 'Produtos' ? setPageSize(0) : setPageSize(9) 
        pageContainerElement.current.classList.add('shrink')
        event.target.classList.add('category-active')
    }

    function handleSlide(event) {
        if (event.target.classList.contains('shrink')) {
            event.target.classList.add('enlarge')
        }
        setLimit(pageSize)
    }
   
    return (
        <section className="slider-menu-container">
            <h2 className="slider-menu-header">Conheça todos os nossos produtos e<br /> acompanhe nossas novidades</h2>
            <div className='category-container' >
                <span onClick={changeCategory} className='category category-active'>Produtos</span>
                <span onClick={changeCategory} className='category'>Lançamentos</span>
            </div>
            <div ref={pageContainerElement}  onTransitionEnd={handleSlide} className="page-container">
                <SlidingMenu 
                    products = {products}
                    limit = {limit}
                />
            </div>
            <h2 className='slider-menu-header'>Conheça a nossa empresa</h2>
        </section>
    )
}
