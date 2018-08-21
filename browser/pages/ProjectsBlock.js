import React, { Component } from 'react'

class ProjectsBlock extends Component {
	render(){
		return (
			<section className="projects-block blocky-block">
				<div className="text-wrapper">
					<h1 className="text">Projects</h1>
					<div className="projects-list">
						<ul>
							<li><a href="http://www.wefightforward.com/">We Fight Forward</a> - fullPage, jQuery, Django</li>
							<li><a href="http://www.mimeframe.com/">MIME</a> - React, Node, TensorFlow.js</li>
							<li><a href="https://ivanfex.itch.io/pillars">Pillars</a> - C#, Unity</li>
						</ul>
					</div>
					<h1 className="text">Experience</h1>
					<div className="projects-list">
						<ul>
							<li>718 Digital - Full Stack Developer (Dec 2017 - Present)</li>
							<li>The DREAM Project - Art Instructor (Aug 2016 - Dec 2016)</li>
							<li>Principito After-School - Instructor (Jan 2016 - Jul 2016)</li>
						</ul>
					</div>
				</div>
			</section>
		)
	}
}

export default ProjectsBlock