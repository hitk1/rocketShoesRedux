import React, { useState, useEffect, useCallback } from 'react';
import { MdShoppingCart } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'

import { ProductList } from './styles';
import api from '../../services/api'
import { formatPrice } from '../../util/format'
import { addToCartRequest } from '../../store/modules/cart/reducer'

export default function Home() {

    const [products, setProducts] = useState([])
    const dispatch = useDispatch()  //Hook utilizado para disparar ações dos reducers

    /*
    Cria um objeto que armazena os valores de cada item dentro do carrinho de acordo com seu próprio ID
    {Id: quantidade}
    {1: 3}
    {2: 5}
    */
    const amount = useSelector(state => state.cart.reduce((amount, product) => {
        amount[product.id] = product.amount
        return amount
    }, {}))

    //useCallback é um hook para memorizar a função a fim de evitar renderizações desnecessárias
    const formatCurrency = useCallback((price) => formatPrice(price), [])

    useEffect(() => {
        async function getApiData() {
            const response = await api.get('products')
            setProducts(response.data)
        }

        getApiData()
    }, [])

    /*
        Neste caso, o dispatch faz uma chamada a função declaradas no arquivo do reducer,
        que por sua vez, realizara as ações necessárias
        Essa função, é respectiva a um middleware (sagas) que fara uma chamada a API antes de realmente incluir o item do produto no carrinho
    */
    const handleAddToCart = (id) => dispatch(addToCartRequest(id))

    return (
        <ProductList>
            {products.map(product => (
                <li key={product.id}>
                    <img src={product.image}
                        alt={product.title} />

                    <strong>{product.title}</strong>
                    <span>{formatCurrency(product.price)}</span>

                    <button type='button' onClick={() => handleAddToCart(product.id)}>
                        <div>
                            <MdShoppingCart size={16} color="#FFF" />{amount[product.id] || 0}
                        </div>

                        <span>ADICIONAR AO CARRINHO</span>
                    </button>
                </li>
            ))}

        </ProductList>
    );
}
