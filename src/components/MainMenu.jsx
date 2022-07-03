import { useState, useEffect, useRef, Children } from 'react'
import { ItemCard } from './ItemCard'
import '../styles/menu.css'

export function MainMenu() {
  const [products, setProducts] = useState()
  const [limit, setLimit] = useState(8)
  const modalElement = useRef()

  async function loadProducts(limit) {
    await fetch(`https://fakestoreapi.com/products?limit=${limit}`)
              .then(res=>res.json())
              .then(data => setProducts(data))
  }

  async function loadMore(limit) {
    if (limit > products.length) {
      modalElement.current.showModal()
      return
    } else {
      setLimit((limit) + 4)
    }
  }

  function closeModal() {
    modalElement.current.close()
  }

   useEffect(() => {
    loadProducts(limit)
  }, [limit])

   return (
    <section className="menu-container">
      <dialog ref={modalElement} className='modal-open'>
        Não há mais itens para mostrar!
        <button onClick={closeModal}>Fechar</button>
      </dialog>
      <h2 className="menu-header">Escolha nossos produtos mais vendidos e não se arrependa</h2>
      {Children.toArray(products && products.map(product => {
      return (
        <ItemCard 
          title={product.title}
          description={product.description}
          price={`${product.price.toFixed(2)} R$`}
          image={product.image}
        />
      )
    }))}
    <button className='load-more' onClick={() => loadMore(limit)}>Ver mais</button>
    </section>
  )
}
