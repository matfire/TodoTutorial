import React from 'react'
import Todo from '../components/ToDo'
import {List} from 'antd'
import {Context} from '../App'

class TodoList extends React.Component {
	render() {
		return (
			<Context.Consumer>
			{(context) => (
			<List>
			{context.state.TodoList.map(todo => <Todo key={todo.id} title={todo.title} id={todo.id}/>)}
			</List> )}
			</Context.Consumer>
		)
	}
}

export default TodoList
