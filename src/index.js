import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';


//1.install redux
//2.install react-redux
//3.Provider React Component -> around everything
//4.create the redux store, provider need store
//5.reducers to populate the store
//5.a. start with a rootReducer
//6 Provider is the connection between react and redux

const theStore = createStore(rootReducer);



ReactDOM.render(
  <Provider store={theStore}>
      <App />
  </Provider>
    ,
  document.getElementById('root')
);
