import React from "react";
import { NavLink } from "react-router-dom";
import { check, isAuthenticate } from "../utils/localStorage";

type Props = {}

const Header = (props: Props) => {
    return (
        <header className=" sticky w-full bg-white z-50 top-0">
            <div className="w-[1300px] mx-auto grid gap-3 grid-cols-3">
                <div>
                    <NavLink to="/"><img src="https://shop.mixigaming.com/wp-content/uploads/2019/06/logo-mixi-t%C3%A9t.png" width={100} className=" m-4 object-cover" alt="" /></NavLink>
                    
                </div>
                <div>
                    <ul className="flex">
                        <li className="mx-[10px] text-[20px] mt-[30px]"><NavLink className="no-underline text-black hover:underline " to="/">Trang chủ</NavLink></li>
                        <li className="mx-[10px] text-[20px] mt-[30px]"><NavLink className="no-underline text-black hover:underline " to="/products">Sản phẩm</NavLink></li>
                        <li className="mx-[10px] text-[20px] mt-[30px]"><NavLink className="no-underline text-black hover:underline " to="/help">Hỗ trợ</NavLink></li>

                    </ul>
                </div>
                <div>
                    
                    {isAuthenticate()}
                       {check}
                </div>
            </div>
        </header>
    )
}
export default Header