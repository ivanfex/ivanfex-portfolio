import React, { Component } from 'react'
import TextBlock from './pages/TextBlock';
import InfoBlock from './pages/InfoBlock';
import ProjectsBlock from './pages/ProjectsBlock';
import SkillsBlock from './pages/SkillsBlock';

class Main extends Component {
	render(){
		return (
			<div>
				<TextBlock/>
				<InfoBlock/>
				<ProjectsBlock />
				<SkillsBlock />
			</div>
		)
	}
}

export default Main