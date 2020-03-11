import { all } from 'redux-saga/effects'

import cart from './cart/sagas'

//Função semelhante ao do rootReducer
export default function* rootSaga() {
    return yield all([ 
        cart
    ])
}