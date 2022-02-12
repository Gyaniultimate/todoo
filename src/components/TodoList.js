import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleit = () => {
    todos.map((todo) => (todo.isComplete ? (todo.isCompleteCom = true) : null));
    let updatedTodos = todos.map((todo) => {
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <div className="con">
        <h1>Things to do</h1>
        <TodoForm onSubmit={addTodo} />
        <Todo
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
        <button className="todo-button" onClick={handleit}>
          completed
        </button>
      </div>
      <div className="done">
        <h1>Things done!</h1>
        <div>
          {todos.map((todo) =>
            todo.isComplete ? (
              todo.isCompleteCom ? (
                <p className="todo-row"> {todo.text} </p>
              ) : (
                ""
              )
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </>
  );
}

export default TodoList;
