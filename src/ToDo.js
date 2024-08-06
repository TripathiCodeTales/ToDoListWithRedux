import react, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addtodo,
  deletetodo,
  toggleComplete,
  edittodo,
} from "./features/AddSlice";

const ToDo = () => {
  const [text, setText] = useState("");
  const [edit, setEdit] = useState(false);
  const [val, setVal] = useState("");
  const [curId, setCurId] = useState();

  const todos = useSelector((state) => state.todos);
console.log(todos)
  const dispatch = useDispatch();

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleOnClick = () => {
    if (text) {
      dispatch(addtodo(text));
      setText("");
    } else {
      alert("NO todos to add to the list");
    }
  };

  const handleOnDelete = (id) => {
    dispatch(deletetodo(id));
  };

  const handleOnCheckBoxClick = (todo) => {
    console.log(todo)
    dispatch(toggleComplete({todo}));
  };

  const handleOnEdit = (event, todo) => {
    setCurId(todo.id);
    console.log(todo);
    setEdit(true);
  };

  const handleOnNewVal = (event) => {
    setVal(event.target.value);
    console.log(val);
  };

  const handleOnSave = (id) => {
    dispatch(edittodo({ id: id, text: val, status: "Incomplete" }));
    setEdit(false);
  };

  return (
    <>
      <input
        type="text"
        placeholder="ADDTODO"
        onChange={handleOnChange}
        value={text}
      />
      <button onClick={handleOnClick}>Add To Do</button>

      <div>
        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
                {edit && todo.id === curId ? (
                  <input
                    type="text"
                    defaultValue={todo.text}
                    onChange={handleOnNewVal}
                  />
                ) : (
                  <>{todo.text}</>
                )}
                <input
                  onClick={() => handleOnCheckBoxClick(todo)}
                  type="checkbox"
                />
                <button onClick={() => handleOnDelete(todo.id)}>delete</button>
                {!(edit && todo.id === curId) ? (
                  <button onClick={(event) => handleOnEdit(event, todo)}>
                    Edit
                  </button>
                ) : (
                  <button onClick={() => handleOnSave(todo.id)}>Save</button>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ToDo;
