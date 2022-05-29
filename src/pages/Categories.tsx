import React from 'react'
import { Link } from 'react-router-dom'
import { TypeCategory } from '../types/category'

type CategoriesProps = {
    categories: TypeCategory[],
    onRemoveCate: (id: number) => void
}

const Categories = (props: CategoriesProps) => {
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
                        Name
                        
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
            {props.categories?.map((category, index) => {
                     return  <tr className="bg-gray-100 text-center border-b text-sm text-gray-600" key={index}>
                    
                     <td className="p-2 border-r">{index+1}</td>
                     <td className="p-2 border-r">{category.name}</td>
                     <td>
                         <Link className="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin" to={`/admin/categories/${category._id}/edit`}>Edit</Link>
                         <button className="bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin" onClick={() => props.onRemoveCate(category._id!)}>remove</button>
                     </td>
                 </tr>          
                })}
           
            
        </tbody>
    </table>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mt-4">
        <Link  className="text-white no-underline" to={`/admin/categories/add`}>Thêm danh mục</Link>
    </button>

</div>
  )
}

export default Categories