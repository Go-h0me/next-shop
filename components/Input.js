function Input({ type,required, value, onChange }) {
  return (
    <input
      type={type}
      required={required}
      value={value}
      onChange={onChange}
      className="border rouded px-3 py-1"
    />
  );
}

export default Input;
