import React from "react";
import { Link, NavLink } from "react-router-dom";
import Header from "../../components/Header";

import { ProductType } from "../../types/product";

type ProductsProps = {
    products: ProductType[],
};


const HomePage = (props: ProductsProps) => {
    return (

        <div className="w-full relative bg-slate-100">
            <div>
                <Header/>
            </div>
            <nav className="w-full pt-[150px] ">
                <img src="https://shop.mixigaming.com/wp-content/uploads/2022/01/MixiShop2022.png" alt="" />
            </nav>
            <article className="w-[1300px] mx-auto mt-[50px]">
                <div className="">
                    <div className="text-center">
                        <h1 className="text-center">Sản phẩm bán chạy</h1>
                        <button className="border py-[5px] px-[50px] text-blue-400 hover:text-black hover:bg-blue-200 text-[20px] mt-[20px]">Xem thêm</button>
                    </div>

                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {props.products.map((product) => {
                            return (
                                <div className="group ">
                                    <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                        <img className="w-full h-full object-center object-cover lg:w-full lg:h-full" src="https://vanhoadoanhnghiepvn.vn/wp-content/uploads/2020/08/112815953-stock-vector-no-image-available-icon-flat-vector.jpg" alt="" />
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div>
                                            <h3 className="text-sm text-gray-700">
                                                <Link to="">
                                                    <span aria-hidden="true" className=" inset-0"></span>
                                                    {product.name}
                                                </Link>
                                            </h3>

                                        </div>
                                        <p className="text-sm font-medium text-gray-900">{product.price}</p>
                                    </div>
                                </div>
                            )
                        })}

                    </div>


                </div>

                <div className="mt-5">
                    <div className="text-center">
                        <h1 className="text-center">Feedback của khách hàng</h1>
                    </div>
                    <div className="grid grid-cols-4 grid-rows-2 grid-2 mt-[30px]">
                        <img src="https://shop.mixigaming.com/wp-content/uploads/2019/10/Untitled-Capture2553-scaled.jpg" className="w-[200px] m-2" alt="" />
                        <img src="https://shop.mixigaming.com/wp-content/uploads/2019/10/Untitled-Capture2553-scaled.jpg" className="w-[200px] m-2" alt="" />
                        <img src="https://shop.mixigaming.com/wp-content/uploads/2019/10/Untitled-Capture2553-scaled.jpg" className="w-[200px] m-2" alt="" />
                        <img src="https://shop.mixigaming.com/wp-content/uploads/2019/10/Untitled-Capture2553-scaled.jpg" className="w-[200px] m-2" alt="" />
                        <img src="https://shop.mixigaming.com/wp-content/uploads/2019/10/Untitled-Capture2553-scaled.jpg" className="w-[200px] m-2" alt="" />
                        <img src="https://shop.mixigaming.com/wp-content/uploads/2019/10/Untitled-Capture2553-scaled.jpg" className="w-[200px] m-2" alt="" />
                        <img src="https://shop.mixigaming.com/wp-content/uploads/2019/10/Untitled-Capture2553-scaled.jpg" className="w-[200px] m-2" alt="" />
                        <img src="https://shop.mixigaming.com/wp-content/uploads/2019/10/Untitled-Capture2553-scaled.jpg" className="w-[200px] m-2" alt="" />

                    </div>
                </div>
            </article>
            <footer className="w-full  bg-white">
                <div className="grid grid-cols-4 gap-4 mx-auto w-[1300px] pt-[20px] border-b-black">
                    <div>
                        <h4>Về chúng tôi</h4>
                        <p>Website chính thức và duy nhất của Mixi Shop</p>
                    </div>
                    <div>
                        <h4>Danh mục sản phẩm</h4>
                        <li><Link to="" className="text-[20px] mt-[5px]">Áo Csgo</Link></li>
                        <li><Link to="" className="text-[20px] mt-[5px]">Áo Csgo</Link></li>
                        <li><Link to="" className="text-[20px] mt-[5px]">Áo Csgo</Link></li>
                        <li><Link to="" className="text-[20px] mt-[5px]">Áo Csgo</Link></li>

                    </div>
                    <div>
                        <h4>Thông tin</h4>
                        <li><Link to="" className="text-[20px] mt-[5px]">Giới thiệu</Link></li>
                        <li><Link to="" className="text-[20px] mt-[5px]">Chính sách</Link></li>
                        <li><Link to="" className="text-[20px] mt-[5px]">Điều khoản</Link></li>
                        <li><Link to="" className="text-[20px] mt-[5px]">Site map</Link></li>
                    </div>
                    <div>
                        <h4>Hỗ trợ</h4>
                        <p>Mọi  thắc mắc xin liên hệ: 0862390156</p>
                    </div>
                    <div className="mt-[20px] text-[18px] text-slate-300">
                    Copyright 2022 &copy MixiShop 
                    </div>
                </div>
               
            </footer>

        </div>
    )
}

export default HomePage