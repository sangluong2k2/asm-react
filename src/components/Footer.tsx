import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Footer = (props: Props) => {
    return (
        <div>
            <footer className="w-full  bg-white">
                <div className="grid grid-cols-4 gap-4 mx-auto w-[1300px] pt-[20px] border-b-black">
                    <div>
                        <h4>Về chúng tôi</h4>
                        <p>Website chính thức và duy nhất của Mixi Shop</p>
                    </div>
                    <div>
                        <h4>Danh mục sản phẩm</h4>
                        <li><Link to="" className="text-[20px] mt-[5px] text-[15px]">Áo Csgo</Link></li>
                        <li><Link to="" className="text-[20px] mt-[5px] text-[15px]">Áo Csgo</Link></li>
                        <li><Link to="" className="text-[20px] mt-[5px] text-[15px]">Áo Csgo</Link></li>
                        <li><Link to="" className="text-[20px] mt-[5px] text-[15px]">Áo Csgo</Link></li>

                    </div>
                    <div>
                        <h4>Thông tin</h4>
                        <li><Link to="" className="text-[20px] mt-[5px] text-[15px]">Giới thiệu</Link></li>
                        <li><Link to="" className="text-[20px] mt-[5px] text-[15px]">Chính sách</Link></li>
                        <li><Link to="" className="text-[20px] mt-[5px] text-[15px]">Điều khoản</Link></li>
                        <li><Link to="" className="text-[20px] mt-[5px] text-[15px]">Site map</Link></li>
                    </div>
                    <div>
                        <h4>Hỗ trợ</h4>
                        <p>Mọi  thắc mắc xin liên hệ: <b>0862390156</b></p>
                    </div>
                    <div className="mt-[20px] text-[18px] text-slate-300">
                        Copyright 2022 &copy MixiShop
                    </div>
                </div>

            </footer>
        </div>
    )
}

export default Footer