import React from "react";
import { Link, NavLink } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { ProductType } from "../../types/product";

type ProductsProps = {
    products: ProductType[],
};


const HomePage = (props: ProductsProps) => {
    return (

        <div className="w-full relative bg-slate-100">
            <div>
                <Header />
            </div>
            <nav className="w-full pt-[150px] ">
                <img src="https://shop.mixigaming.com/wp-content/uploads/2022/01/MixiShop2022.png" alt="" />
            </nav>
            <article className="w-[1300px] mx-auto my-[50px] ">
                <div className="">
                    <div className="text-center">
                        <h1 className="text-center">Sản phẩm bán chạy</h1>
                        <button className="border py-[5px] px-[50px] text-blue-400 hover:text-black hover:bg-blue-200 text-[20px] mt-[20px]">Xem thêm</button>
                    </div>

                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {props.products.map((product) => {
                            return (
                                <Link className="no-underline " to={`/products/${product._id}`}>
                                    <div className="group">
                                        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                            <img className="w-full h-full object-center object-cover lg:w-full lg:h-full" src={`${product.image}`} alt="" />
                                        </div>
                                        <div className="mt-4 flex justify-between">
                                            <div>
                                                <h3 className="text-sm text-gray-700 no-underline ">
                                                    <Link to="" className="">
                                                        <span aria-hidden="true" className=" inset-0"></span>
                                                        {product.name}
                                                    </Link>
                                                </h3>

                                            </div>
                                            <p className="text-sm font-bold text-gray-900 ">{product.price}</p>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}

                    </div>
                    <div className=" px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                        <div className="flex-1 flex justify-between sm:hidden">
                            <Link to="" className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Previous </Link>
                            <Link to="" className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"> Next </Link>
                        </div>
                        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between ">
                            <div className="mx-auto">
                                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                    <Link to="" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                        <span className="sr-only">Previous</span>

                                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                                        </svg>
                                    </Link>

                                    <Link to="" aria-current="page" className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 1 </Link>
                                    <Link to="" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 2 </Link>
                                    <Link to="" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"> 3 </Link>
                                    <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"> ... </span>
                                    <Link to="" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"> 8 </Link>
                                    <Link to="" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 9 </Link>
                                    <Link to="" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 10 </Link>
                                    <Link to="" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                        <span className="sr-only">Next</span>

                                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                        </svg>
                                    </Link>
                                </nav>
                            </div>
                        </div>
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
            <div>
                <Footer />
            </div>

        </div>
    )
}

export default HomePage