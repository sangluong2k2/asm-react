import React, { useEffect } from "react";
import {useForm, SubmitHandler} from 'react-hook-form'
import { ProductType } from "../types/product";
import {useNavigate, useParams} from 'react-router-dom'
import { read } from "../api/product";


type ProductEditProps = {
    onUpdate: (Product: ProductType) => void
}
type FormInputs = {
    name: string,
    price: number
}


const ProductEdit = (props: ProductEditProps) => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm<FormInputs>();
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        const getProducts = async () => {
            const {data} = await read(id);
            reset(data)
        }
        getProducts();
    }, [])

    const onSubmit: SubmitHandler<FormInputs> = (data: ProductType) => {
        props.onUpdate(data);
        navigate('/admin/product');
        
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Ten san pham" {...register('name', {required: true})} />
            <input type="number" placeholder="Gia san pham" {...register('price')} />
            <button>Sua</button>
        </form>
    )
}

export default ProductEdit