import {Route, Redirect} from 'react-router-dom'
import React from 'react'

class LoggedInRoute extends React.Component {
    render() {
        if ( localStorage.getItem("jwt") && localStorage.getItem("User")) {
            return(<Route exact={this.props.exact} path={this.props.to} component={this.props.component} />)
        }
        return (<Redirect to="/login" />)
    }
}
export default LoggedInRoute
