import { UseTodo } from '../../../features/todo/hooks';
import { TodoForm, TodoList } from '../../../features/todo/ui';

export default function Todo() {
  const { todos, addTodo } = UseTodo();

  return (
    <div>
      <TodoForm />
      <TodoList />
    </div>
  );
}
