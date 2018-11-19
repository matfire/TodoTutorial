import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {Link} from 'react-router-dom'
import {Context} from '../App'
import axios from 'axios';

const FormItem = Form.Item;

class Login extends React.Component {
    state = {
      jwt: "",
      user: {}
    }
    handleLogin = (e) => {
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          axios.post("https://todo.dev.matteogassend.com/auth/local", {
            identifier: values.userName,
            password: values.password
          }).then(res => {
            console.log(res.data)
            localStorage.setItem("jwt", res.data.jwt)
            localStorage.setItem("User", JSON.stringify(res.data.user))
            this.props.history.push("/")
          })
        }
      });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
                <Form onSubmit={(e) => {e.preventDefault();this.handleLogin(e)}}>
                <FormItem>
                    {getFieldDecorator('userName', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                  })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                  )}
                </FormItem>
                  <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                  </Button>
                    Or <Link to="/register">register now!</Link>
                  </Form>
        )
    }
}

export default Form.create()(Login)
