import TodoList from '../containers/TodoList'
import AddForm from '../components/AddForm'
import React from 'react'
const todoAdd = (props) => {
    return(
        <React.Fragment>
        <TodoList/>
        <AddForm />
        </React.Fragment>
    )
}
export default todoAdd
