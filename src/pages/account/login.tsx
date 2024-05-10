import Header from '@/components/header'
import { useAuth } from '@/hook/useAuth';
import { useRouter } from 'next/router';
import { BaseSyntheticEvent, useState } from 'react'
import { toast } from 'react-toastify';
import { LoginResponse } from '../api/user/login';
import { User } from './register';
type Data = {
  email: string;
  password: string;
}
function Login() {
  const router = useRouter()
  const { login } = useAuth()
  const [data, setData] = useState<Data>({ email: "", password: "" })
  const [errMessage, setErrMessage] = useState<string>("")
  const handleChangeData = (e: BaseSyntheticEvent, type: keyof Data) => {
    e.preventDefault();
    setData({ ...data, [type]: e.target.value })
  }
  const handleLogin = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    setErrMessage("")
    fetch("http://localhost:3000/api/user/login", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then((res: LoginResponse) => {
        if (res.success) {
          login(res.data as User)
          toast.success("đăng nhập thành công")
          router.push("/")
        } else {
          toast.error("đăng nhập thất bại")
          setErrMessage(res.message ?? "đăng nhập thất bại")
        }
      })
      .catch(() => {
        toast.error("đăng nhập thất bại")
        setErrMessage("đăng nhập thất bại")
      })
  }
  return (
    <div>
      <Header />
      <div className="bg-gray-100 h-[850px]  flex items-center justify-center">
        <img src="https://i.imgur.com/QrnOge0.png" alt="" />
        <div className="bg-white p-8 h-fit w-[500px] rounded-2xl shadow-md ">
          <h2 className="text-4xl font-semibold mb-4 items-center flex justify-center">Đăng nhập với Cowmember</h2>
          {errMessage && <span className='text-red-600 flex justify-center'>{errMessage}</span>}
          <form onSubmit={handleLogin}>
            <div className="mb-4 ">
              <label htmlFor="username" className=" text-2xl  block text-gray-600 font-medium">Email</label>
              <input type="email" id="username" value={data.email} onChange={(e) => handleChangeData(e, "email")} name="username" className="h-20 w-full px-4 py-2 border rounded-2xl focus:outline-none focus:border-blue-500" placeholder="Nhập tên đăng nhập" required />
            </div>
            <div className="mb-4 ">
              <label htmlFor="password" className="text-2xl  block text-gray-600 font-medium">Mật khẩu</label>
              <input type="password" id="password" value={data.password} onChange={(e) => handleChangeData(e, "password")} name="password" className=" h-20 w-full px-4 py-2 border rounded-2xl focus:outline-none focus:border-blue-500" placeholder="Nhập mật khẩu" required />
            </div>
            <div className="h-12 flex justify-end items-center text-xl">
              <a href="http://localhost:3000/account/register">Bạn chưa có tài khoản?</a>
            </div>
            <button type="submit" className="w-full h-20 text-3xl bg-gradient-to-r from-[#fe6433] to-[#f53e2d] text-white font-medium py-2 px-4 rounded-2xl hover:bg-blue-700 focus:outline-none focus:bg-4a4a4a">Đăng nhập</button>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Login