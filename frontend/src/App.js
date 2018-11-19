import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import 'antd/dist/antd.css';
import LoggedLayout from './containers/layout'
import TodoList from './containers/TodoList'
import AddForm from './components/AddForm'
import axios from 'axios'

const Context = React.createContext()

class Provider extends React.Component {
	state = {
		email:"",
		username:"",
		first_name:"",
		last_name:"",
		TodoList : [],
        getTodos: () => {
            axios.get("https://www.todo.dev.matteogassend.com/todos").then(res => {
                this.setState({
                    TodoList: res.data
                })
            })
        },
		handleToDoAdd : (values) => {
            axios.post("https://www.todo.dev.matteogassend.com/todos", {title:values.ToDo}).then(
                this.state.getTodos
            )
		},
		handleDelete : (id) => {
            axios.delete("https://www.todo.dev.matteogassend.com/todos/" + id).then(
                this.state.getTodos
            )
		}
        handleLogin: (jwt, User) => {
            localStorage.setItem("jwt", jwt)
            localStorage.setItem("User", JSON.stringify(User))
        }
	}
	getNextId = () => {
		return this.state.TodoList.length + 1
	}
    componentDidMount() {
        this.state.getTodos()
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
