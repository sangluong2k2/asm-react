import React from "react";
import { ProductType } from "./types/product";

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
                        <th>aaa</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    
                </thead>
                <tbody>
                    {props.products?.map((product, index) => {
                         return <tr key={index}>
                             <td>{index + 1 }</td>
                             <td>{product.name}</td>
                             <td>{product.price}</td>
                             <td><button onClick={() => props.onRemove(product.id)}>remove</button></td>
                         </tr>
                    })}
                </tbody>
            </table>

        </div>
    )
}

export default Products;