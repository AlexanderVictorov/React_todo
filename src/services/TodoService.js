import $api from "../http/api";

export const TodoService = {
    todos() {
        return $api.post('/todos')
    }
}
