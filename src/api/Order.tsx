
import { TypeCart } from "../types/cart";
import { TypeOrder } from "../types/order";
import instance from "./instance";

export const listOrder = () => {
    const url = '/orders'
    return instance.get(url)
}

export const lisstOrderWeb = (user:string) => {
    const url = `/orders/${user}`
    return instance.get(url)
}

export const addOrder = (data: TypeOrder) => {
    const url = `/order`
    return instance.post(url, data)
}

export const updateCart = (newobject: TypeCart) => {
    const url = `/cart/update/${newobject.user}`
    return instance.put(url, newobject)
}

export const updateStatus = (newstatus : TypeOrder) =>{
    const url = `/order/${newstatus._id}/update`
    return instance.put(url, newstatus)
}

export const listdetailorder = (_id: String) => {
    const url = `/orders/${_id}`
    return instance.get(url)
}

export const listinfo = (_id: String) => {
    const url = `/orderss/${_id}`
    return instance.get(url)
}