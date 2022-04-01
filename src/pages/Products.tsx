import React from "react";
import { Link } from "react-router-dom";
import { ProductType } from "../types/product";

type ProductsProps = {
    products: ProductType[];
    onRemove: (id: number) => void
};

const Products = (props: ProductsProps) => {
    
    return (

        <div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                    
                </thead>
                <tbody>
                    {props.products?.map((product, index) => {
                         return <tr key={index}>
                             <td>{index + 1 }</td>
                             <td>{product.name}</td>
                             <td>{product.price}</td>
                             <td>
                                
                                <Link className="text-red-600" to={`/admin/products/${product.id}/edit`} >Edit</Link>
                                
                                <button onClick={() => props.onRemove(product.id)}>remove</button>
                             </td>
                         </tr>
                    })}
                </tbody>
            </table>

        </div>
    )
}

export default Products;