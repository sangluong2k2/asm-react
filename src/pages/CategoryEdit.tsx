import React, { useEffect } from "react";
import {useForm, SubmitHandler} from 'react-hook-form'

import {useNavigate, useParams} from 'react-router-dom'

import toastr from 'toastr'
import 'toastr/build/toastr.min.css'
import { get} from "../api/category";
import { TypeCategory } from "../types/category";


type CategoryEditProps = {
    onUpdateCate: (Category: TypeCategory) => void
}
type FormInputs = {
    name: string,
    price: number
}


const CategoryEdit = (props: CategoryEditProps) => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm<FormInputs>();
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        const getCategory = async () => {
            const {data} = await get(id);
            reset(data)
        }
        getCategory();
    }, [])

    const onSubmitCate: SubmitHandler<FormInputs> = (data: TypeCategory) => {
        try {
            props.onUpdateCate(data);
            toastr.success("Sửa danh mục thành công")
            navigate('/admin/categories');
        } catch (error) {
            toastr.error("Sửa danh mục không thành công")
        }
       
        
    }


    return (
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmitCate)}>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Tên danh mục
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Tên danh mục" {...register('name', {required: true})} />
            </div>
            
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sửa</button>
        </form>
    )
}

export default CategoryEdit