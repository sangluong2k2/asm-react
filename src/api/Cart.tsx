import { TypeCart } from "../types/cart";
import instance from "./instance";

export const read = (id:string  | undefined) => {
    const url = `/carts/${id}`
    return instance.get(url)
}

export const listCart = () => {
    const url = '/cart'
    return instance.get(url)
}

export const addCart = (productCart: TypeCart) => {
    const url = '/carts'
    return instance.post(url, productCart)
}

export const deleteCart = (id: number) => {
    const url = `/cart/${id}`
    return instance.delete(url)
}