import React, { Component } from 'react'
import { ShakeSlow } from 'reshake'

class TextBlock extends Component {
	render(){
		return (
			<section className="text-block blocky-block">
				<div className="text-wrapper">
					<br/>
					<h1 className="text">I’m Ivan Felix, a full stack <ShakeSlow className="shaky" fixed={true}><span className="underlined underlined--thick">developer</span></ShakeSlow> and <ShakeSlow className="shaky" fixed={true}><span className="underlined underlined--thick">maker</span></ShakeSlow> driven by curiosity</h1>
					<br/>
					<h1 className="text">Currently making web apps at 718 Digital</h1>
					<br/>
				</div>
			</section>
		)
	}
}

export default TextBlock