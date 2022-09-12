const InputSearch = ({ nameSearch, onSearchName }) => {
  return (
    <label>
      <span>{nameSearch}</span>
      <input
        type="text"
        placeholder="Search by name"
        onChange={e => onSearchName(e.target.value)}
      ></input>
    </label>
  );
};

export default InputSearch;
