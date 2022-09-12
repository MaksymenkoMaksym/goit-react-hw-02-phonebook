const ContactsList = ({ contacts, onClickDelete }) => {
  if (!contacts.length) {
    console.log('contacts inside');
    return <p>No results</p>;
  }
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}&nbsp;
          <button type="button" onClick={e => onClickDelete(e.target)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
