import React from 'react'
import {render} from 'react-dom'

import './static/css/common.less'

import Todo from './containers/Todo'
render(
	<Todo />,
	document.getElementById('root')
)
