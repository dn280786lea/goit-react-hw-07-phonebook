import React from 'react';
import { useDispatch } from 'react-redux';
import './ContactItem.css';
import { removeContactAction } from '../../redux/contacts';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const deleteContact = id => {
    dispatch(removeContactAction(id));
  };

  return (
    <div className="contact-item">
      <span className="item">{name}: </span>
      <span className="item">{number}</span>
      <button
        className="deletebtn"
        type="button"
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default ContactItem;
