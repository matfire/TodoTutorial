import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import 'antd/dist/antd.css';
import LoggedLayout from './containers/layout'
import TodoList from './containers/TodoList'
import AddForm from './components/AddForm'


const Context = React.createContext()

class Provider extends React.Component {
	state = {
		email:"",
		username:"",
		first_name:"",
		last_name:"",
		TodoList : [{title:"test", id:1},{title:"test2", id:2}],
		handleToDoAdd : (values) => {
			this.setState({
				TodoList: [...this.state.TodoList, {title:values.ToDo, id:this.getNextId()}]
			})
		},
		handleDelete : (id) => {
			var newArray = this.state.TodoList.filter(item => item.id !== id)
			this.setState({
				TodoList: newArray
			})
		}
	}
	getNextId = () => {
		return this.state.TodoList.length + 1
	}
	render() {
		return(
			<Context.Provider value={{
					state : this.state
				}}>
				{this.props.children}
			</Context.Provider>
		)
	}
}

class App extends Component {
  render() {
    return (
      <div className="App">
	      <Provider>
	      	<LoggedLayout>
			<TodoList/>
			<AddForm />
	      	</LoggedLayout>
	      </Provider>
      </div>
    );
  }
}

export default App;
export {Context}
