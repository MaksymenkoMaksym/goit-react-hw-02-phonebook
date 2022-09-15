import { Label, Input, Span } from 'components/InputName/Input.styled';

const InputSearch = ({ nameSearch, onSearchName }) => {
  return (
    <Label>
      <Span>{nameSearch}</Span>
      <Input
        type="text"
        placeholder="Search by name"
        onChange={e => onSearchName(e.target.value)}
      ></Input>
    </Label>
  );
};

export default InputSearch;
