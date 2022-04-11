import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'

import { data } from "autoprefixer";
import axios from "axios";
import { User } from "../types/User";
import { findone } from "../api/auth";


type UserEditProps = {
    editUser: (user: User) => void
}
type FormInputs = {
    name:string
    email:string
    password:string
    role:number
}


const UserEdit = (props: UserEditProps) => {
    const {register, handleSubmit, formState:{errors}, reset} = useForm<FormInputs>()
    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        const getone = async () => {
            const {data} = await findone(id)
            reset(data)
        }
        getone()
    },[])

    const onSubmit: SubmitHandler<FormInputs> = data => {
        props.editUser(data)
        navigate('/admin/users')
    }


    return (
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
            
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Tên người dùng
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Tên người dùng" {...register('name', { required: true })} />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Email
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Email" {...register('email')} />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Mật khẩu
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" {...register('password')} />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Role
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder=" 1 or 0" {...register('role')} />
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sửa</button>
        </form>
    )
}

export default UserEdit