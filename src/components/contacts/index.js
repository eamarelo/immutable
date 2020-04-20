import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  deleteContact, updateContact, searchContact, reinit,
} from './actions';
import NameForm from './form';

/*
* CONTACT method
*/
const Contact = ({ dispatch, user, ids }) => {
  const {
    firstName, lastname, phone, city, picture,
  } = user;
  const [contactFirstName, updateContactFirstName] = useState(firstName);
  const [contactPhone, updateContactPhone] = useState(phone);
  const [contactLastName, updateContactLastName] = useState(lastname);
  const [contactCity, updateContactCity] = useState(city);
  const [update, set] = useState(false);

  /*
* ON CLICK method
*/
  const onClick = (contact) => {
    const edit = contact;
    edit.phone = contactPhone;
    edit.firstName = contactFirstName;
    edit.lastname = contactLastName;
    edit.city = contactCity;
    dispatch(updateContact(edit));
    set(false);
  };

  /*
* ON CLICK render
*/
  return (
    <li>
      {
        update
          ? (
            <div>
              <input type="text" value={contactFirstName} onChange={e => updateContactFirstName(e.target.value)} />
              <input type="text" value={contactLastName} onChange={e => updateContactLastName(e.target.value)} />
              <input type="text" value={contactPhone} onChange={e => updateContactPhone(e.target.value)} />
              <input type="text" value={contactCity} onChange={e => updateContactCity(e.target.value)} />
              <button type="button" onClick={() => onClick(user)}> Ok </button>
            </div>
          )
          : (
            <div>
              <span>{`${firstName} `}</span>
              <span style={{ textTransform: 'uppercase' }}>
                {`${lastname} `}
              </span>
              <p>{`Téléphone: ${phone}`}</p>
              <p>{`Ville: ${city}`}</p>
              <img alt="" src={`${picture} `} />
              <div>
                <button
                  type="button"
                  onClick={() => dispatch(deleteContact(ids))}
                >
                  Delete
                </button>
                <button type="button" onClick={() => set(true)}> Update Contact</button>
              </div>

            </div>
          )
      }
    </li>
  );
};

/*
* ON CHANGE method
*/
const onChange = (e, dispatch, contacts) => {
  const searchText = e.target.value;
  const searchFirstname = contacts
    .filter(contact => contact.firstName.indexOf(searchText) !== -1);
  if (searchFirstname !== '' && searchText !== '') {
    dispatch(searchContact(searchFirstname));
  } else {
    dispatch(reinit(contacts));
  }
};

/*
* SEARCH render
*/
const SearchContact = ({ dispatch, contacts }) => (
  <div className="form-group">
    <label htmlFor="Search">
      search :
      <input type="text" className="form-control" name="Search" onChange={e => onChange(e, dispatch, contacts)} />
    </label>
  </div>
);


/*
* CONTACT render
*/
const Contacts = ({ dispatch, contacts }) => (
  <div>
    <SearchContact dispatch={dispatch} contacts={contacts} />
    <NameForm />
    <ul>
      {contacts.map((user, id) => (
        <Contact
          ids={id}
          key={user.id}
          dispatch={dispatch}
          user={user}
        />
      ))}
    </ul>
  </div>
);

/*
* MAT TO PROPS method
*/
const mapToProps = (state) => {
  const { contacts } = state;
  return ({ contacts });
};

export default connect(mapToProps)(Contacts);
