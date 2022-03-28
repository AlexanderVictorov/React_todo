import $api from "../http/api";


export const AuthService = {
     login(email, password) {
        return $api.post('/auth/login', {email, password})
    },
     registration(email, password) {
        return $api.post('/auth/registration', {email, password})
    },
    logout(){
        return $api.post('/auth/logout')
    }
}
