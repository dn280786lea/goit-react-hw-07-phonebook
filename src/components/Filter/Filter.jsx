import { nanoid } from 'nanoid';
import './Filter.css';
import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter } from '../../redux/filtersSlice';
import { selectContacts } from '../../redux/selectors';

const Filter = () => {
  const filterId = nanoid();
  const dispatch = useDispatch();
  const filter = useSelector(selectContacts);

  const handleFilter = e => {
    dispatch(setStatusFilter(e.target.value));
  };

  return (
    <div>
      <label className="filter-contact" htmlFor={filterId}>
        Find contacts by name{' '}
      </label>
      <input
        type="text"
        value={filter}
        onChange={handleFilter}
        placeholder="Find contacts by name"
        id={filterId}
      />
    </div>
  );
};
export default Filter;
