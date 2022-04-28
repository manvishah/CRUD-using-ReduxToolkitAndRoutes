import React, { useState } from "react";
import { useDispatch, useSelector, } from "react-redux";
import { toast } from "react-toastify";
import { addContacts } from "../reduxToolkit/crudSlice";
import { useNavigate } from "react-router-dom";
const AddContact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phoneNo: "",
  });

  const dispatch = useDispatch();
  const retrieveContacts = useSelector((state) => state.contactReducer);
 const navigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!contact.email || !contact.name || !contact.phoneNo) {
      return toast.warning("PLease fill all the details");
    }

    const checkEmail = retrieveContacts.find(
      (retContact) => retContact.email === contact.email && contact.email
    );
    if (checkEmail) {
      return toast.error("This email already exists");
    }

    const checkNumber = retrieveContacts.find(
      (retContact) => retContact.number === parseInt(contact.phoneNo)
    );
    if (checkNumber) {
      return toast.error("This phone number already exists");
    }

    const addContactData = {
      id: retrieveContacts[retrieveContacts.length - 1].id + 1,
      name: contact.name,
      number: Number(contact.phoneNo),
      email: contact.email,
    };
    console.log("addContact", addContactData);

    dispatch(addContacts(addContactData));
    toast.success("Contact added successfully");
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="display-3  text-center ">
          <h1>Add Contact</h1>
        </div>
        <div className="col-md-6 shadow mx-auto my-15 p-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter your name"
                className="form-control my-3"
                value={contact.name}
                onChange={(e) =>
                  setContact({ ...contact, name: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Enter your email"
                className="form-control"
                value={contact.email}
                onChange={(e) =>
                  setContact({ ...contact, email: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                placeholder="Enter your mobile no"
                className="form-control my-3"
                value={contact.phoneNo}
                onChange={(e) =>
                  setContact({ ...contact, phoneNo: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="Add Contact"
                className="btn btn-block btn-dark"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
