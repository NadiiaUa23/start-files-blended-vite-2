import { useEffect, useState } from 'react';
import Form from '../components/Form/Form';
import Text from '../components/Text/Text';
import { nanoid } from 'nanoid';
import TodoList from '../components/TodoList/TodoList';

const Todos = () => {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('Todos')) || []
  );
  useEffect(() => {
    localStorage.setItem('Todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = text => {
    setTodos([...todos, { text: text, id: nanoid() }]);
  };

  const delitTodo = id => {
    setTodos(
      todos.filter(todo => {
        return todo.id !== id;
      })
    );
  };

  return (
    <>
      <Form onSubmit={addTodo} />
      <TodoList todos={todos} delitTodo={delitTodo} />

      <Text textAlign="center">There are no any todos ...</Text>
    </>
  );
};

export default Todos;
