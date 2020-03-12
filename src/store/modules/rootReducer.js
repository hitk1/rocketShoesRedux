import { combineReducers } from 'redux'

import cart from './cart/reducer'

/*
O combine reducers é a melhor forma de abstrair a quantidade de reducers da aplicação,
assim é possível criar vários reducers e refatorá-los
 */
export default combineReducers({
    cart
})