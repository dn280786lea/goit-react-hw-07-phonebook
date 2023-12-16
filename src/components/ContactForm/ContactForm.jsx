import React from 'react';
import './ContactForm.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { selectContacts } from '../../redux/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleFormSubmit = e => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      number: e.target.number.value,
    };

    const isExist = Array.isArray(contacts)
      ? contacts.find(
          contact =>
            contact.name.toLowerCase() === formData.name.toLowerCase().trim()
        )
      : null;

    if (isExist) {
      alert(`${formData.name} is already in contacts`);
      return;
    }

    dispatch(addContact(formData));
    e.target.reset();
  };

  return (
    <div className="phonebook-form">
      <form onSubmit={handleFormSubmit}>
        {/* Add your form fields here */}
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" required />
        <label htmlFor="number">Number:</label>
        <input
          type="text"
          name="number"
          required
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Please enter a valid number"
        />
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};

export default ContactForm;
