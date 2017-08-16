import React from 'react'

class App extends React.Component{
	render(){
		return(
			<div>
			<p>head</p>
			{this.props.children}
			<p>foot</p>
			</div>
		)
	}
}

export default App
