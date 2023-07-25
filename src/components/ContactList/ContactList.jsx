import { useContacts } from 'hooks/useContacts';
import { ListItem } from '../ContactItem/ContactItem';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useContacts();

  return (
    <List>
      {contacts.map(contact => (
        <ListItem key={contact.id} {...contact} />
      ))}
    </List>
  );
};
