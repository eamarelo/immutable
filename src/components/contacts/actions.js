import actionsTypes from './actions-types';


/**
 * ADD CONTACT
 */
export const addContact = (contact) => ({
  type: actionsTypes.ADD_CONTACT,
  contact,
});

/**
 * DELETE CONTACT
 */
export const deleteContact = (id) => ({
  type: actionsTypes.DELETE_CONTACT,
  id,
});
/**
 * UPDATE CONTACT
 */
export const updateContact = (contact) => ({
  type: actionsTypes.UPDATE_CONTACT,
  contact,
});

/*
* SEARCH contact
*/
export const searchContact = (text) => ({
  type: actionsTypes.SEARCH_CONTACT,
  text,
});

export const initialContact = (text) => ({
  type: actionsTypes.INIT_CONTACT,
  text,
});
