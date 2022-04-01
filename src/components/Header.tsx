import React from "react";
import { NavLink } from "react-router-dom";

type Props = {}

const Header = (props: Props) => {
    return (
        <header className=" fixed w-full bg-white ">
                <div className="w-[1300px] mx-auto grid gap-3 grid-cols-3">
                    <div>
                        <img src="https://shop.mixigaming.com/wp-content/uploads/2019/06/logo-mixi-t%C3%A9t.png" className="w-[150px] m-4 object-cover" alt="" />
                    </div>
                    <div>
                        <ul className="flex">
                            <li className="mx-[10px] text-[20px] mt-[30px]"><NavLink className="no-underline text-black " to="/">Trang chủ</NavLink></li>
                            <li className="mx-[10px] text-[20px] mt-[30px]"><NavLink className="no-underline text-black " to="/products">Sản phẩm</NavLink></li>
                            <li className="mx-[10px] text-[20px] mt-[30px]"><NavLink className="no-underline text-black " to="/help">Hỗ trợ</NavLink></li>

                        </ul>
                    </div>
                    <div >
                        <ul className="grid grid-cols-4 gap-1">
                            <li className="mx-[10px] text-[20px] mt-[30px]"><NavLink className="no-underline text-black " to="/signin">Sign in</NavLink></li>
                            <li className="mx-[10px] text-[20px] mt-[30px]"><NavLink className="no-underline text-black " to="/signup">Sign up</NavLink></li>
                        </ul>
                    </div>
                </div>
            </header>
    )
}
export default Header