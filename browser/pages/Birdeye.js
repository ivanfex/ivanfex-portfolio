import React, { Component } from 'react'

class BirdeyeBlock extends Component {
	constructor(){
		super()
		this.state = {
			firstParts: [],
			lastParts: [],
			centers: [],
			center: null
		}
		this.skyscape = this.skyscape.bind(this)
		this.setter = this.setter.bind(this)
	}

	componentDidMount(){
		this.skyscape()
		
	}

	skyscape(){
		const firstParts = []
		const lastParts = []
		const centers = []
		for(let i = 1; i < 7; i++){
			firstParts.push(<div key={i} onMouseEnter={() => this.setter(i)} className="part"></div>)
		}

		for(let i = 1; i < 14; i++){
			const center = <div className="eyes-container" onMouseEnter={() => this.setter(13)} ><img className="eyes" key={13} src={`/nums/${i}.png`}/></div>
			centers.push(center)
		}

		for(let i = 7; i < 13; i++){
			lastParts.push(<div key={i} onMouseEnter={() => this.setter(i)} className="part"></div>)
		}

		this.setState({firstParts, lastParts, centers})
	}

	setter(num) {
		this.setState({center: this.state.centers[num - 1]})
	}

	render(){
		const {firstParts, lastParts, center} = this.state
		return (
			<section className="birdeye-block blocky-block">
				<div className="cloud-container">
					{[firstParts, center, lastParts]}
				</div>
			</section>
		)
	}
}

export default BirdeyeBlock