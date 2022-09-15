import { Label, Span, Input } from './Input.styled';
const InputName = ({
  mainTitle,
  type,
  name,
  title,
  pattern,
  defaultValue,
  handleChange,
  value,
}) => (
  <Label>
    <Span>{mainTitle}</Span>
    <Input
      type={type}
      name={name}
      pattern={pattern}
      title={title}
      value={value}
      onChange={handleChange}
      required
    />
  </Label>
);

export default InputName;
