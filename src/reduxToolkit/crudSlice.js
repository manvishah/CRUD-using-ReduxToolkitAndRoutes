import { createSlice } from "../../../crud-using-reduxtoolkit/node_modules/@reduxjs/toolkit/dist";

export const contactapp = createSlice({
  name: "crud",
  initialState: [
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
  ],
  reducers: {
    addContacts: (state, action) => {
      const { id, name, number, email } = action.payload;
      const newTodo = {
        id,
        name,
        number,
        email,
      };
      state.push(newTodo);
    },
    deleteContacts: (state, action) => {
      const deletecontact = state.filter((contact) => {
        return contact.id !== action.payload;
      });
      return deletecontact;
    },
    updateContacts: (state, action) => {
      const updatedList = state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      return updatedList;
    },
  },
});

export const { addContacts, deleteContacts, updateContacts } =
  contactapp.actions;
export default contactapp.reducer;
