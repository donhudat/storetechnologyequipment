import { useRouter } from "next/router";
import { BaseSyntheticEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Header from '@/components/header'
import Container from '@/components/container'
import Footer from '@/components/footer'
interface Product {
  name: string;
  price: number;
  sale_price: number;
  img: string;
}

interface ProductResponse {
  success: boolean;
  data: Product;
}

const EditProduct = () => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState<Product>({
    name: "",
    img: "",
    price: 0,
    sale_price: 0
  })
  useEffect(() => {
    if (id != "add") {
      fetch("http://localhost:3000/api/product/" + id)
        .then(res => res.json())
        .then((productRes: ProductResponse) => {
          if (productRes.data) setData(productRes.data)
        })
    }
  }, [id])
  const handleChangeData = (type: keyof Product, value: string | number) => {
    setData({ ...data, [type]: value })
  }
  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    if (id == "add") {
      fetch("http://localhost:3000/api/product/create", {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(data),
      })
        .then(res => res.json())
        .then((resJson: ProductResponse) => {
          if (resJson.success) {
            toast.success("Thêm sản phẩm thành công")
          } else toast.error("Thêm sản phẩm thất bại")
        })
        .catch(() => toast.error("Thêm sản phẩm thất bại"))
    }
    else {
      fetch("http://localhost:3000/api/product/" + id, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "PUT",
        body: JSON.stringify(data),
      })
        .then(res => res.json())
        .then((resJson: ProductResponse) => {
          if (resJson.success) {
            toast.success("Sửa sản phẩm thành công")
          } else toast.error("Sửa sản phẩm thất bại")
        })
        .catch(() => toast.error("Sửa sản phẩm thất bại"))
    }
  }
  return (
    <div>
      <Header />
      <form className="flex flex-col text-xl gap-3 mt-10 justify-center items-center " onSubmit={(e) => handleSubmit(e)}>
        <input className="border border-solid border-gray-400 rounded-xl p-4 h-[40px] w-[600px]" type="text" placeholder="Tên sản phẩm" value={data?.name} onChange={(e) => handleChangeData("name", e.target.value)} />
        <input className="border border-solid border-gray-400 rounded-xl p-4 h-[40px] w-[600px]" type="number" placeholder="Giá" value={data?.price > 0 ? data?.price : ""} onChange={(e) => handleChangeData("price", e.target.value)} />
        <input className="border border-solid border-gray-400 rounded-xl p-4 h-[40px] w-[600px]" type="number" placeholder="Giá sale" value={data?.sale_price > 0 ? data?.sale_price : ""} onChange={(e) => handleChangeData("sale_price", e.target.value)} />
        <input className="border border-solid border-gray-400 rounded-xl p-4 h-[40px] w-[600px]" type="text" placeholder="Ảnh minh dọa" value={data?.img} onChange={(e) => handleChangeData("img", e.target.value)} />
        <button className=" focus:bg-[#f5692d]   m-8 h-14 w-40 bg-[#ccc] border border-solid border-gray-400 rounded-xl" type="submit">{id === "add" ? "Thêm sản phẩm" : "Cập nhật sản phẩm"}</button>

      </form>
      <Footer />
    </div>
  )
}

export default EditProduct;