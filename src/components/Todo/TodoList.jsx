import React, { useEffect, useMemo, useState } from 'react';
import { Box, Grid, Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import AddTodo from './AddTodo';
import List from './List';
import {
  addTodo, changeTodos, fetchTodos,
} from '../../store/slices/todos';
import emptyTrash from '../../images/emtyTrash.png';
import fullTrash from '../../images/fullTrash.png';
import ROUTE_LINKS from '../MyRouters/routeLink';

const styles = {
  Paper: {
    padding: '20px',
    margin: 'auto',
    textAlign: 'center',
    width: '500px',
    zIndex: 1,
  },
};
const StyledBox = styled(Box)`
  display: flex;
  position: fixed;
  bottom: 80px;
  right: 10px;
  overflow: hidden;
  cursor: pointer;
  z-index: 9999;
`;

function TodoList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const select = useSelector((state) => state.todos.todos || []);
  const [trashCondition, setTrashCondition] = useState(false);
  const [filter, setFilter] = useState('all');
  const filterTodo = useMemo(() => {
    switch (filter) {
      case 'all':
        return select.filter((todo) => todo.status !== 'trash');
      case 'done':
        return select.filter((todo) => todo.status === 'done');
      case 'active':
        return select.filter((todo) => todo.status === 'active');
      default:
        return null;
    }
  }, [filter, select]);
  const doneTodo = () => {
    setFilter('done');
  };
  const allTodo = () => {
    setFilter('all');
  };
  const activeTodo = () => {
    setFilter('active');
  };
  useEffect(() => {
    const trashStatusInTodo = select.find((item) => item.status === 'trash');
    if (!trashStatusInTodo) return;
    setTrashCondition(true);
  }, [trashCondition, select]);
  useEffect(() => {
    if (select.length) return;
    dispatch(fetchTodos());
  }, [select]);

  const addToList = (todo) => {
    dispatch(addTodo({
      id: Date.now(),
      name: todo,
      status: 'active',
    }));
  };
  const removeTodo = () => {
    setFilter('all');
  };
  const goToTrash = () => {
    navigate(ROUTE_LINKS.trash);
  };
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
            done={doneTodo}
            all={allTodo}
            active={activeTodo}
            addToList={addToList}
          />
        </Paper>
        <StyledBox onClick={goToTrash}>
          {trashCondition
            ? <img src={fullTrash} alt='iconTrash' />
            : <img src={emptyTrash} alt='iconTrash' />}
        </StyledBox>
      </Grid>
      <Grid item xs={12} sx={styles.Paper}>
        <List
          deleteTodo={removeTodo}
          updateTodo={updateTodo}
          list={filterTodo}
        />
      </Grid>
    </Grid>
  );
}

export default TodoList;
