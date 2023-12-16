import { filtersReducer } from './filtersSlice';
import { contactsReducer } from './contacts';

export const reducer = {
  contacts: contactsReducer,
  filter: filtersReducer,
};
