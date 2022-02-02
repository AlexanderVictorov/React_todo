import React, {useState} from 'react';
import {Button, Input} from "@mui/material";

const AddTodo = ({addToList}) => {
    const inputRef = React.createRef();
    const errorRef = React.createRef();
    const [isError,setIsError]=useState(false)
    const handleSubmit = e => {
        e.preventDefault();
        if (inputRef.current.value === "") {
           setIsError(true)
            return
        }
        setIsError(false)

        addToList(inputRef.current.value)
        e.currentTarget.reset();
    };

    // const onChangeInput = (e) => {
    //     console.log(inputRef.current.value)
    // }
    return (
        <form onSubmit={handleSubmit} style={{display: "flex"}}>
            <Input
                placeholder="Todo"
                inputProps={{
                    "aria-label": "Description"
                }}
                // onChange={onChangeInput}
                inputRef={inputRef}
                style={{width: "90%"}}
            />

            <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{width: "10%"}}
            >
                Add
            </Button>
            {isError &&  <p ref={errorRef} className="error">
                Error, must enter a value!
            </p>}
        </form>
    );
};

export default AddTodo;