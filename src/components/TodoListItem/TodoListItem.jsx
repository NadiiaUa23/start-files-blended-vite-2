import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import style from './TodoListItem.module.css';
import Text from '../Text/Text';

const TodoListItem = ({ order, id, text, delitTodo, handleEditTodo }) => {
  const todo = { id, text };

  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO #{order}
      </Text>

      <Text>{text}</Text>

      <button
        className={style.deleteButton}
        type="button"
        onClick={() => delitTodo(id)}
      >
        <RiDeleteBinLine size={24} />
      </button>

      <button
        className={style.editButton}
        type="button"
        onClick={() => handleEditTodo(todo)}
      >
        <RiEdit2Line size={24} />
      </button>
    </div>
  );
};

export default TodoListItem;
