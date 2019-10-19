import React, { FormEventHandler } from "react";
import { connect } from 'react-redux';
import "antd/dist/antd.css";
import { Form, Icon, Input, Button, Checkbox } from "antd";

const LoginForm = (props: any) => {

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		props.logIn();
		// this.props.form.validateFields((err, values) => {
		// 	if (!err) {
		// 		console.log("Received values of form: ", values);
		// 	}
		// });
	};

	return (
		<Form onSubmit={(e) => handleSubmit(e)} className="login-form">
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

const mapDispatchToProps = (dispatch: any) => {
	return {
		logIn: () => dispatch({ type: 'SUCCESSFUL_LOGIN' })
	}
}

export default connect(null, mapDispatchToProps)(LoginForm)