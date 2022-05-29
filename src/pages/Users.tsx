import React from "react";
import { Link } from "react-router-dom";
import { User } from "../types/User";

type UsersProps = {
    users: User[];
};

const Users = (props: UsersProps) => {

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
                            Email
                            
                        </div>
                    </th>
                    <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div className="flex items-center justify-center">
                            Role
                            
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
                {props.users?.map((user, index) => {
                         return  <tr className="bg-gray-100 text-center border-b text-sm text-gray-600" key={index}>
                        
                         <td className="p-2 border-r">{index+1}</td>
                         <td className="p-2 border-r">{user.name}</td>
                         <td className="p-2 border-r">{user.email}</td>
                         <td className="p-2 border-r">{user.role}</td>
                         <td>
                             <Link className="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin" to={`/admin/users/${user._id}/edit`}>Edit</Link>
                             
                         </td>
                     </tr>          
                    })}
               
                
            </tbody>
        </table>

    </div>
    )
}

export default Users;