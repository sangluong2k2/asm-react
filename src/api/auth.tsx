import {User} from '../types/User'
import instance from "./instance";

export const signup = (user: User) => {
    const url = `/signup`;
    return instance.post(url, user);
}
export const signin = (user: User) => {
    const url = `/signin`;
    return instance.post(url, user);
} 

export const editUser = (user: User) => {
    const url = `/user/${user._id}/edit`;
    return instance.put(url, user)
}

export const listUser = () => {
    const url = `/users`
    return instance.get(url)
}

export const removeUser = (_id: number ) => {
    const url = `/user/${_id}`
    return instance.delete(url)
}

export const findone = (_id: string | undefined) => {
    const url =`/user/${_id}`
    return instance.get(url)
}