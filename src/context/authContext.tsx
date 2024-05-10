import { User } from "@/pages/account/register";
import { GetCartResponse } from "@/pages/api/cart";
import { LoginResponse } from "@/pages/api/user/login";
import CartResponse from "@/response-models/cart";
import { useRouter } from "next/router";
import { ReactNode, createContext, useCallback, useEffect, useState } from "react";

type ContextType = {
  user: User | null
  login: (u: User) => void;
  logout: () => void;
  isAdmin: boolean;
  cart: CartResponse[]
  fetchCart: () => void
};

const AuthContext = createContext<ContextType>({} as ContextType);

const AuthProvider = ({ children }: { children?: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [cart, setCart] = useState<CartResponse[]>([])
  const router = useRouter()

  useEffect(() => {
    const id = localStorage.getItem("userId")
    if (id) {
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:3000/api/user/" + id)
          const data: LoginResponse = await response.json();
          if (data.success && data.data) {
            login(data.data)
          }
        } catch (error) {
          console.error('Lỗi khi tải dữ liệu', error);
        }
      };
      fetchData();
    }
  }, [])

  const login = (u: User) => {
    setUser(u);
    fetchCart(u);
    localStorage.setItem("userId", (u.id ?? "") as string)
    if (u.email == "admin@gmail.com") setIsAdmin(true)
    else setIsAdmin(false)
  }

  const fetchCart = (u?: User) => {
    let url = "http://localhost:3000/api/cart?id_user="
    if (u) {
      url += u.id;
    } else {
      url += user?.id
    }
    fetch(url).then(res => res.json())
      .then((data: GetCartResponse) => {
        if (data.success) {
          setCart(data.data)
        }
      })
  }
  const logout = () => {
    localStorage.removeItem("userId")
    setUser(null)
    setIsAdmin(false)
    router.push("/")
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isAdmin, cart, fetchCart }
    }>
      {children}
    </ AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };