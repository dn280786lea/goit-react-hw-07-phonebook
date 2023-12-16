import React from 'react';
import { useDispatch } from 'react-redux';
import './ContactItem.css';
import { deleteContact } from '../../redux/operations';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <div className="contact-item">
      <span className="item">{name}: </span>
      <span className="item">{number}</span>
      <button
        className="deletebtn"
        type="button"
        onClick={() => dispatch(deleteContact({ id: id }))}
      >
        Delete
      </button>
    </div>
  );
};

export default ContactItem;
