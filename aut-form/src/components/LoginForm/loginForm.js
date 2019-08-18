import React from "react";
import { connect } from 'react-redux';
import "antd/dist/antd.css";
import { Form, Icon, Input, Button, Checkbox } from "antd";

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			identifier: "",
			password: "",
			errors: {},
			isLoading: false
		}
	}

	handleSubmit = e => {
		e.preventDefault();
		this.props.logIn();
		// this.props.form.validateFields((err, values) => {
		// 	if (!err) {
		// 		console.log("Received values of form: ", values);
		// 	}
		// });
	};

	render() {
		return (
			<Form onSubmit={this.handleSubmit} className="login-form">
				<Form.Item>
					<Input
						prefix={
							<Icon
								type="user"
								style={{ color: "rgba(0,0,0,.25)" }}
							/>
						}
						placeholder="Username"
					/>
				</Form.Item>
				<Form.Item>
					<Input
						prefix={
							<Icon
								type="lock"
								style={{ color: "rgba(0,0,0,.25)" }}
							/>
						}
						type="password"
						placeholder="Password"
					/>
				</Form.Item>
				<Form.Item>
					<Checkbox>Remember me</Checkbox>
					<a className="login-form-forgot" href="">
						Forgot password
					</a>
					<Button
						type="primary"
						htmlType="submit"
						className="login-form-button"
					>
						Log in
					</Button>
					Or <a href="">register now!</a>
				</Form.Item>
			</Form>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		logIn: () => dispatch({ type: 'SUCCESSFUL_LOGIN' })
	}
}

export default connect(null, mapDispatchToProps)(LoginForm)