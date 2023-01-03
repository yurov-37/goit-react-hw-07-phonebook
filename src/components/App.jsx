import GlobalStyles from './GlobalStyles';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { Phonebook, MainTitle, ContactTitle } from './App.styled';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

export default function App() {
  const { contacts } = useSelector(selectContacts);

  return (
    <Phonebook>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <ContactTitle>Contacts</ContactTitle>
      {contacts.length > 0 && <Filter />}
      <ContactList />
      <GlobalStyles />
    </Phonebook>
  );
}
