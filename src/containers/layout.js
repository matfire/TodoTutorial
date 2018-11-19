import { Layout, Menu, Breadcrumb, Avatar } from 'antd';
import React from 'react'
import {Context} from '../App'
import md5 from 'js-md5';
const { Header, Content, Footer } = Layout;

class LoggedLayout extends React.Component {
	state = {}

	get_gravatar_url = (email) => {
			const hash=md5(email)
			return("https://www.gravatar.com/avatar/".concat(hash))
	}
	render() {
		return (
			<Context.Consumer>
			{(context) => {
				return (
			<Layout className="layout">
    				<Header>
      					<div className="logo" />
					<div style={{textAlign:"right"}}>
					<Avatar onClick={() => console.log("clicked")} src={this.get_gravatar_url(context.state.email)}/>
					</div>
				</Header>
				<Content style={{ padding: '0 50px' }}>
				    	<div style={{ background: '#fff', padding: 24, minHeight: 280 }}>{this.props.children}</div>
				</Content>
				<Footer style={{ textAlign: 'center' }}>
				      React Todo ©2018 Created by Matteo Gassend UED
				</Footer>
			</Layout>
			)}}
			</Context.Consumer>
		)
	}
}

export default LoggedLayout
