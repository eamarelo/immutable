/* eslint-disable */

import React from 'react';
import { connect } from 'react-redux';
import { addContact } from './actions';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      lastname: '',
      firstname: '',
      phone: '',
      city: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const { dispatch } = this.props;
    console.log(event.target.lastname.value)
    e.preventDefault();
    const user = {
      lastname: event.target.lastname.value,
      firstName: event.target.firstname.value,
      phone: event.target.phone.value,
      city: event.target.city.value,
    };
    this.setState(user);
    dispatch(addContact(user))
    console.log(user);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { data } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="firstname">
          Firstname :
          <input type="text" id="firstname" name="firstname" value={data} onChange={this.handleInputChange} />
        </label>
        <label htmlFor="lastName">
          Lastname :
          <input type="text" id="lastname" name="lastname" value={data} onChange={this.handleInputChange} />
        </label>
        <label htmlFor="phone">
          Phone :
          <input type="text" id="phone" name="phone" value={data} onChange={this.handleInputChange} />
        </label>
        <label htmlFor="City">
          City :
          <input type="text" id="City" name="city" value={data} onChange={this.handleInputChange} />
        </label>
        <input type="submit" value="Créer" />
      </form>
    );
  }
}

export default connect()(Form);
