const ContactsList = ({ contacts, onClickDelete }) => {
  if (!contacts.length) {
    return <p>No results</p>;
  }
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}&nbsp;
          <button type="button" onClick={() => onClickDelete(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
