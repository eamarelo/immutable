import React from 'react';
import { connect } from 'react-redux';

import { addContact } from './actions';

const Contact = ({ dispatch, user }) => {
  const { firstName, phone } = user;

  return (
    <li>
      <span>{`${firstName} ${phone} `}</span>
      <button
        type="button"
        onClick={() => dispatch(addContact({ firstName, phone }))}
      >
        Delete
      </button>
    </li>
  );
};

// const Forms = ({ dispatch, user }) => {
//   const { firstName, phone } = user;
//   return (
//     <form>
//       <label htmlFor="firstName">
//         Firstname :
//         <input type="text" name="firstName" id="firstName" />
//       </label>
//       <label htmlFor="lastName">
//         Lastname :
//         <input type="text" name="lastname" id="lastName" />
//       </label>
//       <label htmlFor="phone">
//         Phone :
//         <input type="number" max="9999999999" name="phone" id="phone" />
//       </label>
//       <label htmlFor="city">
//         City :
//         <input type="text" name="city" id="city" />
//       </label>
//       <input
//         onClick={() => dispatch(addContact({ firstName, phone }))}
//         type="submit"
//         value="Envoyer"
//       />
//     </form>
//   );
// };

const Contacts = ({ dispatch, items }) => (
  <div>
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
