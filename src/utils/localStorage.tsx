import { useState } from "react";
import { NavLink, Link, Navigate } from "react-router-dom";
import { User } from "../types/User";

export const authenticated = (user: User, next: () => void) => {
    localStorage.setItem('user', JSON.stringify(user));
    next();
}
export const isAuthenticate = () => {
    // if(!localStorage.getItem('user')) return;
    // return JSON.parse(localStorage.getItem('user') as string)
    const result = JSON.parse(localStorage.getItem('user') as string);

    if (localStorage.getItem('user')) {
        return <div className="grid grid-cols-3 gap-1 relative" >
            <button className="bg-[#16b8ba] hover:bg-[#119ea0]  font-bold py-2 px-4 border border-[#119ea0] rounded px-[10px] text-[16px] mt-[30px] absolute right-0">
                <Link className={"text-[#484849] no-underline hover:text-[#484849]"} to={'/'} onClick={() => { localStorage.removeItem('user'); setuser(1) }}>Đăng xuất</Link>
            </button>

        </div>
    } else {
        return <div className="relative" >
            <div className="grid grid-cols-2 gap-4 absolute right-0 ">
                <button className="bg-[#16b8ba] hover:bg-[#119ea0]  font-bold py-2 px-4 border border-[#119ea0] rounded px-[10px] text-[16px] mt-[30px] ">
                    <Link className={"text-[#484849] no-underline hover:text-white "} to={'/signup'} >Đăng ký</Link>
                </button>

                <button className="bg-[#16b8ba] hover:bg-[#119ea0]  font-bold py-2 px-4 border border-[#119ea0] rounded px-[10px] text-[16px] mt-[30px] ">
                    <Link className={"text-[#484849] no-underline hover:text-white"} to={'/signin'} >Đăng nhập</Link>
                </button>

            </div>
        </div>
    }
}
export const usertk = () => {
    if (localStorage.getItem('user')) {
        return JSON.parse(localStorage.getItem('user') as string)
    } else {
        return false
    }
}

export const check = () => {
    const checker = JSON.parse(localStorage.getItem('user') as string)
    if (checker) {
        if (checker.user.role == 0) {
            return <div >
                <ul className="grid grid-cols-4 gap-2">
                    <li className="mx-[10px] text-[20px] mt-[30px]"><NavLink className="no-underline text-black" to="/admin">Admin</NavLink></li>
                </ul>
            </div>
        } else {
            ""
        }
    }
}