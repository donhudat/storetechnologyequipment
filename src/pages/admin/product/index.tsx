import Footer from "@/components/footer";
import Header from "@/components/header";
import { ProductResponse } from "@/pages/api/product"
import { DeleteProductResponse } from "@/pages/api/product/delete/[id]";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

export default function AdminProductPage({ data: { data } }: { data: ProductResponse }) {
  if (!data || !Array.isArray(data)) {
    return null;
  }
  const [products, setProducts] = useState(data);

  const handleDeleteProduct = async (id: number) => {
    const res = await fetch("http://localhost:3000/api/product/delete/" + id, {
      method: "DELETE"
    })
    const resJson: DeleteProductResponse = await res.json()
    if (resJson.success) {
      toast.success("Xóa sản phẩm thành công")
      setProducts(pre => pre.filter(p => p.id != id))
    } else toast.error("Xóa sản phẩm thất bại")
  }

  return (
    <div className="bg-white">
      <Header />
      <div className="bg-white">
        {products.map((product, id) => {
          return (

            <div key={id} className="flex justify-between w-[900px] items-center h-10 text-[16px] p-10 gap-5 border border-solid border-gray-300 ml-12 mb-4 mt-4">
              <img className="h-[45px]" src={product.img} alt="" />
              <div>{product.name}</div>
              <div className="flex justify-end ">
                <button onClick={() => handleDeleteProduct(product.id)} className="bg-[#e44f21] h-12 w-20 hover:bg-[#e07859] text-white font-bold rounded mr-4">Xóa</button>
                <Link href={"product/" + product.id} className="bg-[#e44f21] h-12 w-20 hover:bg-[#e07859] text-white font-bold rounded items-center flex justify-center">Sửa</Link>
              </div>
            </div>

          )
        })}
      </div>
      <Footer />
    </div>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/product`)
  const data: ProductResponse = await res.json()
  return { props: { data } }
}