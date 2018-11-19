import React from 'react'
import {Form, Input} from 'antd'
const FormItem = Form.Item;

class Register extends React.Component {
	render(){
		const { getFieldDecorator } = this.props.form;
		return(
			<Form onSubmit={(e) => {console.log(e)}}>
				<FormItem 	label="Email">
					{getFieldDecorator('email', {
						rules:[{
							type:"email", message:"The input is not a valid Email"
						}, {
							required:true, message: 'Please input your Email!'
						}]
					})(<Input />)}
				</FormItem>
			</Form>
		)
	}
}

export default Form.create()(Register)