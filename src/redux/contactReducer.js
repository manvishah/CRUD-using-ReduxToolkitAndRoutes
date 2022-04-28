const initialState = [
  {
    id: 1,
    name: "Manvi Shah",
    number: 9823455567,
    email: "shahmanvi123@gmail.com",
  },
  {
    id: 2,
    name: "Manan Shah",
    number: 7723455567,
    email: "mananshah45@gmail.com",
  },
];

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload.data];
      return state;

    case "UPDATE_CONTACT":
      const updatedList = state.map((contact) =>
        contact.id === action.data.id ? action.data : contact
      );
      state = updatedList;
      return state;

    case "DELETE_CONTACT":
      const newList = state.filter((contact) => {
        if (contact.id !== action.id) return contact;
      });

      state = newList;
      return state;

    case "SEARCH_CONTACT":
      const searchList = state.filter((contact) => {
        console.log(
          "contact",
          contact.name.includes(action.data),
          contact.name,
          action.data
        );
        if (contact.name.includes(action.data)) return contact;
      });
      // state = searchList ? searchList : state;
      console.log("searchList", searchList,state);

      return searchList;
    default:
      return state;
  }
};

export default contactReducer;
