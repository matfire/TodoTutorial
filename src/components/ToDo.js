import React from 'react'
import { List, Avatar, Button, Skeleton, Icon } from 'antd';
import {Context} from '../App'


class ToDo extends React.Component {
	state = {}
	render() {
		return (
			<Context.Consumer>
				{(context) => (
			<List.Item actions={[<Icon type="delete" theme="outlined" onClick={() => context.state.handleDelete(this.props.id)}/>]}>
			<List.Item.Meta
				title={this.props.title}
				/>
			</List.Item>)}
			</Context.Consumer>
		)
	}
}

export default ToDo
