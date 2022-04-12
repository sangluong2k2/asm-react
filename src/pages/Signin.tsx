import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { signin, signup } from '../api/auth';
import { authenticated } from '../utils/localStorage';
import toastr from 'toastr'
import "toastr/build/toastr.min.css"

type TypeInputs = {
    email: string,
    password: string,
    role: number
}

const Signin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<TypeInputs>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<TypeInputs> = async data => {
        try {
            const { data: user } = await signin(data);
            console.log(user);
            // localstorage
            authenticated(user, () => {
                navigate('/');
            })
        } catch (error) {
            toastr.error("Bạn đăng nhập không thành công mởi bạn đăng nhập lại")
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
                        Email
                    </label>
                    <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="email" placeholder='Email' {...register('email', {required:true})} />
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
                    <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="password" placeholder='Mật khẩu' {...register('password', {required: true})} />
                    {Object.keys(errors).length !== 0 && (
                        <div>
                            {errors.password?.type === "required" && <p className='text-red-600'>Mật khẩu không được bỏ trống</p>}
                        </div>
                    )}
                </div>
                <div className='flex items-center justify-between'>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Đăng nhập</button>
                    <Link className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800' to="">Quên mật khẩu</Link>
                </div>

            </form>
        </div>
    )
}

export default Signin 