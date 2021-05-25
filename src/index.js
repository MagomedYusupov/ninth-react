import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {Provider} from "react-redux";
import {createStore} from "redux";

const reducer = (state, action) =>{
    if (action.type === 'plus'){
        return state + 1
    }
    if ( action.type === 'minus'){
        return state - 1
    }
    if (action.type === 'plus'){
        return 0
    }
    return 0
}

const store = createStore(reducer)
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);


