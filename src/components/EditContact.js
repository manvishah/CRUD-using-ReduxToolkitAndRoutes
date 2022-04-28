import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updateContacts } from "../reduxToolkit/crudSlice";
import { useNavigate } from "react-router-dom";

const EditContact = () => {
  //   const params = useParams();
  const { id } = useParams();
  const [editContact, setEditContact] = useState({
    name: "",
    email: "",
    phoneNo: "",
  });
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const retrieveContacts = useSelector((state) => state.contactReducer);

  useEffect(() => {
    const checkContact = retrieveContacts.find((retContact) => {
      return retContact.id === parseInt(id);
    });
    if (checkContact) {
      setEditContact({
        name: checkContact.name,
        email: checkContact.email,
        phoneNo: checkContact.number,
      });
    }
  }, []);

  const handleUpdateContact = (e) => {
    e.preventDefault();

    if (!editContact.email || !editContact.name || !editContact.phoneNo) {
      return toast.warning("PLease fill all the details");
    }

    const checkEmail = retrieveContacts.find(
      (retContact) =>
        retContact.id !== parseInt(id) &&
        retContact.email === editContact.email &&
        editContact.email
    );
    if (checkEmail) {
      return toast.error("This email already exists");
    }

    const checkNumber = retrieveContacts.find(
      (retContact) =>
        retContact.id !== parseInt(id) &&
        retContact.number === parseInt(editContact.phoneNo)
    );
    if (checkNumber) {
      return toast.error("This phone number already exists");
    }

    const updateContactData = {
      id:parseInt(id),
      name: editContact.name,
      number: Number(editContact.phoneNo),
      email: editContact.email,
    };

    dispatch(updateContacts(updateContactData));
    toast.success("Contact updated successfully");
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="display-3  text-center ">
          <h1>Edit Contact</h1>
        </div>
        <div className="col-md-6 shadow mx-auto my-15 p-5">
          <form onSubmit={handleUpdateContact}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter your name"
                className="form-control my-3"
                value={editContact.name}
                onChange={(e) =>
                  setEditContact({ ...editContact, name: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Enter your email"
                className="form-control"
                value={editContact.email}
                onChange={(e) =>
                  setEditContact({ ...editContact, email: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                placeholder="Enter your mobile no"
                className="form-control my-3"
                value={editContact.phoneNo}
                onChange={(e) =>
                  setEditContact({ ...editContact, phoneNo: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="Update Contact"
                className="btn  btn-dark"
              />
              <Link to="/" className="btn  btn-danger mx-5">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditContact;
