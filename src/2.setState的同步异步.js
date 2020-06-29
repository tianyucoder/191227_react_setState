import React, { Component } from 'react'

export default class App extends Component {
/* 
		setState()更新状态的动作是同步还是异步的？------看它的执行位置
				setState()执行的位置对其后续动作的影响：
						1.在由react所控制的回调函数中更新的动作是【异步】的。
								生命周期钩子 / react所监听的事件。
						2.在非react控制的异步回调函数中更新的动作是【同步】的。
								定时器的回调 / 原生事件监听回调 /Promise所指定的成功、失败回调 / ajax所指定的成功或失败的回调
*/


	state = {
		count:0
	}

	//在react生命周期钩子中，setState执行更新的动作是异步的
	componentDidMount(){
		// console.log('调用setState之前',this.state.count);
		// this.setState({count:1})
		// console.log('调用setState之后',this.state.count);
	}

	//在react所监听的事件回调中，setState执行更新的动作是异步的
	update1 = ()=>{
		// console.log('调用setState之前',this.state.count);
		// this.setState({count:1})
		// console.log('调用setState之后',this.state.count);
	}

	//在定时器的回调中，setState执行更新的动作是同步的
	update2 = ()=>{
		/* setTimeout(()=>{
			console.log('调用setState之前',this.state.count);
			this.setState({count:1})
			console.log('调用setState之后',this.state.count);
		},500) */
	}

	//在原生事件监听回调，setState执行更新的动作是同步的
	update3 = ()=>{
		/* const h1 = this.refs.text
		h1.onclick = ()=>{
			console.log('调用setState之前',this.state.count);
			this.setState({count:1})
			console.log('调用setState之后',this.state.count);
		} */
	}

	//在Promise所指定的成功、失败回调，setState执行更新的动作是同步的
	update4 = ()=>{
		/* Promise.resolve('ok').then(()=>{
			console.log('调用setState之前',this.state.count);
			this.setState({count:1})
			console.log('调用setState之后',this.state.count);
		}) */
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