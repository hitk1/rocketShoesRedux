import { call, select, put, all, takeLatest } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import api from '../../../services/api'
import history from '../../../services/history'

import { formatPrice } from '../../../util/format'

import { addToCartSuccess, updateAmountSuccess } from '../cart/reducer'


//As funções de middleware do redux-saga devem ser declaradas com generator * e yield
function* addToCart({ data: id }) {
    //[select] é usado para buscar informações de dentro do estado do redux
    const productExists = yield select(
        state => state.cart.find(p => p.id === id)
    )

    const stock = yield call(api.get, `/stock/${id} `)
    const stockAmount = stock.data.amount

    const amount = productExists ? productExists.amount + 1 : 0

    if(amount > stockAmount){
        toast.error('Quantidade solicitada fora de estoque')
        return
    }

    if(productExists){
        yield put(updateAmountSuccess(id, amount))
    } else {   
        const response = yield call(api.get, `/products/${id}`)
        
        const data = {
            ...response.data,
            amount: 1,
            proceFormatted: formatPrice(response.data.price)
        }
        //[put] é a função que dará continuidade as actions do redux
        yield put(addToCartSuccess(data))
        history.push('/cart')
    }

}

function* updateAmount({ data }) {
    if(data.amount <= 0) return

    const stock = yield call(api.get, `/stock/${data.productId}`)
    const stockAmount = stock.data.amount

    if(data.amount > stockAmount){
        toast.error('Quantidade solicitada fora de estoque')
        return
    }

    yield put(updateAmountSuccess(data.productId, data.amount))
}

//[all] é usado para combinar várias funções de middleware, desse modo é possível exportar esse arquivo como um grupo de middlewares
export default all([
    /*
    [takeLatest] é uma das funções do redux saga para linkar a action com a função de middleware em si
    neste caso, a action ouvida é [ADD_TO_CART_REQUEST] que quando executada, chamará a função [addToCart]
    */
    takeLatest('ADD_TO_CART_REQUEST', addToCart),
    takeLatest('UPDATE_AMOUNT_REQUEST', updateAmount)
])