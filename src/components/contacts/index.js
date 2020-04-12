import React, { useState } from 'react';
import { connect } from 'react-redux';

import { deleteContact, updateContact } from './actions';
import NameForm from './form';

const Contact = ({ dispatch, user, listId }) => {
  const {
    firstName, lastname, phone, city,
  } = user;

  const [userFirstName, setUserFirstName] = useState(firstName);
  const [userPhone, setUserPhone] = useState(phone);
  const [userLastName, setUserLastName] = useState(lastname);
  const [userCity, setUserCity] = useState(city);
  const [modify, setModify] = useState(false);

  const handleClick = (contact) => {
    const edit = contact;
    edit.phone = userPhone;
    edit.firstName = userFirstName;
    edit.lastname = userLastName;
    edit.city = userCity;
    dispatch(updateContact(edit));
    setModify(false);
  };
  return (
    <li>
      {
        modify
          ? (
            <div>
              <input type="text" value={userFirstName} name="firstName" onChange={(e) => setUserFirstName(e.target.value)} />
              <input type="text" value={userLastName} name="lastname" onChange={(e) => setUserLastName(e.target.value)} />
              <input type="text" value={userPhone} name="phone" onChange={(e) => setUserPhone(e.target.value)} />
              <input type="text" value={userCity} name="city" onChange={(e) => setUserCity(e.target.value)} />
            </div>
          )
          : (
            <div>
              <span>{`${firstName} ${lastname}`}</span>
              <p>{`Téléphone: ${phone}`}</p>
              <p>{`Ville: ${city}`}</p>
            </div>
          )
      }
      <button
        className="actions delete"
        type="button"
        onClick={() => dispatch(deleteContact(listId))}
      >
        delete moi
      </button>
      {
        modify
          ? <button className="actions validate" type="button" onClick={() => handleClick(user)}> Ok </button>
          : <button className="actions edit" type="button" onClick={() => setModify(true)}> Update </button>
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
