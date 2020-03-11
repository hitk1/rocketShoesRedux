import { call, put, all, takeLatest } from 'redux-saga/effects'

import api from '../../../services/api'

import { addToCartSuccess } from '../cart/reducer'


//As funções de middleware do redux-saga devem ser declaradas com generator * e yield
function* addToCart({ data: id }) {
    const response = yield call(api.get, `/products/${id}`)

    //[put] é a função que dará continuidade as actions do redux
    yield put(addToCartSuccess(response.data))
    console.log('chamou o metodo')
}

//[all] é usado para combinar várias funções de middleware, desse modo é possível exportar esse arquivo como um grupo de middlewares
export default all([
    /*
    [takeLatest] é uma das funções do redux saga para linkar a action com a função de middleware em si
    neste caso, a action ouvida é [ADD_TO_CART_REQUEST] que quando executada, chamará a função [addToCart]
    */
    takeLatest('ADD_TO_CART_REQUEST', addToCart)
])