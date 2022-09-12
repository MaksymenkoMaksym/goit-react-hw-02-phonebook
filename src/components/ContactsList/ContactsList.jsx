import { nanoid } from 'nanoid'

const ContactsList = ({ contacts }) => {
    console.log(contacts)
    return (
        <ul>
            {contacts.map(name => (<li key={nanoid()}>{name}</li>))}
        </ul>
    )
}

export default ContactsList;