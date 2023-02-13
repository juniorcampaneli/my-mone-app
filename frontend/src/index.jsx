import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
 
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'
 
import reducers from './main/reducers'
import App from './main/app'
 
const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers)
 
ReactDOM.render(
 <Provider store={store}>
 <App />
 </Provider>, document.getElementById('app'))