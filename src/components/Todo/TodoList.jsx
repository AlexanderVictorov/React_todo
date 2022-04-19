import React, { useEffect, useMemo, useState } from 'react';
import { Box, Grid, Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AddTodo from './AddTodo';
import List from './List';
import { addTodo, changeTodos, fetchTodos } from '../../store/slices/todos';
import emptyTrash from '../../images/emtyTrash.png';
import fullTrash from '../../images/fullTrash.png';
import ROUTE_LINKS from '../MyRouters/routeLink';

const styles = {
  Paper: {
    padding: '15px',
    margin: 'auto',
    textAlign: 'center',
    width: '500px',
    zIndex: 1,
  },
  Wastebasket: {
    position: 'absolute',
    bottom: '80px',
    right: '10px',
    cursor: 'pointer',
  },
};

function TodoList() {
  const [trashCondition, setTrashCondition] = useState(false);
  const [filter, setFilter] = useState('all');
  const todoArray = useSelector((state) => state.todos.todos || []);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const filterTodo = useMemo(() => {
    switch (filter) {
      case 'all':
        return todoArray.filter((todo) => todo.status !== 'trash');
      case 'done':
        return todoArray.filter((todo) => todo.status === 'done');
      case 'active':
        return todoArray.filter((todo) => todo.status === 'active');
      default:
        return null;
    }
  }, [filter, todoArray]);
  useEffect(() => {
    const trashStatusInTodo = todoArray.find((todo) => todo.status === 'trash');
    if (!trashStatusInTodo) return;
    setTrashCondition(true);
  }, [trashCondition, todoArray]);
  useEffect(() => {
    if (todoArray.length) return;
    dispatch(fetchTodos());
  }, []);

  const addTodoInList = (todo) => {
    dispatch(addTodo({
      id: Date.now(),
      name: todo,
      status: 'active',
    }));
  };
  const navigatingToTheWastebasket = () => navigate(ROUTE_LINKS.trash);
  const updateTodo = (id, newText) => {
    dispatch(changeTodos({ id, newText }));
  };
  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Paper sx={styles.Paper}>
          <AddTodo
            filter={filter}
            setFilter={setFilter}
            addTodoInList={addTodoInList}
          />
        </Paper>
        <Box sx={styles.Wastebasket} onClick={navigatingToTheWastebasket}>
          {trashCondition
            ? <img src={fullTrash} alt='iconTrash' />
            : <img src={emptyTrash} alt='iconTrash' />}
        </Box>
      </Grid>
      <Grid item xs={12} sx={styles.Paper}>
        <List
          updateTodo={updateTodo}
          list={filterTodo}
        />
      </Grid>
    </Grid>
  );
}

export default TodoList;
