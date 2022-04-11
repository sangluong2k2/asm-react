import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

type Props = {}

const CartPage = (props: Props) => {
    return <div>
        <div><Header /></div>
        <div className='grid grid-cols-2 mb-[30px] '>
            
            <div className="container p-8 mx-auto mt-12 bg-white">
                <div className="w-full overflow-x-auto">
                    <table className="w-full shadow-inner">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-6 py-3 font-bold whitespace-nowrap">Sản phẩm</th>
                                <th className="px-6 py-3 font-bold whitespace-nowrap">Số lượng</th>
                                <th className="px-6 py-3 font-bold whitespace-nowrap">Giá</th>
                                <th className="px-6 py-3 font-bold whitespace-nowrap">Xóa</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-4 px-6 text-center whitespace-nowrap"></td>
                                <td className="p-4 px-6 text-center whitespace-nowrap">
                                    <div>
                                        <button data-id="${item.id}" className="btn btn-decrease px-2 py-0 shadow">-</button>
                                        <input
                                            type="text"
                                            name="qty"
                                            value="/"
                                            className="w-12 text-center bg-gray-100 outline-none"
                                        />
                                        <button data-id="${item.id}" className=" btn btn-increase px-2 py-0 shadow">+</button>
                                    </div>
                                </td>
                                <td className="p-4 px-6 text-center whitespace-nowrap"></td>
                                <td className="p-4 px-6 text-center whitespace-nowrap">
                                    <button data-id="${item.id}" className=" btn btn-remove px-2 py-0 text-red-100 bg-red-600 rounded">
                                        X
                                    </button>
                                </td>
                            </tr>

                            <tr>
                                <td className="p-4 px-6 text-center whitespace-nowrap"></td>
                                <td className="p-4 px-6 text-center whitespace-nowrap">
                                    <div className="font-bold">Tổng số lượng</div>
                                </td>
                                <td className="p-4 px-6 font-extrabold text-center whitespace-nowrap">
                                    Tổng tiền
                                </td>

                            </tr>
                        </tbody>
                    </table>
                    
                </div>
            </div>

            <div>
                <div className='relative'>
                    <h3 className='text-center text-xl text-gray-600 mb-10'>Thông tin thanh toán</h3>
                    <form action="" className='ml-10' >

                        <div className="mb-3">
                            <label className="form-label">Họ và tên</label>
                            <input type="text" className="form-control w-96"  />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Số điện thoại</label>
                            <input type="text" className="form-control w-96"  />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Địa chỉ</label>
                            <input type="text" className="form-control w-96"  />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Ghi chú</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" ></textarea>
                        </div>
                        <button className=' absolute bg-orange-500 py-2 text-white font-bold px-8 right-0'>Đặt Hàng</button>
                    </form>
                </div>
            </div>
        </div>
        <div>
            <Footer />
        </div>
    </div>
}

export default CartPage