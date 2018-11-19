import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'antd/dist/antd.css';
import LoggedLayout from './containers/layout'
import BasicRouter from './routes'
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

            if (localStorage.getItem("jwt")) {
            const token = localStorage.getItem("jwt")
            axios.get("https://www.todo.dev.matteogassend.com/todos?user="+JSON.parse(localStorage.getItem("User")).id, {
                headers: {Authorization: 'Bearer ' + token}
            }).then(res => {
                this.setState({
                    TodoList: res.data
                })
            })
        }
        },
		handleToDoAdd : (values) => {
            axios.post("https://www.todo.dev.matteogassend.com/todos", {title:values.ToDo, user:JSON.parse(localStorage.getItem("User")).id}, {
                headers: {Authorization: 'Bearer ' + localStorage.getItem('jwt')}
            }).then(
                this.state.getTodos
            )
		},
		handleDelete : (id) => {
            axios.delete("https://www.todo.dev.matteogassend.com/todos/" + id, {
                headers: {Authorization: 'Bearer '+ localStorage.getItem('jwt')}
            }).then(
                this.state.getTodos
            )
		},
        handleLogin : (jwt, User) => {
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
              <Router>
    	      	<LoggedLayout>
                    <BasicRouter />
    	      	</LoggedLayout>
              </Router>
	      </Provider>
      </div>
    );
  }
}

export default App;
export {Context}
