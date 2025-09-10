// Button.jsx
const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gray-800 text-gray-200 px-3 py-1 rounded-md transition-all duration-75 hover:scale-105 flex items-center gap-2"
    >
      {children}
    </button>
  );
};

export default Button;
