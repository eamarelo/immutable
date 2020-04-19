/* eslint-disable */

import React from 'react';
import { connect } from 'react-redux';
import { addContact } from './actions';


/*
* FORM class
*/
class Form extends React.Component {
  constructor() {
    super();

    const random = Math.floor(Math.random() * 101);

    this.state = {
      lastname: '',
      firstname: '',
      phone: '',
      city: '',
      picture: `https://i.picsum.photos/id/${random}/200/200.jpg`,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /*
  * HANDLE SUBMIT method
  */
  handleSubmit(e, contacts) {
    const { dispatch } = this.props;
    e.preventDefault();
    const user = {
      lastname: event.target.lastname.value,
      firstName: event.target.firstname.value,
      phone: event.target.phone.value,
      city: event.target.city.value,
      picture: this.state.picture
    };
    this.setState(user);
    dispatch(addContact(user))
  }

  /*
  * HANDLE INPUT CHANGE method
  */
  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  /*
  * RENDER class
  */
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
