import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LoggedInRoute from './components/LoggedInRoute'
import Login from './containers/Login'
import Register from './containers/Register'
import todoAdd from './containers/todoAdd'
import React from 'react'

class BasicRouter extends React.Component {
    render() {
        return(
            <div>
                <LoggedInRoute exact to="/"  component={todoAdd} />
                <Route  path="/login" exact component={Login}/>
                <Route  path="/register" exact component={Register} />
            </div>
        )
    }
}
export default BasicRouter
