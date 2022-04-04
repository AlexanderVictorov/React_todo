import $api from "../http/api";

export const TodoService = {
    postTodos(todo) {
        return $api.post('/todos', {
            "todos": todo
        })
    },
    getTodos() {
        return $api.get('/todos')
    }
}
