import CartItem from "@/components/cart-item";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { useAuth } from "@/hook/useAuth";
import { ProductResponse } from "@/pages/api/product"
import { DeleteProductResponse } from "@/pages/api/product/delete/[id]";
import Link from "next/link";
import { useMemo, useState } from "react";
import { toast } from "react-toastify";
import CurrencyFormatter from "@/components/CurrencyFormatter";


export default function Cart() {
  const { cart } = useAuth();
  const total = useMemo(() => cart.reduce((accumulator, item) => accumulator + item.total, 0), [cart])

  return (
    <div className="">
      <Header />
      <div className="  flex justify-center ">
        <div className=" main h-full w-fit  flex flex-col items-center">
          <div className="cart_heading">
            <h1 className="text-4xl font-semibold mt-8 mb-8 " >Giỏ hàng của bạn <i className="fa-solid fa-basket-shopping"></i></h1>
          </div>
          <div className="cart__product  h-fit">
            <div className="cart__product__item bg-white rounded-xl flex items-center flex-col gap-10">
              {/* Sản Phẩm */}
              {
                cart?.map((item, index) => {
                  return <div key={index}>
                    <CartItem product={item.product} quantity={item.quantity} id={item.id as number} />
                  </div>
                })
              }
              {/* sản Phẩm */}
            </div>
          </div>
          <div className="sum_price fixed bottom-0 h-32 w-[600px] bg-white shadow-lg  shadow-[#192e37] flex justify-between">
            <div className="ml-8 text-2xl mt-6 font-semibold">
              Tạm Tính: <CurrencyFormatter amount={total} />
            </div>
            <div className=" h-16 w-36 bg-red-600 flex justify-center items-center mr-8 mt-6 text-2xl rounded-2xl font-semibold text-white">Mua Ngay</div>
          </div>
        </div>
      </div>


    </div>
  )
}

