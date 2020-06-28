import React, { Component } from 'react'

export default class App extends Component {
	/* 
			备注：调用setState会让react去更新状态，状态更新完毕之后react调用render方法去更新页面

			深入理解setState:
					明确：setState()更新状态的两种写法:

						(1).setState(stateChange,[callback])
										1.stateChange是状态改变对象(可以体现出状态的更改)
										2.callback是可选的回调函数，它在状态更新完毕、界面也更新完毕后，被调用。
											
	*/

	state = {
		count:0
	}

	add = ()=>{
		const {count} = this.state
		this.setState({count:count+1},()=>{console.log('setState所指定的回调执行了');})
	}

	render() {
		console.log('render执行了');
		return (
			<div>
				<h1>当前求和为:{this.state.count}</h1>
				<button onClick={this.add}>点我加1</button>
			</div>
		)
	}
}
