import React, {Component} from 'react'
import {Route, Routes} from 'react-router-dom'
import Layout from '../layout/index.js'

class AppRouter extends Component {
	render() {
		return (
			<div id="layout">
				<Routes>
					<Route path="*" element={<Layout />} />
				</Routes>
			</div>
		)
	}
}
export default AppRouter
