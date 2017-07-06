import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import store from './store'
import Index from './containers/index'
import './styles/globalStyle.scss'

render(
	<Provider store={store}>
		<BrowserRouter>
		  <Index />
	  </BrowserRouter>
	</Provider>
  ,document.getElementById('root')
)