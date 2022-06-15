import '@babel/polyfill'
import React, {StrictMode} from 'react'
import {createRoot} from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './app.scss'
import {BrowserRouter} from 'react-router-dom'
import AppRouter from './router/router.js'

// eslint-ignore no-undef
const container = document.querySelector('#root')
const root = createRoot(container)
root.render(
	<StrictMode>
		<div>
			<BrowserRouter>
				<AppRouter />
			</BrowserRouter>
		</div>
	</StrictMode>,
)
