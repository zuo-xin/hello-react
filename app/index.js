import React from 'react'
import {render} from 'react-dom'

import './css/common.less'

// class Hello extends React.Component{
// 	render(){
// 		return(
// 			<p>Hello react</p>
// 		)
// 	}
// }
import Hello from '.components/app1.js'

render(
	<Hello />,
	document.getElementById("app")
)
