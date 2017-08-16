import React from 'react'
import { BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Topic from '../Topic'

class Topics extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		console.log(this.props.match)
		return(
			<div>
				<h2>主题列表</h2>
				<ul>
					<li>
						<Link to={`${this.props.match.url}/rendering`}>使用react渲染</Link>
					</li>
					<li>
						<Link to={`${this.props.match.url}/components`}>组件</Link>
					</li>
					<li>
						<Link to={`${this.props.match.url}/props-v-state`}>属性V 状态</Link>
					</li>
				</ul>
				<Route path={`${this.props.match.url}/:topicId`} component={Topic}></Route>
				<Route exact path={this.props.match.url} render={()=>(<h3>请选择一个主题</h3>)}></Route>
			</div>
		)
	}
}

export default Topics
