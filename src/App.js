import React, { Component } from 'react'

export default class App extends Component {
/* 

*/

	state = {
		count:0
	}
	
	render() {
		console.log('render执行了',this.state.count);
		return (
			<div>
				<h1 ref="text">当前求和为:{this.state.count}</h1>
				<button onClick={this.update1}>更新1</button>&nbsp;
				<button onClick={this.update2}>更新2</button>&nbsp;
				<button onClick={this.update3}>更新3</button>&nbsp;
				<button onClick={this.update4}>更新4</button>&nbsp;
			</div>
		)
	}
}