import React from 'react';
import { Link } from 'react-router-dom'
import { MdShoppingBasket } from 'react-icons/md'
import { useSelector } from 'react-redux'

import { Container, Cart } from './styles';

import logo from '../../assets/images/logo.svg'

export default function Header() {

    /*
    O useSelector é um hook que fico responsável por ouvir as atualizações do estado do reducer
    no caso é de Cart (declarado no arquivo [rootReducer])
     */
    const cartLength = useSelector(state => state.cart.length, [])

    return (
        <Container>
            <Link to='/'>
                <img src={logo} alt="RocketShoes" />
            </Link>

            <Cart to="/cart">
                <div>
                    <strong>Meu carrinho</strong>
                    <span>{cartLength} Itens</span>
                </div>
                <MdShoppingBasket size={36} color="#FFF" />
            </Cart>
        </Container>
    );
}
