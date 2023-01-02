import Button from '../Button';
import { List, ListItem, ListText } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, deleteContact, filterContacts } from 'redux/operations';
import { useEffect } from 'react';
import { getContacts } from 'redux/selectors';
// import { TotalContactText } from './App.styled';

export default function ContactList() {
  const dispatch = useDispatch();
  const { contacts, isLoading, error } = useSelector(getContacts);
  const filter = useSelector(state => state.filter.text);
  // console.log(filter);
  useEffect(() => {
    if (filter === '') {
      dispatch(fetchContacts());
    } else {
      dispatch(filterContacts(filter));
    }
  }, [dispatch, filter]);
  // const handleDelete = () => dispatch(deleteTask(contacts.id));
  // const contacts = useSelector(state => state.contacts);
  // const contacts = useSelector(getContacts);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  // const getFilteredContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };
  // const filteredContacts = getFilteredContacts();

  return (
    <List>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      {contacts.length > 0 &&
        contacts.map(({ id, name, phone }) => (
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
