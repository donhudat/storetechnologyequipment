// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Product } from '../../../../models/product'

type Product2 = {
  price: number
  title: string
}

type ProductResponse = {
  success: boolean;
  message?: string;
  data: Product | Product[] | null;
}

export default async function productApi(
  req: NextApiRequest,
  res: NextApiResponse<Product2[] | ProductResponse>
) {
  const id = req.query.id;
  if (!id) {
    res.status(400).json({ success: false, data: null, message: "failed" })
  }

  if (req.method === "GET") {
    const product = await Product.findOne({ where: { id } })
    if (!product) {
      res.status(400).json({ success: false, data: null, message: "Not found product by id: " + id })
    }
    res.status(200).json({ success: true, data: product })
  }
  if (req.method === "PUT") {
    const { name, price, sale_price, img } = req.body
    await Product.update({ name, img, price, sale_price }, {
      where: {
        id
      }
    })
    res.status(200).json({ success: true, data: null, message: "update successfully!" })
  }
}
