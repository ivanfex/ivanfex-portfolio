import React, { Component } from 'react'

class SkillsBlock extends Component {
	render(){
		return (
			<section className="skills-block blocky-block">
				<div className="text-wrapper text-columns">
					<div>
						<h1 className="text">What I do</h1>
						<h1>Front-end</h1>
						<p>CSS3, JavaScript, ES6, React, Redux</p>
						<h1>Back-end</h1>
						<p>Node, Express, APIs, SQL, NoSQL, MongoDB</p>
						<h1>Cloud</h1>
						<p>AWS, Firebase, Heroku</p>
						<h1>Game</h1>
						<p>GameMaker Studio, Unity, Phaser, Asesprite</p>
						<h1>E-Commerce</h1>
						<p>Stripe, Shopify, Square</p>
					</div>
					<div className="divider">|<br/>|<br/>|<br/>|<br/>|<br/>|<br/>|<br/>|<br/>|</div>
					<div>
						<h1 className="text">What I don't</h1>
						<h1>Body</h1>
						<p>Cartwheels, splits, handstands, cheese</p>
						<h1>Tech</h1>
						<p>Push to master, global variables, blame devops</p>

						<h1 className="text">Contact</h1>
						<a href="mailto:ivaneduardo68@gmail.com"><p>ivaneduardo68@gmail.com</p></a>
						<a href="https://github.com/ivanfex"><p>GitHub</p></a>
						<a href="https://www.linkedin.com/in/ivanfex/"><p>LinkedIn</p></a>
						<a href="ivanfex-resume.pdf" target="_blank"><p>Resume</p></a>
					</div>
				</div>
			</section>
		)
	}
}

export default SkillsBlock