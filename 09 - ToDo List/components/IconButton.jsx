// IconButton.jsx
const IconButton = ({ onClick, icon: Icon }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gray-800 text-gray-200 p-2 rounded-md transition-all duration-75 hover:scale-105 flex items-center justify-center"
    >
      <Icon className="size-4" />
    </button>
  );
};

export default IconButton;
