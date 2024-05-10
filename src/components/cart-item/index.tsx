import { useAuth } from "@/hook/useAuth";
import { AddCartResponse } from "@/pages/api/cart/add";
import ProductResponse from "@/response-models/product";
import { useState } from "react";
import { toast } from "react-toastify";
import CurrencyFormatter from "@/components/CurrencyFormatter";


const CartItem = ({ product, quantity, id }: { product: ProductResponse, quantity: number, id: number }) => {
  const [count, setCount] = useState(quantity);
  const [isCoreVisible, setIsCoreVisible] = useState(false);
  const { user, fetchCart } = useAuth();

  const handleSelectProductClick = () => {
    setIsCoreVisible(!isCoreVisible);

  };
  const handleChangeQuantity = (isIcrement: boolean) => {
    let quantity = count
    if (isIcrement) ++quantity
    else --quantity
    setCount(quantity)
    if (quantity === 0) {
      handleDeleteCart();
      return;
    }
    fetch("http://localhost:3000/api/cart/update", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "PUT",
      body: JSON.stringify({
        id_user: user?.id,
        id_product: product.id,
        quantity
      })
    }).then(res => res.json())
      .then((data: AddCartResponse) => {
        if (data.success) {
          toast.success("Sửa số lượng thành công")
          fetchCart();
        } else {
          toast.error("Sửa số lượng thất bại!")
        }
      }).catch(() => {
        toast.error("Sửa số lượng thất bại!")
      })
  }
  const handleDeleteCart = () => {
    fetch("http://localhost:3000/api/cart/delete/" + id, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "DELETE"
    }).then(res => res.json())
      .then((data: AddCartResponse) => {
        if (data.success) {
          toast.success("Sửa số lượng thành công")
          fetchCart();
        } else {
          toast.error("Sửa số lượng thất bại!")
        }
      }).catch(() => {
        toast.error("Sửa số lượng thất bại!")
      })
  }
  return (
    <div className=" flex p-10 w-full border-b border-solid border-[#ccc]">
      <div onClick={handleSelectProductClick} className="select_product h-[18px] w-[18px] border border-solid border-gray-500 rounded-[50%] mt-10 cursor-pointer">
        <div className={`core ${isCoreVisible ? 'flex' : 'hidden'}`}></div>
      </div>
      <img src={product.img} className="cart__priduct__item--img h-[180px] "></img>
      <div className="cart__priduct__item--info flex-col w-[300px]">
        <div className="mt-10 text-3xl flex-row-reverse">{product.name}</div>
        <div className="price flex mt-4 items-center">
          <div className="text-[17px] text-[#f53e2d]"> <CurrencyFormatter amount={product.sale_price} /> </div>
          <div className="ml-6 text-[14px] text-zinc-400 line-through"><CurrencyFormatter amount={product.price} /></div>
        </div>
      </div>
      <div className="count__product  flex items-center justify-center">
        <div onClick={() => handleChangeQuantity(false)} className="h-10 w-10 bg-slate-400 flex items-center justify-center rounded-lg cursor-pointer text-2xl">-</div>
        <div className="ml-4 mr-4 text-2xl">{count}</div>
        <div onClick={() => handleChangeQuantity(true)} className="h-10 w-10 bg-slate-400 flex items-center justify-center rounded-lg cursor-pointer text-2xl">+</div>
      </div>
      <div className="delete_product mt-10 cursor-pointer" onClick={handleDeleteCart}><i className="fa-regular fa-trash-can text-3xl"></i></div>
    </div>
  )
}

export default CartItem;