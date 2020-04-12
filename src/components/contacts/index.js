import React, { useState } from 'react';
import { connect } from 'react-redux';

import { deleteContact, updateContact } from './actions';
import NameForm from './form';

const Contact = ({ dispatch, user, listId }) => {
  const {
    firstName, lastname, phone, city,
  } = user;

  const [contactFirstName, setcontactFirstName] = useState(firstName);
  const [contactPhone, setcontactPhone] = useState(phone);
  const [contactLastName, setcontactLastName] = useState(lastname);
  const [contactCity, setcontactCity] = useState(city);
  const [modify, update] = useState(false);

  const handleClick = (contact) => {
    const edit = contact;
    edit.phone = contactPhone;
    edit.firstName = contactFirstName;
    edit.lastname = contactLastName;
    edit.city = contactCity;
    dispatch(updateContact(edit));
    update(false);
  };
  return (
    <li>
      {
        modify
          ? (
            <div>
              <input type="text" value={contactFirstName} onChange={(e) => setcontactFirstName(e.target.value)} />
              <input type="text" value={contactLastName} onChange={(e) => setcontactLastName(e.target.value)} />
              <input type="text" value={contactPhone} onChange={(e) => setcontactPhone(e.target.value)} />
              <input type="text" value={contactCity} onChange={(e) => setcontactCity(e.target.value)} />
              <button type="button" onClick={() => handleClick(user)}> Ok </button>
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
              <button
                type="button"
                onClick={() => dispatch(deleteContact(listId))}
              >
                delete moi
              </button>
              <button type="button" onClick={() => update(true)}> Update </button>
            </div>
          )
      }
    </li>
  );
};

const Contacts = ({ dispatch, contacts }) => (
  <div>
    <NameForm />
    <ul>
      {contacts.map((user, id) => (
        <Contact
          listId={id}
          key={user.id}
          dispatch={dispatch}
          user={user}
        />
      ))}
    </ul>
  </div>
);

const mapToProps = (state) => {
  const { contacts } = state;
  return ({ contacts });
};

export default connect(mapToProps)(Contacts);
