import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

//Precisa ser importado antes da importação do [store] para que a integração com reactotron funcione
import './config/ReactotronConfig'

import GlobalStyle from './styles/global'
import Header from './components/Header'
import store from './store' // -----

import Routes from './routes'
function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Routes />
                <GlobalStyle />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
