import { useState, useCallback } from 'react';

type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export default function UseTodo() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = useCallback((todo: Todo) => {
    setTodos((prev) => [...prev, todo]);
  }, []);

  const deleteTodo = useCallback((id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  const doneTodo = useCallback((id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done };
        }

        return todo;
      })
    );
  }, []);

  return { todos, addTodo, deleteTodo, doneTodo };
}
