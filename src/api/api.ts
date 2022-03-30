import axios from "axios";

const instance = axios.create(({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "1fcd203f-113c-4b79-ac22-512b6e875c51"}
}))


export const getUsersAPI = (currentPage: number = 10, pageSize: number = 5) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data
        })
}

export const followAPI = (id: number) => {
    return instance.post(`follow/${id}`, {})
        .then(response => {
            return response.data
        })
}

export const unFollowAPI = (id: number) => {
    return instance.delete(`follow/${id}`)
        .then(response => {
            return response.data
        })
}


export const authAPI = () => {
    return instance.get(`auth/me`)
        .then(response => {
            return response.data
        })
}
export const loginAPI = (email: string, password: string, rememberMe: boolean) => {
    return instance.post(`auth/login`, {email, password, rememberMe})
}

export const logoutAPI = () => {
    return instance.delete(`auth/login`)
}

export const getProfileAPI = (userId:number) => {
    return instance.get(`profile/${userId}`)
}

export const getStatusAPI = (userId:number) => {
    return instance.get(`profile/status/${userId}`)
}
export const updateStatusAPI = (status:object) => {
    return instance.put(`profile/status`, {status})
}
export const savePhotoAPI = (photoFile :any) => {
    let formData= new FormData();
    formData.append("image", photoFile)
    return instance.put(`profile/photo`, formData, {
        headers:{
            'Content-Type': 'multipart/form-data'
        }
    })
}


