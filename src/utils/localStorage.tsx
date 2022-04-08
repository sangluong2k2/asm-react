import { NavLink } from "react-router-dom";
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
        return <div className="grid grid-cols-3 gap-1" >

            <select name="" id="">
                <option value=""></option>
            </select>
        </div>
    } else {
        return <div >
            <ul className="grid grid-cols-4 gap-2">
                <li className="mx-[10px] text-[20px] mt-[30px]"><NavLink className="no-underline text-black " to="/signin">Sign in</NavLink></li>
                <li className="mx-[10px] text-[20px] mt-[30px]"><NavLink className="no-underline text-black " to="/signup">Sign up</NavLink></li>
            </ul>
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