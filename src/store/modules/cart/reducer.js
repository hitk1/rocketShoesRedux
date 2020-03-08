import produce from 'immer'
/*
    A função cart é o próprio reducer em si,
    ela recebe 2 parametros, o primeiro é o estado inicial desse reducer
    DEVE SER INICIALIZADO COMO VAZIO (salvo os casos onde o reducer, por padrão, recebe um valor fixo em específico)
 */
export default function cart(state = [], { type, data }) {
    switch (type){
        case 'ADD_TO_CART':
            /*
                produce é uma função da lib [immer] que facilita a manipulação do estado do reducer
                neste caso, na ação de adicionar ao carrinho, verifica-se primeiro se ja existe o produto no carrinho,
                se sim, a quantidade é incrementada

                **Obs: as modificações do estado são feitas ao final da função (automaticamente)
            */

            /*
                [produce] recebe 2 parametros, o 1 é o estado do reducer,
                o 2 é o rascunho no qual serão feitas as alterações do estado [draft]
            */
            return produce(state, draft => {
                /* 
                [draft] contém todos os objetos do estado do reducer
                neste caso, esta sendo feito uma busca do indice pelo id do produto
                */
                const productIndex = draft.findIndex(product => product.id === data.id)

                //Se ja existir o produto dentro deste estado, a quantidade [amount] é incrementada
                if(productIndex >= 0)
                    draft[productIndex].amount += 1
                else    //caso contrário, o item é adicionado ao estado incluindo um atributo novo [amount = 1]
                    draft.push({
                        ...data,
                        amount: 1
                    })
            })
        case 'REMOVE_FROM_CART':
            return produce(state, draft => {
                //Neste caso, [data] já é o próprio id do produto
                const productIndex = draft.findIndex(product => product.id === data)

                if(productIndex >= 0)
                    draft.splice(productIndex, 1)
            })
        default:
            return state
    }
}

/*
    Essas funções são criadas para padronizar o método de chamada do reducer (dispatch)
    desse modo fica mais facil controlar o tipo da ação de acordo com o type
    que ja vem descrito nessa função por padrão,
    para usar é só chamar o useDispatch de react-redux
*/
export const addToCart = product => ({
    type: 'ADD_TO_CART',
    data: product
})

export const removeFromCart = productId => ({
    type: 'REMOVE_FROM_CART',
    data: productId
})