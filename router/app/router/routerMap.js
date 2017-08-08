import React from 'react'
import {Router,Route,IndexRoute} from 'react-router'

import App from '../containers/App'
import Home from '../containers/Home'
import List from '../containers/List'
import Detail from '../containers/Detail'
import NotFound from '../containers/NotFound'


class RouterMap extends React.Component{
	render(){
		<Router history={this.props.history}>
			<Route path='/' component={App}>
				<IndexRoute component={Home} />
				<Route path="list" component={List} />
				<Route path="detail/:id" component={Detail} />
				<Route path="*" component={NotFound} />
			</Route>
		</Router>
	}
}

export default RouterMap
