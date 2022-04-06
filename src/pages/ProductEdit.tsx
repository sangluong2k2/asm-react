import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from 'react-hook-form'
import { ProductType } from "../types/product";
import { useNavigate, useParams } from 'react-router-dom'
import { read } from "../api/product";
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'
import { TypeCategory } from "../types/category";
import { getall } from "../api/category";
import { data } from "autoprefixer";
import axios from "axios";


type ProductEditProps = {
    onUpdate: (Product: ProductType) => void
}
type FormInputs = {
    name: string,
    price: number,
    category: string,
    image: string
}


const ProductEdit = (props: ProductEditProps) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();
    const [category, setCategory] = useState<TypeCategory[]>([])
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const getProducts = async () => {
            const { data } = await read(id);
            reset(data)
        }
        getProducts();
    }, [])

    useEffect(() => {
        const getAllCate = async () => {
            const { data } = await getall();
            setCategory(data);
        }
        getAllCate()
    }, [])
    let imageUpdate = ""

    const onSubmit: SubmitHandler<FormInputs> = async (data: ProductType) => {
        if (data.image[0] != 'h') {
            const file = data.image[0]
            const formData = new FormData()

            formData.append("file", file)
            formData.append("upload_preset", "hzeskmhn")

            const { data: newimage } = await axios({
                url: 'https://api.cloudinary.com/v1_1/dkhutgvlb/image/upload',
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-formendcoded",

                }, data: formData,
            })
            imageUpdate = newimage.url
            data.image = imageUpdate

        }
        try {
            props.onUpdate(data);
            toastr.success("Sửa sản phẩm thành công")
            navigate('/admin/products');
        } catch (error) {
            toastr.error("Sửa sản phẩm không thành công")
        }


    }


    return (
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Loại danh mục
                </label>
                <select id="" {...register('category')}className="shadow appearance-none border rounded w-[10%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" >
                    {category.map((item) => {
                        return <option value={`${item._id}`}>{item.name}</option>
                    })}
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Tên sản phẩm
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Tên sản phẩm" {...register('name', { required: true })} />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Giá sản phẩm
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="Giá sản phẩm" {...register('price')} />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Ảnh
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="file" {...register('image')} />
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sửa</button>
        </form>
    )
}

export default ProductEdit