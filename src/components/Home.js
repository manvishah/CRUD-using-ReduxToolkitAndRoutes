import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteContact, searchContact } from "../redux/action";
import { toast } from "react-toastify";
import {deleteContacts} from '../reduxToolkit/crudSlice'
const Home = () => {

  const retrieveContacts = useSelector((state) => state.contactReducer);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 my-5 text-right ">
          <Link
            to="/add"
            className="btn btn-outline-dark 
      "
          >
            Add Contact
          </Link>
        </div>
        <div className="col-md-12 mx-auto">
          <table className="table table-hover">
            <thead className="text-white bg-dark text-center">
              <tr key="">
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone No</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className=" text-center">
              {retrieveContacts.map((contact, id) => {
                return (
                  <tr key={id}>
                    <td>{contact.id}</td>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.number}</td>
                    <td>
                      <Link
                        to={`/edit/${contact.id}`}
                        className="btn btn-small btn-primary  "
                      >
                        Update
                      </Link>
                      <button
                        className="btn btn-small btn-danger mx-3  "
                        onClick={() => {
                          dispatch(deleteContacts(parseInt(contact.id)));
                          toast.success("Contact deleted successfully");
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
