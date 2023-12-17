import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter } from '../../redux/filtersSlice';
import { selectFilter } from '../../redux/selectors';
import {} from './Filter.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilter = e => {
    dispatch(setStatusFilter(e.target.value));
  };

  return (
    <div className="filter">
      <label className="filter-contact">Find contacts by name </label>
      <input
        type="text"
        value={filter}
        onChange={handleFilter}
        placeholder="Enter by name"
        className="input"
      />
    </div>
  );
};
export default Filter;
