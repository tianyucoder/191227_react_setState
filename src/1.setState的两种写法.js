import React, { Component } from 'react'

export default class App extends Component {
/* 
	react更新界面的流程：调用setState会触发react去更新状态，状态更新完毕之后react调用render方法去更新页面

	深入理解setState:
			setState()更新状态的两种写法:

				(1).setState(stateChange,[callback])--------对象式的setState(常用)
							1.stateChange是状态改变对象(可以体现出状态的更改)
							2.callback是可选的回调函数，它在状态更新完毕、界面也更新完(render调用完)毕后，被调用。
				
				(2).setState(updater,[callback])---------函数式的setState
							1.updater为返回stateChange对象的函数。
							2.updater可以接收到state、props，即：(state,props)=>stateChange。
							3.updater可以保证自己接受到的state和props是最新的。
							4.callback是可选的回调函数，它在状态更新完毕、界面也更新完(render调用完)毕后，被调用。
			总结：
					1.对象式的setState是函数式的简写(语法糖)
					2.使用原则：
							(1).如果新状态不依赖于原状态====>使用对象式的setState
							(2).如果新状态依赖于原状态====>使用函数式的setState
	*/

	state = {
		count:0
	}

	add = ()=>{
		//第一种：对象式的setState
		//1.获取原状态
		const {count} = this.state
		//2.更新状态(对象式)
		this.setState({count:count+1}) 
		//3.输出更新完的状态看一看
		console.log(this.state.count);
		
		//第二种：函数式的setState
		//this.setState( state =>({count:state.count+1}))
	}

	change = ()=>{
		//对象式的setState
		//this.setState({count:100})
	}

	render() {
		console.log('render执行了',this.state.count);
		return (
			<div>
				<h1>当前求和为:{this.state.count}</h1>
				<button onClick={this.add}>点我加1</button>
				<button onClick={this.change}>点我改为100</button>
			</div>
		)
	}
}
