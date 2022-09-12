import { nanoid } from 'nanoid';
import InputName from '../InputName/InputName';
import InputTel from 'components/InputTel/InputTel';

const PhoneBookForm = ({ onInputContact }) => {
  function handleSubmit(e) {
    e.preventDefault();
    const id = nanoid();
    const name = e.target.name.value;
    const number = e.target.number.value;
    const user = {
      id,
      name,
      number,
    };
    onInputContact(user);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Name</span>
        <InputName />
      </label>
      <label>
        <span>Number</span>
        <InputTel />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default PhoneBookForm;
