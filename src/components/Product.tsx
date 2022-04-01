import React from 'react'
import { Link } from 'react-router-dom'
import { ProductType } from '../types/product'

type ProductProps = {
    product: ProductType[]
}

const Product = (props: ProductProps) => {
    {props.product?.map((product) => {
        return ( 
            <div className="group">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <h3 className="w-full h-full object-center object-cover lg:w-full lg:h-full">img</h3>
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm text-gray-700">
                            <Link to="">
                                <span aria-hidden="true" className="absolute inset-0"></span>
                                {product.name}
                            </Link>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">Black</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
            </div>
        )
    } )}
    
}

export default Product