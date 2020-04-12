import { List } from 'immutable';
import actionsTypes from './actions-types';

const CONSTANTS = {
  createContact: actionsTypes.ADD_CONTACT,
  deleteContact: actionsTypes.DELETE_CONTACT,
  updateContact: actionsTypes.UPDATE_CONTACT,
  searchContact: actionsTypes.SEARCH_CONTACT,
  initialContact: actionsTypes.INIT_CONTACT,
};

const initialState = {
  items: [{
    id: 0,
    firstName: 'Elies',
    lastname: 'AMARELO',
    phone: '0635163370',
    city: 'Valencia',
  }, {
    id: 1,
    firstName: 'Jasmine',
    lastname: 'AMARELO',
    phone: '0635198240',
    city: 'Gandia',
  }, {
    id: 2,
    firstName: 'Jaime',
    lastname: 'AMARELO',
    phone: '0152368820',
    city: 'Daimus',
  }, {
    id: 3,
    firstName: 'Maria-Jesus',
    lastname: 'Valor Iznardo',
    phone: '0601523688',
    city: 'Paris',
  }, {
    id: 4,
    firstName: 'Katy',
    lastname: 'AMARELO',
    phone: '0635356700',
    city: 'Paris',
  }, {
    id: 5,
    firstName: 'Mango',
    lastname: 'Petitchien',
    phone: '0665201480',
    city: 'Beniarjo',
  }, {
    id: 6,
    firstName: 'JP',
    lastname: 'CAILLET',
    phone: '0612345678',
    city: 'Suresnes',
  }, {
    id: 7,
    firstName: 'Cyril',
    lastname: 'Vimard',
    phone: '0612345678',
    city: 'London',
  }],
};
const addContact = (state, action) => List(state).push(action.contact).toJS();

const deleteContact = (state, action) => List(state).remove(action.id);

const editContact = (state, action) => ({
  items: state.items.map((contact) => {
    if (contact.id === action.contact.id) {
      return Object.assign(contact, action.contact);
    }
    return contact;
  }),
});


export default (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.createContact:
      return addContact(state, action);
    case CONSTANTS.deleteContact:
      return deleteContact(state, action);
    case actionsTypes.EDIT_CONTACT:
      return editContact(state, action);
    default:
      return state.items;
  }
};
