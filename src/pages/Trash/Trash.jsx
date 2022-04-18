import React, { useEffect, useState } from 'react';
import {
  Box, Paper,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { changeStatus, deleteTodo, fetchTodos } from '../../store/slices/todos';
import Loader from '../../components/loader/Loader';
import { saveTodoOnServer } from '../../store/asyncAction/fetchTodos';
import ROUTE_LINKS from '../../components/MyRouters/routeLink';

const styles = {
  Paper: {
    position: 'relative',
    margin: 'auto',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px',
    width: '500px',
    textDecoration: 'none',
    zIndex: 1,
  },
};

function Trash() {
  const todo = useSelector((state) => state.todos.todos);
  const [trashTodo, setTrashTodo] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const handleClickRestoreTodo = () => {
    enqueueSnackbar('Restore Todos', {
      variant: 'success',
    });
  };
  const handleClickRemoveTodo = () => {
    enqueueSnackbar('Remove Todos', {
      variant: 'info',
    });
  };
  useEffect(() => {
    if (todo) return;
    dispatch(fetchTodos());
  }, [todo]);

  useEffect(() => {
    if (!todo) return;
    const candidate = todo.filter((todos) => todos.status === 'trash');
    if (candidate.length === 0) {
      navigate(ROUTE_LINKS.todo);
    }
    if (!candidate) return;
    setTrashTodo(candidate);
  }, [todo]);
  const restoreTodo = (id) => {
    const statusTodoActive = 'active';
    dispatch(changeStatus({ id, statusTodoActive }));
    handleClickRestoreTodo();
  };
  const removeTodo = (id) => {
    dispatch(deleteTodo(id));
    handleClickRemoveTodo();
    dispatch(saveTodoOnServer());
  };
  if (!trashTodo) return <Loader />;
  return (
    <>
      {trashTodo.map((todos) => (
        <Paper
          elevation={2}
          sx={styles.Paper}
          key={todos.id}
        >
          {todos.name}
          <Box sx={{ marginLeft: 'auto', cursor: 'pointer' }}>
            <AutorenewIcon
              color='primary'
              aria-label='Restore'
              onClick={() => restoreTodo(todos.id)}
            />
            <DeleteIcon
              color='secondary'
              aria-label='Delete'
              onClick={() => removeTodo(todos.id)}
            />
          </Box>
        </Paper>
      ))}

      {/* <Button */}
      {/* sx={{ */}
      {/*   marginLeft: 'auto', */}
      {/*   fontFamily: 'serif', fontSize: '12px', textTransform: 'capitalize', */}
      {/* }} */}
      {/* onClick={backTodos} */}
      {/* variant='contained' */}
      {/* size='small' */}
      {/* > */}
      {/* Back Todos */}
      {/* </Button> */}

    </>

  );
}

export default Trash;
