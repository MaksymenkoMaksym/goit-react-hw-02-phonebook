import InputName from '../InputName/InputName';


const PhoneBookForm = ({ onInputContact }) => {
    function handleSubmit(e) {
        e.preventDefault();
        onInputContact(e.target.name.value);
    }
    return (<form onSubmit={handleSubmit}>
        <InputName />

        <button type="submit">
            Add Contact
        </button>
    </form >
    )
}

export default PhoneBookForm;