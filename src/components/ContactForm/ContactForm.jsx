import { useState } from 'react';
import { Form, FormLabel, FormInput } from './ContactForm.styled';
import Button from '../Button';
import { useDispatch } from 'react-redux';
// import { addContact } from '../../redux/contactsSlice';
import { addContact } from 'redux/operations';
// import { nanoid } from 'nanoid';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      default:
        return;
    }
  };

  const resetForm = () => {
    setName('');
    setPhone('');
  };

  const handleAddContact = e => {
    e.preventDefault();
    dispatch(addContact({ name, phone }));
    resetForm();
  };

  return (
    <Form onSubmit={handleAddContact}>
      <FormLabel>
        Name
        <FormInput
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormLabel>
      <FormLabel>
        Number
        <FormInput
          value={phone}
          onChange={handleChange}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormLabel>
      <Button type="submit">Add contact</Button>
    </Form>
  );
}
