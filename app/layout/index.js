import React, {Component} from 'react'
import {Routes, Route} from 'react-router-dom'
import Main from '../main/index.js'
import Footer from './footer.js'
import Header from './header.js'

export default class layout extends Component {
	render() {
		return (
			<div className="layout greedy-height">
				<Header />
				<div id="wrap" className="wrap greedy-height">
					<div id="main" className="container greedy-height">
						<Routes>
							<Route path="/" element={<Main />} />
						</Routes>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}
