import axios from "axios";

const instance = axios.create(({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "1fcd203f-113c-4b79-ac22-512b6e875c51"}
}))


export const getUsers = (currentPage: number = 10, pageSize: number = 5) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data
        })
}

export const follow = (id: number) => {
    return instance.post(`follow/${id}`, {})
        .then(response => {
            return response.data
        })
}

export const unFollow = (id: number) => {
    return instance.delete(`follow/${id}`)
        .then(response => {
            return response.data
        })
}


export const login = () => {
    return instance.get(`auth/me`)
        .then(response => {
            return response.data
        })
}

