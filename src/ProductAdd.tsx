import React from "react";
import {useForm, SubmitHandler} from 'react-hook-form'
import { ProductType } from "./types/product";
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
    const onSubmit: SubmitHandler<FormInputs> = (data: ProductType) => {
        props.onAdd(data);
        navigate('/product');
        
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Ten san pham" {...register('name', {required: true})} />
            <input type="number" placeholder="Gia san pham" {...register('price')} />
            <button>Them</button>
        </form>
    )
}

export default ProductAdd