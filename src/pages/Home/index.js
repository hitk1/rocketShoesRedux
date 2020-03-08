import React, { useState, useEffect, useCallback } from 'react';
import { MdShoppingCart } from 'react-icons/md'
import { useDispatch } from 'react-redux'

import { ProductList } from './styles';
import api from '../../services/api'
import { formatPrice } from '../../util/format'
import { addToCart } from '../../store/modules/cart/reducer'

export default function Home() {

    const [products, setProducts] = useState([])
    const dispatch = useDispatch()  //Hook utilizado para disparar ações dos reducers


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
    */
    const handleAddToCart = (product) => dispatch(addToCart(product))

    return (
        <ProductList>
            {products.map(product => (
                <li key={product.id}>
                    <img src={product.image}
                        alt={product.title} />

                    <strong>{product.title}</strong>
                    <span>{formatCurrency(product.price)}</span>

                    <button type='button' onClick={() => handleAddToCart(product)}>
                        <div>
                            <MdShoppingCart size={16} color="#FFF" /> 3
                        </div>

                        <span>ADICIONAR AO CARRINHO</span>
                    </button>
                </li>
            ))}

        </ProductList>
    );
}
