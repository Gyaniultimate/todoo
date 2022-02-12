import React, { useState, useEffect, useRef } from "react";
const UUID = require("uuid-int");
const id = 0;

const generator = UUID(id);

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const [error, setError] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
    setError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.length < 5) {
      setError(true);
      return;
    }

    props.onSubmit({
      id: generator.uuid(), // Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <>
          <input
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="todo-input edit"
          />
          <button onClick={handleSubmit} className="todo-button edit">
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Add a todo"
            value={input}
            onChange={handleChange}
            name="text"
            className="todo-input"
            ref={inputRef}
          />
          <button onClick={handleSubmit} className="todo-button">
            Add todo
          </button>
        </>
      )}
      <div className="err">{error ? "Less than 5 letters!" : null}</div>
    </form>
  );
}

export default TodoForm;
