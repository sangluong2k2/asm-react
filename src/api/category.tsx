import instance from "./instance";
import { TypeCategory } from "../types/category";

export const getall = () => {
    const url = '/categories'
    return instance.get(url)
}

export const get = (_id:string | undefined) => {
    const url = `/categories/${_id}`
    return instance.get(url)
}

export const read = (slug: string | undefined) => {
    const url = `/category/${slug}`
    return instance.get(url)
}

export const addcate = (category: TypeCategory) => {
    const url = `/categories`
    return instance.post(url, category)
}

export const updatecate = (category: TypeCategory) => {
    const url = `/categories/${category._id}/edit`
    return instance.put(url, category)
}

export const removecate = (_id:number) => {
    const url = `/categories/${_id}`
    return instance.delete(url)
}