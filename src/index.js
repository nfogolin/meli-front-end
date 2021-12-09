import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from "react-redux";
import allReducers from "./store/reducers";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';

/*
Utilizamos Redux para llevar la busqueda en un estado global y poder proveer datos tanto al detalle de 
la busqueda como al componentes tipo breadcrumbs. También utilizamos thunk, una librería que está 
preparada para gestionar actions de Redux como funciones asíncronas.
*/

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
  allReducers,
  composeEnhancers (
    applyMiddleware (thunk)
  )
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
