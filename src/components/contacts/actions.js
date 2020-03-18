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
