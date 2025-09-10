import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import IconButton from "../components/IconButton";
import { v4 as uuidv4 } from "uuid";
import { FaEdit, FaTrash } from "react-icons/fa";
import { IoAddCircleSharp } from "react-icons/io5"; // ✅ correct for IoAddCircleSharp
import { IoIosSave } from "react-icons/io"; // ✅ correct for IoIosSave
import { MdCancel } from "react-icons/md"; // Icons for cancel


function App() {
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  const [showFinished, setshowFinished] = useState(() => {
    const stored = localStorage.getItem("showFinished");
    return stored !== null ? JSON.parse(stored) : true;
  });

  // Load todos + showFinished from localStorage
  useEffect(() => {
    try {
      const storedTodos = localStorage.getItem("todos");
      if (storedTodos) {
        const parsedTodos = JSON.parse(storedTodos);
        if (Array.isArray(parsedTodos)) setToDoList(parsedTodos);
      }

      const storedShowFinished = localStorage.getItem("showFinished");
      if (storedShowFinished !== null) {
        const parsedShowFinished = JSON.parse(storedShowFinished);
        if (typeof parsedShowFinished === "boolean") setshowFinished(parsedShowFinished);
      }
    } catch (error) {
      console.error("Failed to parse localStorage:", error);
      setToDoList([]);
      setshowFinished(true);
    }
  }, []);

  // Save showFinished whenever it changes
  useEffect(() => {
    localStorage.setItem("showFinished", JSON.stringify(showFinished));
  }, [showFinished]);

  // Add todo
  const handleAdd = () => {
    if (!toDo.trim()) return;
    const updatedList = [...toDoList, { id: uuidv4(), toDo, isCompleted: false }];
    setToDoList(updatedList);
    setToDo("");
    saveToLS(updatedList);
  };

  // Delete todo
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this todo?")) {
      const updatedList = toDoList.filter((item) => item.id !== id);
      setToDoList(updatedList);
      saveToLS(updatedList);
    }
  };

  // Edit todo
  const handleEdit = (id) => {
    const todo = toDoList.find((item) => item.id === id);
    if (!todo) return;
    setEditId(id);
    setEditText(todo.toDo);
  };

  // Save edited todo
  const handleSave = (id) => {
    const updatedList = toDoList.map((item) =>
      item.id === id ? { ...item, toDo: editText } : item
    );
    setToDoList(updatedList);
    setEditId(null);
    setEditText("");
    saveToLS(updatedList);
  };

  // Cancel editing
  const handleCancel = () => {
    setEditId(null);
    setEditText("");
  };

  // Toggle completion
  const handleToggleComplete = (id) => {
    const updatedList = toDoList.map((item) =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setToDoList(updatedList);
    saveToLS(updatedList);
  };

  // Save to Local Storage
  const saveToLS = (todos) => {
    if (!todos) return;
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  // Toggle finished todos
  const toggleFinished = () => {
    const newValue = !showFinished;
    setshowFinished(newValue);
    localStorage.setItem("showFinished", JSON.stringify(newValue));
  };

  return (
    <div className="min-h-screen bg-gray-200">
      <Navbar />
      <div className="container mx-auto rounded-xl p-5 bg-gray-300 min-h-[80vh] flex flex-col gap-10">
        {/* Add Todo Section */}
        <div className="addTodo flex flex-col gap-3">
          <h2 className="text-xl text-gray-800">Add a Todo</h2>
          <div className="flex gap-10">
            <input
              type="text"
              value={toDo}
              onChange={(e) => setToDo(e.target.value)}
              placeholder="Add your tasks here..."
              className="w-full px-4 py-2 transition-all duration-75 rounded-md outline-none focus:shadow-sm shadow-gray-950 bg-gray-100"
            />
            <IconButton onClick={handleAdd} icon={IoAddCircleSharp} />
          </div>
        </div>

        {/* Todo List Section */}
        <div className="myTodos flex flex-col gap-3">
          <h2 className="text-xl text-gray-800">Your Todos</h2>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={showFinished}
              onChange={toggleFinished}
            />
            <label className="text-gray-700">Show finished todos</label>
          </div>
          <div className="max-h-[400px] md:max-h-[800px] overflow-y-auto flex flex-col gap-2 pr-2">
            {toDoList.length === 0 ? (
              <p className="text-gray-600">No todos yet...</p>
            ) : (
              toDoList
                .filter((item) => showFinished || !item.isCompleted)
                .map((item) => (
                  <div
                    key={item.id}
                    className="todo flex items-center justify-between bg-gray-200 px-4 py-2 rounded-md"
                  >
                    {editId === item.id ? (
                      <>
                        <input
                          type="text"
                          value={editText}
                          onChange={(e) => setEditText(e.target.value)}
                          className="w-full px-2 py-1 rounded-md bg-gray-100 outline-none"
                        />
                        <div className="buttons flex gap-4">
                          <IconButton
                            onClick={() => handleSave(item.id)}
                            icon={IoIosSave}
                          />
                          <IconButton onClick={handleCancel} icon={MdCancel} />
                        </div>
                      </>
                    ) : (
                      <div className="flex items-center gap-3 w-full justify-between">
                        {/* Checkbox + Todo text */}
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={item.isCompleted}
                            onChange={() => handleToggleComplete(item.id)}
                          />
                          <div
                            className={
                              item.isCompleted
                                ? "line-through text-gray-600"
                                : ""
                            }
                          >
                            {item.toDo}
                          </div>
                        </div>

                        {/* Edit/Delete buttons */}
                        <div className="buttons flex gap-4">
                          <IconButton
                            onClick={() => handleEdit(item.id)}
                            icon={FaEdit}
                          />
                          <IconButton
                            onClick={() => handleDelete(item.id)}
                            icon={FaTrash}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
