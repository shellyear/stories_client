import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { postLogin, clearLoginError } from '../../store/actions/authActions';


interface IProps {
    onLogin: Function,
    onClearLoginError: Function,
    logged: boolean,
    err: object,
    loading: boolean
}

interface IFormState {
    [x: string]: string
}

class Login extends Component<IProps, IFormState> {

    state: IFormState = {
        email: "",
        password: ""
    }
    
    componentWillUnmount = () => {
        const { onClearLoginError } = this.props;
        this.setState({
            email: "",
            password: ""
        });
        onClearLoginError();
    }
    
    handleChange = (e: any) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e: any) => {
        e.preventDefault();
        const { email, password } = this.state;
        const { onLogin } = this.props;

        const logUser = {
            email,
            password
        }

        JSON.stringify(logUser);
        onLogin(logUser);
    }
    

    render() {
        const { logged, err, loading } = this.props;
        if (logged) return <Redirect to='/' />
        
        return (
            <main>
                <form onSubmit={this.handleSubmit}> 
                <h2>Please log in to continue</h2>
                <p>Don't have an account ? 
                    <Link to='/signup'>
                        <span className='form-link'> Sign up</span>
                    </Link>
                </p>
                <input 
                    id="email"
                    type="email" 
                    placeholder="Email" 
                    value={this.state.email} 
                    onChange={this.handleChange} 
                    min='4'
                    pattern="[^@\s]+@[^@\s]+" 
                    title="email: testing@testing.com"  
                    autoFocus
                    required    
                />
                <input 
                    id="password" 
                    type="password"
                    placeholder="Password" 
                    value={this.state.password} 
                    onChange={this.handleChange}
                    pattern=".{6,}" 
                    title="Six or more characters"
                    required
                />
                { err && <p className="form-error">{err}</p> }
                { loading && <p>Please wait...</p>}
                <div className="btn-group">
                    <Link className='btn-cancel' to='/'>Cancel</Link>
                    <button 
                        className='btn-submit'
                        type="submit"
                        disabled={loading}
                    >
                    Log in
                    </button>
                </div>
                </form>
            </main>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        logged: state.auth.logged,
        loading: state.auth.isLoading,
        err: state.auth.loginErr
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onLogin: (credentials: IFormState) => dispatch(postLogin(credentials)),
        onClearLoginError: () => dispatch(clearLoginError())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);