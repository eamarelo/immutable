import actionsTypes from './actions-types';

const initialState = {
  items: [{
    id: '1',
    firstName: 'Elies',
    lastName: 'AMARELO',
    phone: '0635163370',
    city: 'Valencia',
  }, {
    id: '2',
    firstName: 'Jasmine',
    lastName: 'AMARELO',
    phone: '0635198240',
    city: 'Gandia',
  }, {
    id: '3',
    firstName: 'Jaime',
    lastName: 'AMARELO',
    phone: '0152368820',
    city: 'Daimus',
  }, {
    id: '4',
    firstName: 'Maria-Jesus',
    lastName: 'Valor Iznardo',
    phone: '0601523688',
    city: 'Paris',
  }, {
    id: '5',
    firstName: 'Katy',
    lastName: 'AMARELO',
    phone: '0635356700',
    city: 'Paris',
  }, {
    id: '6',
    firstName: 'Mango',
    lastName: 'Petitchien',
    phone: '0665201480',
    city: 'Beniarjo',
  }, {
    id: '7',
    firstName: 'JP',
    lastName: 'CAILLET',
    phone: '0612345678',
    city: 'Suresnes',
  }, {
    id: '8',
    firstName: 'Cyril',
    lastName: 'Vimard',
    phone: '0612345678',
    city: 'London',
  }],
};
const addContact = (state, action) => ({
  items: state.items.concat(action.contact),
});
const deleteContact = (state, action) => ({
  items: state.items.filter((contact) => contact.id !== action.id),
});

export default (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.ADD_CONTACT:
      return addContact(state, action);
    case actionsTypes.DELETE_CONTACT:
      return deleteContact(state, action);
    default:
      return state;
  }
};
