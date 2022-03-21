import React from 'react';
import {Grid, IconButton, Input, Paper} from "@mui/material";
import {Save} from "@material-ui/icons";

const styles = {
    Icon: {
        marginLeft: "auto",
        width: "10%"
    },
    Paper: {
        margin: "auto",
        padding: 10,
        alignItems: "center",
        marginTop: 10,
        width: 500
    }
};


const ChangeTodo = ({todo, index, key, saveTodo}) => {
    const inputRef = React.createRef();
    return (
        <Grid xs={12} item key={index}>
            <Paper elevation={2} style={styles.Paper}>
                <form
                    onSubmit={() => {
                        saveTodo(
                            index,
                            inputRef.current.value
                        );
                    }}
                    style={{display: "flex"}}
                >
                    <Input
                        style={{width: "90%"}}
                        defaultValue={todo}
                        inputRef={inputRef}
                    />
                    <IconButton
                        type="submit"
                        color="primary"
                        aria-label="Add"
                        style={styles.Icon}
                    >
                        <Save fontSize="small"/>
                    </IconButton>
                </form>
            </Paper>
        </Grid>
    );
};

export default ChangeTodo;