export const addContacts = (data) => {
  return {
    type: "ADD_CONTACT",
    payload: { data },
  };
};

export const updateContact = (data) => {
  return {
    type: "UPDATE_CONTACT",
    data,
  };
};

export const deleteContact = (id) => {
  return {
    type: "DELETE_CONTACT",
    id,
  };
};

export const searchContact = (data) => {
    return {
      type: "SEARCH_CONTACT",
      data,
    };
  };