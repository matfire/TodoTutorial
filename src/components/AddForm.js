import React from 'react'
import {Form, Input, Button, message} from 'antd'
import {Context} from '../App'

const FormItem = Form.Item;



class AddsForm extends React.Component {

	state = {
		"message" : ""
	}
	render() {
		const { getFieldDecorator } = this.props.form;

	        const formItemLayout = {
	          labelCol: {
	            xs: { span: 24 },
	            sm: { span: 8 },
	          },
	          wrapperCol: {
	            xs: { span: 24 },
	            sm: { span: 16 },
	          },
	        };
		const tailFormItemLayout = {
      			wrapperCol: {
				xs: {
					span: 24,
					offset: 0,
				},
				sm: {
					span: 16,
					offset: 8,
				},
			},
		};

		return (
			<Context.Consumer>
			{(context) => (
			<Form onSubmit={(e) => {
				e.preventDefault();
				this.props.form.validateFields((err, values) => {
					if (!err) {
						context.state.handleToDoAdd(values)
						message.success("ToDo added")
						this.setState({message:""})
						this.props.form.resetFields()
					}
				});
			}}>
				<FormItem
					{...formItemLayout}
		                	label="ToDo"
				>
				{getFieldDecorator('ToDo', {
	  				rules: [{
						required: true, message: 'Please input A Todo',
					}],
					initialValue: this.state.message
				})(
	  				<Input placeholder="Add a new todo" onChange={this.handleChangeInput}/>
				)}
				</FormItem>
				<FormItem {...tailFormItemLayout}>
					<Button type="primary" htmlType="submit">Add</Button>
				</FormItem>
			</Form>)}
			</Context.Consumer>

		)
	}
}


const AddForm = Form.create()(AddsForm);
export default AddForm
