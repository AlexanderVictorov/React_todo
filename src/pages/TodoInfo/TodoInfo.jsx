import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Box, Button, Paper, Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../../store/slices/todos';
import ROUTE_LINKS from '../../components/MyRouters/routeLink';
import Loader from '../../components/loader/Loader';

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

function TodoInfo() {
  const params = useParams();
  const todo = useSelector((state) => state.todos.todos);
  const [todoInfo, setTodoInfo] = useState(null);
  const [curIndex, setCurIndex] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onNextTodo = () => {
    if (todo[curIndex + 1]) {
      navigate(`${ROUTE_LINKS.todo}/${todo[curIndex + 1].id}`);
    } else {
      navigate(`${ROUTE_LINKS.todo}/${todo[0].id}`);
    }
  };
  const onPreviousTodo = () => {
    if (todo[curIndex - 1]) {
      navigate(`${ROUTE_LINKS.todo}/${todo[curIndex - 1].id}`);
    } else {
      navigate(`${ROUTE_LINKS.todo}/${todo[todo.length - 1].id}`);
    }
  };
  useEffect(() => {
    if (todo) return;
    dispatch(fetchTodos());
  }, [todo]);
  useEffect(() => {
    if (!todo) return;
    const candidate = todo.find((item, inx) => {
      if (item.id === +params.id) {
        setCurIndex(inx);
        return true;
      }
      return false;
    });
    if (!candidate) return;
    setTodoInfo(candidate);
  }, [todo, params]);

  if (!todoInfo) return <Loader />;
  return (
    <Box sx={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
    }}
    >
      <Paper
        elevation={2}
        sx={styles.Paper}
      >
        <Typography>
          Info:
          {todoInfo.name}
        </Typography>
      </Paper>
      <Box sx={{
        marginTop: '20px', display: 'flex', justifyContent: 'space-between', width: '300px',
      }}
      >
        <Button onClick={onPreviousTodo} sx={{ height: '30px' }} variant='contained'>previous Todos</Button>
        <Button onClick={onNextTodo} sx={{ height: '30px' }} variant='contained'>next Todos</Button>
      </Box>

    </Box>
  );
}

export default TodoInfo;
