import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md'

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
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
                    <tr>
                        <td>
                            <img
                                src="https://static.netshoes.com.br/produtos/tenis-mizuno-atlas-masculino/20/D16-4397-120/D16-4397-120_detalhe1.jpg?ts=1580812901?resize=280:280"
                                alt="Tenis" />
                        </td>
                        <td>
                            <strong>Tenis de exemplo</strong>
                            <span>R$ 129,99</span>
                        </td>
                        <td>
                            <div>
                                <button type="button">
                                    <MdRemoveCircleOutline size={20} color="#7150c1" />
                                </button>
                                <input type="number" readOnly value={2} />
                                <button type="button">
                                    <MdAddCircleOutline size={20} color="#7150c1" />
                                </button>
                            </div>
                        </td>
                        <td>
                            <strong>R$ 259,80</strong>
                        </td>
                        <td>
                            <button type="button">
                                <MdDelete size={20} color="#7159c1" />
                            </button>
                        </td>

                    </tr>
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
