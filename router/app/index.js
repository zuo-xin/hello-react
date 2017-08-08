import React from 'react'
import {render} from 'react-dom'



import './static/css/common.less'
import {Router,Route,IndexRoute,hashHistory} from 'react-router'
import App from './containers/App'
import Home from './containers/Home'
import List from './containers/List'
import Detail from './containers/Detail'
import NotFound from './containers/NotFound'


render((
	<Router history={hashHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={Home} />
			<Route path="list" component={List} />
			<Route path="detail/:id" component={Detail} />
			<Route path="*" component={NotFound} />
		</Route>
	</Router>
	),document.getElementById("root")
)
