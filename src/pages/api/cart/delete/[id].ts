// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Cart } from '../../../../../models/cart';

export type DeleteProductResponse = {
  success: boolean;
}

export default async function productApi(
  req: NextApiRequest,
  res: NextApiResponse<DeleteProductResponse>
) {
  if (req.method === "DELETE") {
    const id = req.query.id;
    try {
      await Cart.destroy({
        where: { id }
      });
      res.status(200).json({ success: true })
    } catch (error) {
      res.status(500).json({ success: false })
    }
  }
  return;
}