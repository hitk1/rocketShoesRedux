import React from 'react';
import { MdShoppingCart } from 'react-icons/md'

import { ProductList } from './styles';

export default function Home() {
    return (
        <ProductList>
            <li>
                <img src="https://static.netshoes.com.br/produtos/tenis-mizuno-atlas-masculino/20/D16-4397-120/D16-4397-120_detalhe1.jpg?ts=1580812901?resize=280:280"
                alt="Tenis" />

                <strong>Tênis exemplo</strong>
                <span>R$ 129,99</span>

                <button type='button'>
                    <div>
                        <MdShoppingCart size={16} color="#FFF" /> 3
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img src="https://static.netshoes.com.br/produtos/tenis-mizuno-atlas-masculino/20/D16-4397-120/D16-4397-120_detalhe1.jpg?ts=1580812901?resize=280:280"
                alt="Tenis" />

                <strong>Tênis exemplo</strong>
                <span>R$ 129,99</span>

                <button type='button'>
                    <div>
                        <MdShoppingCart size={16} color="#FFF" /> 3
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img src="https://static.netshoes.com.br/produtos/tenis-mizuno-atlas-masculino/20/D16-4397-120/D16-4397-120_detalhe1.jpg?ts=1580812901?resize=280:280"
                alt="Tenis" />

                <strong>Tênis exemplo</strong>
                <span>R$ 129,99</span>

                <button type='button'>
                    <div>
                        <MdShoppingCart size={16} color="#FFF" /> 3
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img src="https://static.netshoes.com.br/produtos/tenis-mizuno-atlas-masculino/20/D16-4397-120/D16-4397-120_detalhe1.jpg?ts=1580812901?resize=280:280"
                alt="Tenis" />

                <strong>Tênis exemplo</strong>
                <span>R$ 129,99</span>

                <button type='button'>
                    <div>
                        <MdShoppingCart size={16} color="#FFF" /> 3
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img src="https://static.netshoes.com.br/produtos/tenis-mizuno-atlas-masculino/20/D16-4397-120/D16-4397-120_detalhe1.jpg?ts=1580812901?resize=280:280"
                alt="Tenis" />

                <strong>Tênis exemplo</strong>
                <span>R$ 129,99</span>

                <button type='button'>
                    <div>
                        <MdShoppingCart size={16} color="#FFF" /> 3
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            
            
        </ProductList>
    );
}
