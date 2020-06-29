import React, { Component } from 'react'

export default class App extends Component {
	/* 
		
		关于异步的setState()连续多次调用的问题：
				(1).多次调用，如何处理？
							(a).若是对象式的setState，即：setState({})
									多次更新状态的动作合并为一次(只以最后一次为准),所以很自然的就调用一次render
									【简记：更新的动作、render的调用，均合并成一次，且以最后一次为准】
							(b).若是函数式的setState，即：setState(()=>{})
									每次更新的动作都会生效(更新的动作不合并)，但是只会调用一次render
									【简记：更新状态的动作没有合并，但render合并】
				(2).注意点：
							若函数式setState和对象式setState混用的时候，要把函数式写在最后
				(3).如何得到异步更新后的状态？
							在setState所指定的那个回调里面


		备注：同步的setState是没有任何问题的，写一次就立刻更新一次，所以不研究
	*/

	state = {
		count:0
	}

	/* 	关于异步的setState()连续多次调用的问题 */
	//在由react所控制的update1中，连续4次调用setState({})
	update1 = ()=>{
		// console.log('调用setState之前',this.state.count);
		// this.setState({count:this.state.count+1})
		// this.setState({count:this.state.count+2})
		// this.setState({count:this.state.count+3})
		// this.setState({count:this.state.count+100})
		// console.log('调用setState之后',this.state.count);
	}

	//在由react所控制的update2中，连续4次调用setState({})
	update2 = ()=>{
		console.log('调用setState之前',this.state.count);
		this.setState(state => ({count:state.count+1}))
		this.setState(state => ({count:state.count+2}))
		this.setState(state => ({count:state.count+3}))
		this.setState(state => ({count:state.count+4}))
		console.log('调用setState之后',this.state.count);
	}

	//在由react所控制的update3中，连续2次调用setState(),第一次使用对象式，第二次使用函数式
	update3 = ()=>{
		// console.log('调用setState之前',this.state.count);
		// this.setState({count:this.state.count+1}) //对象式
		// this.setState(state => ({count:state.count+2})) //函数式
		// console.log('调用setState之后',this.state.count);
	}

	//在由react所控制的update4中，连续2次调用setState(),第一次使用函数式，第二次使用对象式
	update4 = ()=>{
		// console.log('调用setState之前',this.state.count);
		// this.setState(state => ({count:state.count+1})) //函数式
		// this.setState({count:this.state.count+2}) //对象式
		// console.log('调用setState之后',this.state.count);
	}

	update5  = ()=>{
		this.setState({count:9000},()=>{
			console.log(this.state.count);
		})
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
				<button onClick={this.update5}>更新5</button>&nbsp;
			</div>
		)
	}
}