import React from 'react';


import {
    auth,
    signInWithGoogle,
    logout, getData,
} from './firebase';

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
                        <button onClick={this.signIn}>Connect with Google</button>
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
        return (
            <p>
                {this.props.state.user !== null &&
                    <>
                        <img src={this.props.state.user.photoURL} alt='user profile picture'/>
                        <span>Hello {this.props.state.user.displayName}</span>
                        <span>{this.props.state.user.email}</span>
                        <button onClick={this.logout}>Logout</button>
                    </>
                }
            </p>
        );
    }
}

export default Auth;