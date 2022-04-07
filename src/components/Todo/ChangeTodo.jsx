import React from 'react';
import { Grid, Input, Paper } from '@mui/material';

const styles = {
    Icon: {
        marginLeft: 'auto',
        width: '10%',
    },
    Paper: {
        margin: 'auto',
        padding: 10,
        alignItems: 'center',
        marginTop: 10,
        width: 500,
    }
};

const ChangeTodo = ({ todo, index, saveTodo }) => {
    // vladComment убрать рефы и сделать контролируемые инпуты с помощью useState. Рефы используются для прямого контроля элемента DOM, а не для получения его value.
    // const inputRef = React.createRef();
    const onSubmit = () => {
        saveTodo(
          index,
          // inputRef.current.value,
        );
    };
    return (
      // vladComment не понял зачем тут key
      <Grid xs={12} item key={index}>
          {/*vladComment убрать style из элементов Material UI, для этого есть sx/makeStyles/styled*/}
          <Paper elevation={2} style={styles.Paper}>
              {/*vladComment уверен в Material UI есть альтернатива <form />*/}
              <form
                // vladComment сделать отдельные функции handler-ы. Не нужно писать многострочную логику прямо в вёрстке. Потом не найдёшь её
                onSubmit={onSubmit}
                // vladComment убрать style из элементов, для этого есть sx/makeStyles/styled
                style={{ display: 'flex' }}
              >
                  {/*vladComment убрать style из элементов, для этого есть sx/makeStyles/styled*/}
                  <Input
                    style={{ width: '90%' }}
                    defaultValue={todo}
                    // inputRef={inputRef}
                  />

                  {/*<IconButton*/}
                  {/*      type="submit"*/}
                  {/*      color="primary"*/}
                  {/*      aria-label="Add"*/}
                  {/*  // vladComment убрать style из элементов, для этого есть sx/makeStyles/styled*/}
                  {/*      style={styles.Icon}*/}
                  {/*  >*/}
                  {/*  </IconButton>*/}
              </form>
          </Paper>
      </Grid>
    );
};

export default ChangeTodo;