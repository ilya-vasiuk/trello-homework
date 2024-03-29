import React, { Component } from 'react'
import { withRouter } from "react-router-dom";

import Input from '../../components/input'
import connect from '../../core/store/connector'
import { signup } from '../../middleware/auth'

class SignUpContainer extends Component {
  constructor(props) {
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      name: '',
      email: '',
      password: '',
    }
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    });
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    this.props.signup(this.state, this.props.history)
  }

  render() {
    const { inProgress } = this.props
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <Input
            value={this.state.name}
            type='text'
            placeholder = 'name'
            disabled={inProgress}
            onChange={this.handleNameChange}
          />
        </div>
        <div>
          <Input
            value={this.state.email}
            type='email'
            placeholder = 'email'
            disabled={inProgress}
            onChange={this.handleEmailChange}
          />
        </div>
        <div>
          <Input
            value={this.state.password}
            type='password'
            placeholder = 'password'
            disabled={inProgress}
            onChange={this.handlePasswordChange}
          />
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    )
  }
}

const mapDispatchToProps = {
  signup,
}

function mapStateToProps(state) {
  const { inProgress } = state.auth
  return { inProgress }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignUpContainer));