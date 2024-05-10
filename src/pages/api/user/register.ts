import type { NextApiRequest, NextApiResponse } from 'next'
import { User } from '../../../../models/user'

export type RegisterResponse = {
  success: boolean;
  data?: User;
  message?: string;
}

export default async function productApi(
  req: NextApiRequest,
  res: NextApiResponse<RegisterResponse | string>
) {
  if (req.method === "POST") {
    const { firstname, lastname, email, password } = req.body
    console.log(typeof req.body)
    const foundEmail = await User.findOne({
      where: { email }
    });
    if (foundEmail) {
      res.status(500).json({ success: false, message: "Email đã tổn tại!" })
      return;
    }
    const user = await User.create({
      email, password, firstname, lastname
    });
    console.log("user", user)
    if (!user) {
      res.status(500).json({ success: false, message: "Tạo tài khoản thất bại!" })
      return;
    }
    res.status(200).json({ success: true, data: user })
    return;
  }
  res.status(404).send("Not found");
  return;
}