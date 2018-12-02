import React, { Component } from 'react'
import TextBlock from './pages/TextBlock';
import InfoBlock from './pages/InfoBlock';
import ProjectsBlock from './pages/ProjectsBlock';
import SkillsBlock from './pages/SkillsBlock';
import BirdeyeBlock from './pages/Birdeye';

class Main extends Component {
	render(){
		return (
			<div>
				<TextBlock/>
				<BirdeyeBlock />
				<InfoBlock/>
				<ProjectsBlock />
				<SkillsBlock />
			</div>
		)
	}
}

export default Main