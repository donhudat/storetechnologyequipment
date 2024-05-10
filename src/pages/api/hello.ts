// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Product = {
  price: number
  title: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  res.status(200).json([{ title: 'Iphone 15 pro max', price: 1500000 }, { title: 'Iphone 14 pro max', price: 1400000 }, { title: 'Iphone 13 pro max', price: 1300000 }])
}
