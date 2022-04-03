import React from "react";
import { Link, NavLink } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { ProductType } from "../../types/product";

type ProductsProps = {
    products: ProductType[],
};


const ProductsPage = (props: ProductsProps) => {
    return (

        <div className="w-full relative bg-slate-100">
            <div>
                <Header/>
            </div>
           
            <article className="w-[1300px] mx-auto my-[50px] ">
                <div className="">
                   

                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {props.products.map((product) => {
                            return (
                                <Link to={`/products/${product._id}`}>
                                    <div className="group">
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
                                </Link>
                            )
                        })}

                    </div>


                </div>

            
            </article>
           <div>
               <Footer/>
           </div>

        </div>
    )
}

export default ProductsPage