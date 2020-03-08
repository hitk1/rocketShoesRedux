import React, { useState, useEffect, useCallback } from 'react';
import { MdShoppingCart } from 'react-icons/md'

import { ProductList } from './styles';
import api from '../../services/api'
import { formatPrice } from '../../util/format'

export default function Home() {

    const [products, setProducts] = useState([])

    const formatCurrency = useCallback((price) => formatPrice(price), [])

    useEffect(() => {
        async function getApiData() {
            const response = await api.get('products')
            setProducts(response.data)
        }

        getApiData()
    }, [])

    return (
        <ProductList>
            {products.map(product => (
                <li key={product.id}>
                    <img src={product.image}
                        alt={product.title} />

                    <strong>{product.title}</strong>
                    <span>{formatCurrency(product.price)}</span>

                    <button type='button'>
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
