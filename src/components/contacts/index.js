import React from 'react';
import { connect } from 'react-redux';

import NameForm from './form';

const Contact = ({ user }) => {
  const { firstName, phone } = user;

  return (
    <li>
      <span>{`${firstName} ${phone} `}</span>
    </li>
  );
};

const Contacts = ({ dispatch, items }) => (
  <div>
    <NameForm />
    <ul>
      {items.map((user) => (
        <Contact
          key={user.id}
          dispatch={dispatch}
          user={user}
        />
      ))}
    </ul>
  </div>
);

const mapToProps = (state) => {
  const { items } = state.contacts;

  return ({ items });
};

export default connect(mapToProps)(Contacts);
