import React from 'react';
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

//Precisa ser importado antes da importação do [store] para que a integração com reactotron funcione
import './config/ReactotronConfig'

import GlobalStyle from './styles/global'
import Header from './components/Header'
import store from './store' // -----

import history from './services/history'
import Routes from './routes'

function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Header />
                <Routes />
                <GlobalStyle />
                <ToastContainer autoClose={3000}/>
            </Router>
        </Provider>
    );
}

export default App;
