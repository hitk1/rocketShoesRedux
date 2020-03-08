import React, {useCallback} from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md'

import { Container, ProductTable, Total } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { formatPrice } from '../../util/format';
import { removeFromCart } from '../../store/modules/cart/reducer'

export default function Cart() {

    const dispatch = useDispatch()
    const products = useSelector(state => state.cart, [])
    const formatCurrency = useCallback(price => formatPrice(price), [])

    const handleRemoveFromCart = useCallback(productId => dispatch(removeFromCart(productId)))

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
                        <tr>
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
                                    <button type="button">
                                        <MdRemoveCircleOutline size={20} color="#7150c1" />
                                    </button>
                                    <input type="number" readOnly value={product.amount} />
                                    <button type="button">
                                        <MdAddCircleOutline size={20} color="#7150c1" />
                                    </button>
                                </div>
                            </td>
                            <td>
                                <strong>R$ 259,80</strong>
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
                    <span>R$1.920,28</span>
                </Total>
            </footer>
        </Container>
    );
}
