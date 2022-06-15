import React from 'react'

export default function footer() {
	return (
		<div id="footer" className="footer">
			<div id="credit">
				Powered by <a href="https://reactjs.org/">React</a>
			</div>
			<div>
				<ul className="social">
					<li>
						<a href="http://twitter.com/venkatswaminath">
							<i className="fa fa-twitter-square" />
						</a>
					</li>
					<li>
						<a href="http://linkedin.com/in/venkatakrishnan-swaminathan-10023129">
							<i className="fa fa-linkedin-square" />
						</a>
					</li>
					<li>
						<a href="https://react-bootstrap.github.io/">
							<i className="fa fa-github-square" />
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}
