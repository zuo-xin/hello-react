import React from 'react'

import Header from '../../components/Header'
import Carousel from './subpage/Carousel'
import Recommend from './subpage/Recommend'
import List from './subpage/List'


class Hello extends React.Component{
	constructor(props,context){
		super(props,context)
		console.log(props)
		console.log(context)
		this.state = {
			now: Date.now()
		}
	}
	render(){
		return(
			<div>
				<Header title="hello页面"/>
				<p onClick={this.clickHander.bind(this)}>hello world {this.state.now}</p><hr/>
				<Carousel />
				<Recommend />
				<List />
			</div>
		)
	}
	clickHander(){
		this.setState({
			now:Date.now()
		})
	}
}

export default Hello
