import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = ({ todos, delitTodo }) => {
  return (
    <Grid>
      {todos.map(todo => (
        <GridItem key={todo.id}>
          <TodoListItem id={todo.id} text={todo.text} delitTodo={delitTodo} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default TodoList;
