import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { signup } from '../api/auth';
import toastr from 'toastr'
import "toastr/build/toastr.min.css"

type TypeInputs = {
    name: string
    email: string
    password: string
    role: number
}

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<TypeInputs>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<TypeInputs> = data => {
        try {
            signup(data);
            toastr.success("Đăng ký thành công")
            navigate("/signin");
        } catch (error) {
            toastr.error("Đăng ký không thành công")
        }

    }
    return (
        <div className='w-full max-w-xs mx-auto mt-[100px]'>
            <div>
                <Link to="/">Quay lại</Link>
            </div>
            <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Username
                    </label>
                    <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" placeholder='Tên người dùng' {...register('name', { required: true, minLength: 6 })} />
                    {Object.keys(errors).length !== 0 && (
                        <div>
                            {errors.name?.type === "required" && <p className='text-red-600'>Tên không được bỏ trống</p>}
                        </div>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                    </label>
                    <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="email" placeholder='Email' {...register('email', { required: true })} />
                    {Object.keys(errors).length !== 0 && (
                        <div>
                            {errors.email?.type === "required" && <p className='text-red-600'>Email không được bỏ trống</p>}
                        </div>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                    </label>
                    <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="password" placeholder='Mật khẩu' {...register('password', { required: true, minLength: 6 })} />
                    {Object.keys(errors).length !== 0 && (
                        <div>
                            {errors.password?.type === "required" && <p className='text-red-600'>Mật khẩu không được bỏ trống</p>}
                        </div>
                    )}
                   
                </div>
                <div className='mb-4'>
                    <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="hidden" value={`1`} {...register('role')} />
                </div>
                <div className='flex items-center justify-between'>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Đăng ký</button>
                    <Link className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800' to="">Quên mật khẩu</Link>
                </div>
            </form>
        </div>

    )
}

export default Signup 