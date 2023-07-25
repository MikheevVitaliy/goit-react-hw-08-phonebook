import { useSelector } from 'react-redux';
import { selectVisibleContact } from 'redux/contacts/selector';

export const useContacts = () => useSelector(selectVisibleContact);
