import { useAuth } from "@/hook/useAuth";
import { AddCartResponse } from "@/pages/api/cart/add";
import ProductResponse from "@/response-models/product";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CurrencyFormatter from "@/components/CurrencyFormatter";


const CartItem2 = ({ product, quantity, id }: { product: ProductResponse, quantity: number, id: number }) => {
  const [uniqueProductIds, setUniqueProductIds] = useState<number[]>([]);
  useEffect(() => {
    setUniqueProductIds((prevIds) => [...prevIds, product.id]);
  }, [product.id]);

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
    <div className="header__cart__content-item">
      <img src={product.img} alt="" className="cart__item__img" />
      <div className="cart__item__describe">{product.name}</div>
      <div className="cart__item__price"><CurrencyFormatter amount={product.sale_price} /></div>

    </div>
  )
}

export default CartItem2;