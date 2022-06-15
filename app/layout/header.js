import React, {Component} from 'react'
import logo from '../logo.svg'
import icon from '../logo.png'

class Header extends Component {
	render() {
		return (
			<div>
				<div id="header" className="nav-bar-fixed">
					<img src={logo} style={{height: '120px'}} alt="logo" />
					<span className="title">Welcome to React App bult with webpack</span>
					<img src={icon} className="social" style={{height: '100px'}} alt="logo vscode" />
				</div>
				<div className="jumbotron">
					<div>
						<h5>
							<p>Hello welcome to react Venn component</p>
						</h5>
					</div>
					<div id="navbar">
						<ul className="nav navbar-fixed-top">
							<li>
								<button className="btn">Logout</button>
							</li>
							<li>
								<button className="btn">Login</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}
export default Header
