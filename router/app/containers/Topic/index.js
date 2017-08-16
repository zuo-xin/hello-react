import React from 'react'
//import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

class Topic extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div>
				<h3>{this.props.match.params.topicId}</h3>
			</div>
		)
	}
}

export default Topic
