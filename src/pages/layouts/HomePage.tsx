import React from "react";
import { Link, NavLink } from "react-router-dom";
import Product from "../../components/Product";

import { ProductType } from "../../types/product";

type ProductsProps = {
    products: ProductType[];
    
};


const HomePage = (props: ProductsProps) => {
    return (

        <div className="w-full relative">
            <header className="grid gap-4 grid-cols-3 fixed w-full bg-red-100 ">
                <div>
                    <img src="" alt="" />
                    <h1 className="text-red-600 m-[20px]">Logo</h1>
                </div>
                <div>
                    <ul className="flex">
                        <li className="mx-[10px] text-[20px] mt-[30px]"><NavLink className="no-underline text-black " to="/">Trang chủ</NavLink></li>
                        <li className="mx-[10px] text-[20px] mt-[30px]"><NavLink className="no-underline text-black " to="/products">Sản phẩm</NavLink></li>
                        <li className="mx-[10px] text-[20px] mt-[30px]"><NavLink className="no-underline text-black " to="">Hỗ trợ</NavLink></li>

                    </ul>
                </div>
                <div>
                    <h1 className="">Sign in</h1>
                </div>
            </header>
            <nav className="w-full pt-[100px] bg-purple-100">
                <h1 className="text-center">Banner</h1>
            </nav>
            <article>
                <div className="w-[1300px] mx-auto">
                    <div >
                        <h1 className="text-center">SAN PHAM BAN CHAY</h1>
                    </div>
                    
                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        
                    </div>


                </div>
            </article>
        </div>
    )
}

export default HomePage