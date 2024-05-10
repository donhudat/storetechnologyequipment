// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import CartResponse from '@/response-models/cart';
import type { NextApiRequest, NextApiResponse } from 'next'
import { Cart } from '../../../../models/cart';
import { Product } from '../../../../models/product';

export type UpdateCartResponse = {
  success: boolean;
  data?: CartResponse;
  message: string;
}

export default async function productApi(
  req: NextApiRequest,
  res: NextApiResponse<UpdateCartResponse>
) {
  if (req.method === "PUT") {
    const { id_user, id_product, quantity } = req.body;
    try {
      const product = await Product.findOne({ where: { id: id_product } })
      if (!product) {
        return res.status(404).json({ message: "Không tìm thấy sản phẩm với id=" + id_product, success: false })
      }
      let total: number = product.sale_price * quantity
      if (product.sale_price > product.price) total = product.price * quantity
      const existCart = await Cart.findOne({
        where: {
          id_product, id_user
        }
      })
      if (existCart) {
        existCart.update({ quantity: quantity, total })
        res.status(200).json({ success: true, message: "Cập nhật giỏ hàng thành công!" })
        return;
      }
      res.status(200).json({ success: true, message: "Thêm vào giỏ hàng thành công!" })
    } catch (error) {
      res.status(500).json({ success: false, message: error as string })
    }
  }
  return;
}
