import { List } from 'immutable';
import actionsTypes from './actions-types';
import { MyImmutable } from '../../myImmutable';

/*
 ** CONSTANTS ACTIONS Contact
 */
const CONSTANTS = {
  createContact: actionsTypes.ADD_CONTACT,
  deleteContact: actionsTypes.DELETE_CONTACT,
  updateContact: actionsTypes.UPDATE_CONTACT,
  searchContact: actionsTypes.SEARCH_CONTACT,
  initialContact: actionsTypes.REINIT_CONTACT,
};

/*
 ** INITIAL STATE Contact
 */
const initialState = {
  items: [{
    id: 0,
    firstName: 'Cyril',
    lastname: 'Vimard',
    phone: '0612345678',
    city: 'London',
    picture: 'https://i.picsum.photos/id/23/200/200.jpg',
  }, {
    id: 1,
    firstName: 'Elies',
    lastname: 'AMARELO',
    phone: '0635163370',
    city: 'Valencia',
    picture: 'https://i.picsum.photos/id/42/200/200.jpg',
  }, {
    id: 2,
    firstName: 'Jasmine',
    lastname: 'AMARELO',
    phone: '0635198240',
    city: 'Gandia',
    picture: 'https://i.picsum.photos/id/56/200/200.jpg',
  }, {
    id: 3,
    firstName: 'Jaime',
    lastname: 'AMARELO',
    phone: '0152368820',
    city: 'Daimus',
    picture: 'https://i.picsum.photos/id/89/200/200.jpg',
  },
  {
    id: 4,
    firstName: 'JP',
    lastname: 'CAILLET',
    phone: '0612345678',
    city: 'Suresnes',
    picture: 'https://i.picsum.photos/id/74/200/200.jpg',
  },
  {
    id: 5,
    firstName: 'Katy',
    lastname: 'AMARELO',
    phone: '0635356700',
    city: 'Paris',
    picture: 'https://i.picsum.photos/id/41/200/200.jpg',
  },
  {
    id: 6,
    firstName: 'Mango',
    lastname: 'Petitchien',
    phone: '0665201480',
    city: 'Beniarjo',
    picture: 'https://i.picsum.photos/id/84/200/200.jpg',
  }, {
    id: 7,
    firstName: 'Maria-Jesus',
    lastname: 'Valor Iznardo',
    phone: '0601523688',
    city: 'Paris',
    picture: 'https://i.picsum.photos/id/12/200/200.jpg',
  }],
};


/*
 ** CREATE Contact
 */
const addContact = (state, action) => MyImmutable.List(state).add(action.contact);

/*
 ** DELETE Contact
 */
const deleteContact = (state, action) => MyImmutable.List(state)
  .remove(contact => state.indexOf(contact) !== action.id);

/*
 ** EDIT Contact
 */
const editContact = (state, action) => {
  const updateContact = MyImmutable.List(state).update(action.id, () => action);
  return MyImmutable.List(state).toJS(updateContact);
};

/*
 ** SEARCH Contact
 */
const searchContact = (state, action) => MyImmutable.List(state)
  .search(contact => state.indexOf(contact).firstName !== action.text);

/*
 ** REINIT Contact
 */
const reinit = state => List(state.items).toJS();

export default (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.createContact:
      return addContact(state, action);
    case CONSTANTS.deleteContact:
      return deleteContact(state, action);
    case CONSTANTS.updateContact:
      return editContact(state, action);
    case CONSTANTS.searchContact:
      return searchContact(state, action);
    case CONSTANTS.initialContact:
      return reinit(initialState, action);
    default:
      return state.items;
  }
};
