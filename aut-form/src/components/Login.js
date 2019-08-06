import * as React from "react";
import * as Redux from "redux";
import { connect } from 'react-redux';
import { credentialChecker } from '../store/actions';
import { Redirect } from 'react-router-dom';

const login = (props) => {
    const [username, setUsername] = React.useState({ username: '' });
    const [password, setPassword] = React.useState({ password: '' });

    

}