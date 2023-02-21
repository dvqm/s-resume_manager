import React from 'react';


import {
    auth,
    signInWithGoogle,
    logout, getData,
} from './firebase';
import Button from "@mui/material/Button";
import {Avatar, Box, Typography} from "@mui/material";

class Auth extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            user: null,
            loading: true,
            error: null,
        };

        this.signIn = this.signIn.bind(this);
    }

    setToState = (...params) => {
        let i = 0;

        const recursiveSetToState = () => {
            if (i >= params.length) return;

            const key = params[i];

            const value = params[i + 1];

            i += 2;

            this.setState({...this.state, [key]: value},
                () => {
                    recursiveSetToState()
                }
            );
        }

        recursiveSetToState();
    }

    async signIn() {
        await signInWithGoogle();

        const cvBase = await getData();

        if (this.state.user) this.props.helper.setState('cvBase', cvBase);
    }

    componentDidMount() {
        auth.onAuthStateChanged(user => this.setToState('user', user));
    }

    render = () => {
        return (
            <>
                {this.state.user
                    ? <Dashboard state={this.state}
                                 history={this.props.history}
                                 setToState={this.setToState}
                    />
                    : <>
                        <Button variant="contained" color="primary" size="small" onClick={this.signIn}>Connect with
                            Google</Button>
                    </>
                }
            </>
        )
    }
}

class Dashboard extends React.Component {
    logout = () => {
        logout();

        this.props.setToState('user', null);
    };

    render() {
        const { photoURL, displayName, email } = this.props.state.user;

        return (
            <>
                {this.props.state.user !== null &&
                    <Box>
                        <Avatar alt="User" src={photoURL} />
                        <Typography variant="subtitle1">Hello {displayName}</Typography>
                        <Typography variant="body1">{email}</Typography>
                        <Button variant="contained" color="primary" size="small" onClick={this.logout}>
                            Logout
                        </Button>
                    </Box>
                }
            </>
        );
    }
}

export default Auth;
