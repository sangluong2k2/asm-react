import React, { useEffect, useState } from "react";
import {useForm, SubmitHandler} from 'react-hook-form'
import { ProductType } from "../types/product";
import {useNavigate} from 'react-router-dom'
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'
import { TypeCategory } from "../types/category";
import { getall } from "../api/category"
import axios from "axios";
import {Button, message} from 'antd'

type ProductAddProps = {
    onAdd: (Product: ProductType) => void
}
type FormInputs = {
    name: string,
    price: number,
    image: string,
    category: string
}

const key = 'updatable';
const openMessage = () => {
    message.loading({ content: 'Đang thêm sản phẩm...', key });
    setTimeout(() => {
      message.success({ content: 'Thành công!', key, duration: 2 });
    }, 1000);
  };
const ProductAdd = (props: ProductAddProps) => {
    const [category, setCategory] = useState<TypeCategory[]>([])
    const {register, handleSubmit, formState: {errors}} = useForm<FormInputs>();
    useEffect(() => {
        const getAllCate = async () => {
            const {data} = await getall();
            setCategory (data);
        }
        getAllCate();
    }, [])
    const navigate = useNavigate();
    const ThemSanPham: SubmitHandler<FormInputs> = (data: ProductType) => {

        const file = data.image[0]
        const formData = new FormData()

        formData.append('file',file)
        formData.append("upload_preset","hzeskmhn")

        axios({
            url: 'https://api.cloudinary.com/v1_1/dkhutgvlb/image/upload',
            method: "POST",
            headers: {
                "Content-Type":"application/x-www-formendcoded",

            }, data: formData,
        }).then((res) => {
            data.image = res.data.url
            try {
                props.onAdd(data);
                toastr.success("Thêm sản phẩm thành công")
                navigate('/admin/products');
            } catch (error) {
                toastr.error("Thêm sản phẩm không thành công")
            }
        })
        
    }

    return (
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(ThemSanPham)}>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Loại danh mục
                </label>
                <select id="" {...register('category')} className="shadow appearance-none border rounded w-[10%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" >
                    {category.map((item) => {
                        return <option value={`${item._id}`}>{item.name}</option>
                    })}
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Tên sản phẩm
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Tên sản phẩm" {...register('name', {required: true})} />
                {Object.keys(errors).length !== 0 && (
                        <div>
                            {errors.name?.type === "required" && <p className='text-red-600'>Tên sản phẩm không được bỏ trống</p>}
                        </div>
                    )}
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Giá sản phẩm
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="Giá sản phẩm" {...register('price', {required: true})} />
                {Object.keys(errors).length !== 0 && (
                        <div>
                            {errors.price?.type === "required" && <p className='text-red-600'>Giá sản phẩm không được bỏ trống</p>}
                        </div>
                    )}
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Ảnh sản phẩm
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="file" {...register('image')} />
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Thêm</button>
        </form>
    )
}

export default ProductAdd