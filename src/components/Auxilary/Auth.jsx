import React from "react";
import {
    auth,
    db,
    registerWithEmailAndPassword,
    sendPasswordReset,
    signInWithGoogle,
    logout
} from "./firestore";

export class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        email: "",
        password: "",
        user: null,
        error: null,
        loading: true
    };

    componentDidMount() {
        auth.onAuthStateChanged(user => {
            this.setState({user, loading: false});
            if (user) {
                this.props.history.push("/dashboard");
            }
        });
    }

    handleEmailChange = event => {
        this.setState({email: event.target.value});
    };

    handlePasswordChange = event => {
        this.setState({password: event.target.value});
    };

    handleLogin = () => {
        registerWithEmailAndPassword(this.state.email, this.state.password);
    };

    handleGoogleLogin = () => {
        signInWithGoogle();
    };

    render() {
        return (
            <div className="login">
                <div className="login__container">
                    <input
                        type="text"
                        className="login__textBox"
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                        placeholder="E-mail Address"
                    />
                    <input
                        type="password"
                        className="login__textBox"
                        value={this.state.password}
                        onChange={this.handlePasswordChange}
                        placeholder="Password"
                    />
                    <button
                        className="login__btn"
                        onClick={this.handleLogin}
                    >
                        Login
                    </button>
                    <button
                        className="login__btn login__google"
                        onClick={this.handleGoogleLogin}
                    >
                        Login with Google
                    </button>
                </div>
            </div>
        );
    }
}

export class Register extends React.Component {
    state = {
        name: "",
        email: "",
        password: "",
        user: null,
        loading: true,
        error: null
    };

    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            this.setState({
                user,
                loading: false
            });
        });
    }

    handleNameChange = (e) => {
        this.setState({name: e.target.value});
    };

    handleEmailChange = (e) => {
        this.setState({email: e.target.value});
    };

    handlePasswordChange = (e) => {
        this.setState({password: e.target.value});
    };

    handleRegister = () => {
        if (!this.state.name) {
            alert("Please enter name");
            return;
        }
        registerWithEmailAndPassword(this.state.name, this.state.email, this.state.password);
    };

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                    placeholder="Full Name"
                />
                <input
                    type="text"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                    placeholder="E-mail Address"
                />
                <input
                    type="password"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                    placeholder="Password"
                />
                <button onClick={this.handleRegister}>Register</button>
                <button onClick={signInWithGoogle}>Register with Google</button>
            </div>
        );
    }
}

export class Reset extends React.Component {
    state = {
        email: "",
    };

    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.props.history.push("/dashboard");
            }
        });
    }

    handleEmailChange = (event) => {
        this.setState({email: event.target.value});
    };

    handlePasswordReset = () => {
        sendPasswordReset(this.state.email);
    };

    render() {
        return (
            <div className="reset">
                <div className="reset__container">
                    <input
                        type="text"
                        className="reset__textBox"
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                        placeholder="E-mail Address"
                    />
                    <button
                        className="reset__btn"
                        onClick={this.handlePasswordReset}
                    >
                        Send password reset email
                    </button>
                </div>
            </div>
        );
    }
}

export class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            name: "",
            loading: true,
        };
    }

    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            if (!user) {
                this.props.history.push("/");
            }
            this.setState({user, loading: false});
            this.fetchUserName();
        });
    }

    fetchUserName = () => {
        db.collection("users")
            .where("uid", "==", this.state.user.uid)
            .get()
            .then((querySnapshot) => {
                const data = querySnapshot.docs[0].data();
                this.setState({name: data.name});
            })
            .catch((error) => {
                console.error(error);
                alert("An error occured while fetching user data");
            });
    };

    logout = () => {
        logout();
    };

    render() {
        if (this.state.loading) {
            return <div>Loading...</div>;
        }
        return (
            <div>
                <div>
                    Logged in as
                    <div>{this.state.name}</div>
                    <div>{this.state.user.email}</div>
                    <button onClick={this.logout}>Logout</button>
                </div>
            </div>
        );
    }
}
