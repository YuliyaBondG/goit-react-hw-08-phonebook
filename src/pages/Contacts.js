import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Toaster } from 'react-hot-toast';
import { Container } from 'components/Phonebook.styled';

export default function Contacts() {
  return (
    <Container>
      <Toaster />
      <ContactForm />
      <Filter />
      <ContactList />
    </Container>
  );
}
