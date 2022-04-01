import React from "react";
import {useForm, SubmitHandler} from 'react-hook-form'
import { ProductType } from "../types/product";
import {useNavigate} from 'react-router-dom'

type ProductAddProps = {
    onAdd: (Product: ProductType) => void
}
type FormInputs = {
    name: string,
    price: number
}
const ProductAdd = (props: ProductAddProps) => {
    const {register, handleSubmit, formState: {errors}} = useForm<FormInputs>();
    const navigate = useNavigate();
    const ThemSanPham: SubmitHandler<FormInputs> = (data: ProductType) => {
        props.onAdd(data);
        navigate('/admin/products');
        
    }
    return (
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(ThemSanPham)}>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Tên sản phẩm
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Tên sản phẩm" {...register('name', {required: true})} />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Giá sản phẩm
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="Giá sản phẩm" {...register('price')} />
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Thêm</button>
        </form>
    )
}

export default ProductAdd