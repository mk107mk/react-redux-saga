import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import './scss/style.scss'
import store from "./redux/store";
import {Router} from 'react-router-dom'
import {HISTORY} from "./Helper/History";


/*const state= store.getState();
console.log("@@state",state);

store.dispatch({type:'@@APP/UPDATE_STATE', props:{
    name: "kim",
    popup: true
    }})
const state2= store.getState();
console.log('@@state after dispatch', state2);*/

ReactDOM.render(
  <React.StrictMode>

      <Provider store={store}>
          <Router history={HISTORY}>
              <App/>
          </Router>
      </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);
