import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = ({ todos, delitTodo, handleEditTodo }) => {
  return (
    <Grid>
      {todos.map((todo, index) => (
        <GridItem key={todo.id}>
          <TodoListItem
            order={index + 1}
            id={todo.id}
            text={todo.text}
            delitTodo={delitTodo}
            handleEditTodo={handleEditTodo}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default TodoList;
