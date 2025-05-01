import { useEffect, useState } from 'react';
import Form from '../components/Form/Form';
import Text from '../components/Text/Text';
import { nanoid } from 'nanoid';
import TodoList from '../components/TodoList/TodoList';
import EditForm from '../components/EditForm/EditForm';

const Todos = () => {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('Todos')) || []
  );

  const [currentTodo, setCurrentTodo] = useState({});

  // Зберігаємо в localStorage
  useEffect(() => {
    localStorage.setItem('Todos', JSON.stringify(todos));
  }, [todos]);

  //Перевірка на дублікати
  const findTodo = (text, ignoreId = null) => {
    return todos.some(
      todo =>
        todo.text.toLowerCase() === text.toLowerCase() && todo.id !== ignoreId
    );
  };

  // Додати нову задачу
  const addTodo = text => {
    if (findTodo(text)) {
      alert('oopps!It already exists, lets do it again');
      return;
    }
    setTodos([...todos, { text: text, id: nanoid() }]);
  };

  // Видалити
  const delitTodo = id => setTodos(todos.filter(todo => todo.id !== id));

  //Редагувати задачу
  const handleEditTodo = todo => setCurrentTodo(todo);

  //Відмінити редагування
  const cancelUpdate = () => setCurrentTodo({});

  //Оновити задачу існуючу
  const updateTodo = text => {
    // Якщо текст не змінився просто вийти
    if (text.trim().toLowerCase() === currentTodo.text.toLowerCase()) {
      setCurrentTodo({});
      return;
    }

    if (findTodo(text, currentTodo.id)) {
      return alert('The task is already clear, enter another text.');
    }

    const updatedTodos = todos.map(todo =>
      todo.id === currentTodo.id ? { ...todo, text } : todo
    );

    setTodos(updatedTodos);
    setCurrentTodo({});
  };

  return (
    <>
      {currentTodo.id ? (
        <EditForm
          updateTodo={updateTodo}
          cancelUpdate={cancelUpdate}
          defaultValue={currentTodo.text}
        />
      ) : (
        <Form onSubmit={addTodo} />
      )}

      <TodoList
        todos={todos}
        delitTodo={delitTodo}
        handleEditTodo={handleEditTodo}
      />

      {todos.length === 0 && (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};

export default Todos;
