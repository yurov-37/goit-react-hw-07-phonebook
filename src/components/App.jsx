import GlobalStyles from './GlobalStyles';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import {
  Phonebook,
  MainTitle,
  ContactTitle,
  TotalContactText,
} from './App.styled';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/operations';
import { getContacts } from 'redux/selectors';

export default function App() {
  const { contacts } = useSelector(getContacts);
  // const contacts = useSelector(getContacts);
  // console.log(contacts);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <Phonebook>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <ContactTitle>Contacts</ContactTitle>
      {/* {contacts.length > 0 && (
        <>
          <TotalContactText>Total contacts: {contacts.length}</TotalContactText>
          <Filter />
          <ContactList />
        </>
      )} */}
      {contacts.length > 0 && <Filter />}
      {/* <Filter /> */}
      <ContactList />

      <GlobalStyles />
    </Phonebook>
  );
}
