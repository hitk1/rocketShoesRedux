import React, { useCallback } from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md'

import { Container, ProductTable, Total } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { formatPrice } from '../../util/format';
import { removeFromCart, updateAmountRequest } from '../../store/modules/cart/reducer'

export default function Cart() {

    const dispatch = useDispatch()
    const formatCurrency = useCallback(price => formatPrice(price), [])

    /*
        Hook do reactRedux usado para recuperar os dados armazenados no estado do redux
        neste caso, [products] será uma cópia de todos os produtos do estado com um attr novo [subtotal]
        que é calculado toda vez que o estado do redux for alterado (já que a ação de incrementar e decrementar cada item do carrinho,
            também está sendo feito utilizando o estado do redux)
    */
    const products = useSelector(state => state.cart.map(product => ({
        ...product, subtotal: formatCurrency(product.price * product.amount)
    })))

    //Caso semelhante, o calculo do total é refeito toda vez que o estado do redux for alterado (livrando varios render da aplicação)
    const total = useSelector(state => formatCurrency(state.cart.reduce((total, product) => total + product.price * product.amount, 0)))

    const handleRemoveFromCart = useCallback(productId => dispatch(removeFromCart(productId)))

    const increment = useCallback(product => dispatch(updateAmountRequest(product.id, product.amount + 1)))
    const decrement = useCallback(product => dispatch(updateAmountRequest(product.id, product.amount - 1)))

    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th />
                        <th>Produto</th>
                        <th>Qtd</th>
                        <th>SubTotal</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>
                                <img
                                    src={product.image}
                                    alt={product.title} />
                            </td>
                            <td>
                                <strong>{product.title}</strong>
                                <span>{formatCurrency(product.price)}</span>
                            </td>
                            <td>
                                <div>
                                    <button type="button" onClick={() => decrement(product)}>
                                        <MdRemoveCircleOutline size={20} color="#7150c1" />
                                    </button>
                                    <input type="number" readOnly value={product.amount} />
                                    <button type="button" onClick={() => increment(product)}>
                                        <MdAddCircleOutline size={20} color="#7150c1" />
                                    </button>
                                </div>
                            </td>
                            <td>
                                <strong>{product.subtotal}</strong>
                            </td>
                            <td>
                                <button type="button" onClick={() => handleRemoveFromCart(product.id)}>
                                    <MdDelete size={20} color="#7159c1" />
                                </button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </ProductTable>

            <footer>
                <button type="button">Finalizar Pedido</button>

                <Total>
                    <span>TOTAL</span>
                    <strong>{total}</strong>
                </Total>
            </footer>
        </Container>
    );
}
