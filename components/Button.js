function Button({ type, onClick, children }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-green-600 text-gray-100 rouded px-4 py-2 my-2 hover:bg-green-800"
    >
      {children}
    </button>
  );
}
export default Button;
