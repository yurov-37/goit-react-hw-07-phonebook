import Button from '../Button';
import { List, ListItem, ListText } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, deleteContact } from 'redux/operations';
import { useEffect } from 'react';
import { selectContacts, selectFilter } from 'redux/selectors';
import { TotalContactText } from '../App.styled';
import { RotatingLines } from 'react-loader-spinner';

export default function ContactList() {
  const dispatch = useDispatch();
  const { contacts, isLoading, error } = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filteredContacts = getFilteredContacts();

  return (
    <List>
      {isLoading && (
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="36"
          visible={true}
        />
      )}
      {error && <p>{error}</p>}
      {contacts.length > 0 && (
        <TotalContactText>Total contacts: {contacts.length}</TotalContactText>
      )}
      {contacts.length > 0 &&
        filteredContacts.map(({ id, name, phone }) => (
          <ListItem key={id}>
            <ListText>
              {name}: {phone}
            </ListText>
            <Button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </Button>
          </ListItem>
        ))}
    </List>
  );
}
