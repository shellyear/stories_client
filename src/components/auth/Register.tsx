import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { postSignup } from '../../store/actions/authActions';
import { clearLoginError } from '../../store/actions/authActions';

interface IProps {
  onSignup: Function,
  onClearLoginError: Function,
  errors: IErrors,
  logged: boolean,
  loading: boolean
}

interface IErrors {
  email: {
    message: string
  },
  username: {
    message: string
  },
  passwordConfirm: string
}

interface IFormState {
  [x: string]: string
}

class Register extends Component<IProps, IFormState> {

  state: IFormState = {
    username: "",
    email: "",
    password: "",
    confirm_password: "",
    confirmErr: ''
  }

  componentWillUnmount = () => {
    const { onClearLoginError } = this.props;
    this.setState({
      username: "",
      email: "",
      password: "",
      confirm_password: "",
      confirmErr: ''
    });
    onClearLoginError();
  }
  
  handleChange = (e: any) => {
      this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit = (e: any) => {
      e.preventDefault();
      const { username, email, password, confirm_password } = this.state;
      const { onSignup } = this.props;

      if (password !== confirm_password) {
          this.setState({
            confirmErr: "password don't match"
          });
          return null;
      }

      const newUser = {
        username,
        email,
        password
      }

      JSON.stringify(newUser);
      onSignup(newUser);
  }


  public render() {
    const { errors: { email, username}, logged, loading } = this.props;
    if (logged) return <Redirect to='/' />

    return (
      <main>
          <form onSubmit={this.handleSubmit}>
            <h2>Register below</h2>
            <p>Already have an account? 
              <Link to="/login"><span className='form-link'> Log in</span></Link>
            </p>
              <input 
                required
                id="username"
                placeholder='Username' 
                type="text" 
                value={this.state.username} 
                onChange={this.handleChange} 
              />
              { username && <p className='form-error'>{ username.message }</p>}
              <input 
                required
                id="email" 
                placeholder='Email'
                type="text"
                pattern="[^@\s]+@[^@\s]+" 
                title="email: testing@testing.com"  
                value={this.state.email} 
                onChange={this.handleChange} 
                />
               { email && <p className='form-error'>{ email.message }</p>} 
              <input 
                required
                placeholder='Password'
                id="password" 
                type="password"
                pattern=".{6,}" 
                title="Six or more characters"
                value={this.state.password} 
                onChange={this.handleChange} 
                />
              <input 
                required
                id="confirm_password"
                placeholder='Confirm password' 
                type="password"
                pattern=".{6,}" 
                title="Six or more characters" 
                value={this.state.confirm_password} 
                onChange={this.handleChange} 
              />
              { this.state.confirmErr && <p className='form-error'>{ this.state.confirmErr }</p> }
              { loading && <p>Please wait...</p>}
              <div className="btn-group">
                <Link className='btn-cancel' to='/'>Cancel</Link>
                <button 
                  className='btn-submit' 
                  type="submit"
                  disabled={loading}
                >
                Submit
                </button>
              </div>
          </form>
      </main>
    );
  }
}

const mapStateToProps = (state: any) => {
    return {
      errors: state.auth.loginErr,
      logged: state.auth.logged,
      loading: state.auth.isLoading
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
      onSignup: (newUser: any) => dispatch(postSignup(newUser)),
      onClearLoginError: () => dispatch(clearLoginError())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);