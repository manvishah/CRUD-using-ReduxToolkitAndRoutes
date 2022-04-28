import { configureStore } from "../../../crud-using-reduxtoolkit/node_modules/@reduxjs/toolkit/dist";
import contactReducer from './crudSlice'
export default configureStore({ reducer: {
    contactReducer,
} });
