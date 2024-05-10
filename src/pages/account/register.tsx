import Header from '@/components/header'
import { useRouter } from 'next/router';
import { BaseSyntheticEvent, useState } from 'react'
import { toast } from 'react-toastify';
import { RegisterResponse } from '../api/user/register';

export type User = {
  id?: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

function Register() {
  const router = useRouter()
  const [data, setData] = useState<User>({ firstname: "", lastname: "", email: "", password: "" })
  const [errMessage, setErrMessage] = useState<string>("")
  const handleChangeData = (e: BaseSyntheticEvent, type: keyof User) => {
    e.preventDefault();
    setData({ ...data, [type]: e.target.value })
  }
  const handleRegister = (e: BaseSyntheticEvent) => {
    setErrMessage("")
    e.preventDefault();
    fetch("http://localhost:3000/api/user/register", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then((res: RegisterResponse) => {
        if (res.success) {
          toast.success("Tạo tài khoản thành công")
          router.push("/account/login")
        } else {
          toast.error("Tạo tài khoản thất bại")
          setErrMessage(res.message ?? "tạo tài khoản thất bại")
        }
      })
      .catch(() => {
        toast.error("Tạo tài khoản thất bại")
        setErrMessage("tạo tài khoản thất bại")
      })
  }
  return (
    <div>
      <Header />
      <div className="bg-gray-100 h-[850px]  flex items-center justify-center">
        <img src="https://i.imgur.com/QrnOge0.png" alt="" />
        <div className="bg-white p-8 h-fit w-[500px] rounded-2xl shadow-md ">
          <h2 className="text-4xl font-semibold mb-4 items-center flex justify-center">Đăng ký để trở thành Cowmember</h2>
          {errMessage && <span className='text-red-600 flex justify-center'>{errMessage}</span>}
          <form onSubmit={(e) => handleRegister(e)}>
            <div className="mb-4">
              <label htmlFor="name" className=" text-2xl  block text-gray-600 font-medium">Họ</label>
              <input type="text" id="name" value={data.firstname} onChange={(e) => { handleChangeData(e, "firstname") }} name="name" className="h-20 w-full px-4 py-2 border rounded-2xl focus:outline-none focus:border-blue-500" placeholder="Nhập họ và tên" required />
            </div>
            <div className="mb-4">
              <label htmlFor="username" className=" text-2xl  block text-gray-600 font-medium">Tên</label>
              <input type="text" id="username" value={data.lastname} onChange={(e) => { handleChangeData(e, "lastname") }} name="username" className="h-20 w-full px-4 py-2 border rounded-2xl focus:outline-none focus:border-blue-500" placeholder="Nhập tên đăng nhập" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className=" text-2xl  block text-gray-600 font-medium">Email</label>
              <input type="email" id="email" name="email" onChange={(e) => { handleChangeData(e, "email") }} value={data.email} className="h-20 w-full px-4 py-2 border rounded-2xl focus:outline-none focus:border-blue-500" placeholder="Nhập Email" required />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="text-2xl  block text-gray-600 font-medium">Mật khẩu</label>
              <input type="password" id="password" value={data.password} onChange={(e) => { handleChangeData(e, "password") }} name="password" className="h-20 w-full px-4 py-2 border rounded-2xl focus:outline-none focus:border-blue-500" placeholder="Nhập mật khẩu" required />
            </div>
            <div className="h-12 flex justify-end items-center text-xl">
              <a href="http://localhost:3000/account/login">Bạn đã tài khoản?</a>
            </div>
            <button type="submit" className="mt-12 w-full h-20 text-3xl bg-gradient-to-r from-[#fe6433] to-[#f53e2d] text-white font-medium py-2 px-4 rounded-2xl hover:bg-blue-700 focus:outline-none focus:bg-4a4a4a">Đăng Ký</button>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Register