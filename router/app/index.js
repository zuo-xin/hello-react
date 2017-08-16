import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter,Route,Link} from 'react-router-dom'



import './static/css/common.less'
import Home from './containers/Home'
import Topic from './containers/Topic'
import Topics from './containers/Topics'
import About from './containers/About'
import NotFound from './containers/NotFound'


render((
	<Router>
    <div>
      <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/about">关于</Link></li>
        <li><Link to="/topics">主题列表</Link></li>
      </ul>
      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
	),document.getElementById("root")
)
