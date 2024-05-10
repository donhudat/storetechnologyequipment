// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import CartResponse from '@/response-models/cart';
import ProductResponse from '@/response-models/product';
import type { NextApiRequest, NextApiResponse } from 'next'
import { Cart } from '../../../../models/cart';
import { Product } from '../../../../models/product';
import { User } from '../../../../models/user';

export type GetCartResponse = {
  success: boolean;
  data: CartResponse[];
  message: string;
}

export default async function productApi(
  req: NextApiRequest,
  res: NextApiResponse<GetCartResponse>
) {
  if (req.method === "GET") {
    const { id_user } = req.query;
    try {
      const user = await User.findOne({ where: { id: id_user } })
      if (!user) {
        return res.status(404).json({ message: "Không tìm thấy user với id=" + id_user, success: false, data: [] })
      }
      const carts = await Cart.findAll({
        where: {
          id_user,
        },
        include: [
          {
            model: Product,
            foreignKey: "id",
            as: "Product"
          }
        ]
      });
      if (carts.length === 0) {
        return res.status(404).json({ message: "Không tìm thấy cart", success: false, data: [] })
      }
      const response = carts.map(c => new CartResponse(c.id, (c as unknown as { Product: ProductResponse }).Product, c.quantity, c.total))
      res.status(200).json({ success: true, message: "Get giỏ hàng thành công!", data: response })
    }
    catch (error) {
      console.log(error)
      res.status(500).json({ success: false, message: "lỗi gì đó" as string, data: [] })
    }
  }
  return;
}
