// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Product } from '../../../../models/product'

type Product2 = {
  price: number
  title: string
}

export type ProductResponse = {
  success: boolean;
  data: Product | Product[] | null;
}

export default async function productApi(
  req: NextApiRequest,
  res: NextApiResponse<Product2[] | ProductResponse>
) {
  if (req.method === "GET") {
    const products = await Product.findAll();
    res.status(200).json({ success: true, data: products })
  }
  res.status(200).json([{ title: 'Iphone 15 pro max', price: 1500000 }, { title: 'Iphone 14 pro max', price: 1400000 }, { title: 'Iphone 13 pro max', price: 1300000 }])
}
