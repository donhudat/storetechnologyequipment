import type { NextApiRequest, NextApiResponse } from 'next'
import { User } from '../../../../models/user'

export type LoginResponse = {
  success: boolean;
  data?: User;
  message?: string;
}

export default async function productApi(
  req: NextApiRequest,
  res: NextApiResponse<LoginResponse | string>
) {
  if (req.method === "GET") {
    const id = req.query.id;
    const user = await User.findOne({
      where: {
        id
      }
    });
    if (!user) {
      res.status(500).json({ success: false, message: "Email hoặc mật khẩu sai!" })
      return;
    }
    res.status(200).json({ success: true, data: user })
    return;
  }
  res.status(404).send("Not found");
  return;
}