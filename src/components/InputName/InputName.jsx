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
  <label>
    <span>{mainTitle}</span>
    <input
      type={type}
      name={name}
      pattern={pattern}
      title={title}
      value={value}
      onChange={handleChange}
      required
    />
  </label>
);

export default InputName;
