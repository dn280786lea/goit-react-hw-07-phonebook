import { useDispatch } from 'react-redux';
import './ContactItem.css';
import { deleteContact } from '../../redux/operations';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <div className="contact-item" key={id}>
      <span className="item">{name} </span>
      <span className="item">{number} </span>
      <button
        className="deletebtn"
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
};

export default ContactItem;
