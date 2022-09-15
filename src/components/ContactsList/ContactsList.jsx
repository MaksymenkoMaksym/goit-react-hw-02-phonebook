import { Button, Ul, Li } from './ContactList.styled';

const ContactsList = ({ contacts, onClickDelete }) => {
  if (!contacts.length) {
    return <p>No results</p>;
  }
  return (
    <Ul>
      {contacts.map(contact => (
        <Li key={contact.id}>
          {contact.name}: {contact.number}&nbsp;
          <Button type="button" onClick={() => onClickDelete(contact.id)}>
            Delete
          </Button>
        </Li>
      ))}
    </Ul>
  );
};

export default ContactsList;
