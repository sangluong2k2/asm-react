import React from "react";
import { Link } from "react-router-dom";
import { ProductType } from "../types/product";

type ProductsProps = {
    product: ProductType[];
    onRemove: (id: number) => void
};

const Products = (props: ProductsProps) => {

    return (
        <div className="table w-full p-2">
        <table className="w-full border">
            <thead>
                <tr className="bg-gray-50 border-b">
                    
                    <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div className="flex items-center justify-center">
                            ID
                        </div>
                    </th>
                    <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div className="flex items-center justify-center">
                            Image
                            
                        </div>
                    </th>
                    <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div className="flex items-center justify-center">
                            Name
                            
                        </div>
                    </th>
                    <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div className="flex items-center justify-center">
                            Price
                            
                        </div>
                    </th>
                    
                   
                    <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div className="flex items-center justify-center">
                            Action
                           
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                {props.product.map((product, index) => {
                         return  <tr className="bg-gray-100 text-center border-b text-sm text-gray-600" key={index}>
                        
                         <td className="p-2 border-r">{index+1}</td>
                         <td className="p-2 border-r"><img className="mx-auto" src={`${product.image}`} width={50} alt="" /></td>
                         <td className="p-2 border-r">{product.name}</td>
                         <td className="p-2 border-r">{product.price}</td>
                         
                         <td>
                             <Link className="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin" to={`/admin/products/${product._id}/edit`}>Edit</Link>
                             <button className="bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin" onClick={() => props.onRemove(product._id!)}>remove</button>
                         </td>
                     </tr>          
                    })}
               
                
            </tbody>
        </table>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mt-4">
            <Link  className="text-white no-underline" to={`/admin/products/add`}>Thêm sản phẩm</Link>
        </button>

    </div>
    )
}

export default Products;