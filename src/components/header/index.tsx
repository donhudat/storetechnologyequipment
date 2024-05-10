import { useAuth } from "@/hook/useAuth"
import Link from "next/link"
import { useRouter } from "next/router";
import { AddCartResponse } from "@/pages/api/cart/add";
import ProductResponse from "@/response-models/product";
import { useMemo, useState } from "react";
import { toast } from "react-toastify";
import CurrencyFormatter from "@/components/CurrencyFormatter";
import CartItem from "../cart-item";
import CartItem2 from "../cart-item-2";



function Header() {

  const { cart } = useAuth();
  const total = useMemo(() => cart.reduce((accumulator, item) => accumulator + item.total, 0), [cart])
  const { user, isAdmin, logout } = useAuth();
  const router = useRouter();
  const uniqueProductIds = Array.from(new Set(cart.map(item => item.product.id)));
  const totalProductCart = uniqueProductIds.length;
  return (
    <header className="header ">

      <div className=" gird ">
        <nav className="header__navbar">
          <ul className="header__navbar-list">
            <li className="header__navbar-item header__navbar-item--qr header__navbar-item--separate">
              Vào cửa hàng trên ứng dụng Cow Technology

              <div className="header__qr">
                <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/d91264e165ed6facc6178994d5afae79.png" alt="" className="header__qr-img" />
                <div className="header__qr__apps">
                  <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/39f189e19764dab688d3850742f13718.png" alt="" className="header__img-down" />
                  <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/f4f5426ce757aea491dce94201560583.png" alt="" className="header__img-down" />
                </div>
              </div>
            </li>
            <li className="header__navbar-item">
              <span className="heaer_navbar-titler-nopointer">Kết Nối</span>

              <a href="https://www.facebook.com/nhudat09102002" className="header__navbar-icon-link">
                <i className=" header__navbar-icon fa-brands fa-facebook  "></i>
              </a>
              <a href="https://www.instagram.com/datdn.910/?next=%2F&hl=fr" className="header__navbar-icon-link">
                <i className=" header__navbar-icon fa-brands fa-instagram  "></i>
              </a>

            </li>
          </ul>
          <ul className="header__navbar-list">
            <li className="header__navbar-item header__has-notifycation">
              <a href="" className="header__navbar-item-link">

                <i className=" header__navbar-icon fa-solid fa-bell "></i >
                Thông Báo
              </a>
              <div className="header__notifycation ">
                <div className="header__notifycation-header"><h3>Thông báo mới nhận </h3></div>

                <ul className="header__notifycation-list">

                  <li className="header__notifycation-item">
                    <a href="" className="header__notifycation-link">
                      <img src="/assets/img/mypham.jpg" alt="" className="header__notifycation-img" />
                      <div className="header__notifycation-info">
                        <span className="header__notifycation-name">Xác thực nguồn gốc các sản phẩm Ohui</span>
                        <span className="header__notifycation-descriotion">Xác thực chính hãng nguồn gốc các sản phẩm Ohui</span>
                      </div>
                    </a>
                  </li>

                  <li className="header__notifycation-item">
                    <a href="" className="header__notifycation-link">
                      <img src="/assets/img/mypham.jpg" alt="" className="header__notifycation-img" />
                      <div className="header__notifycation-info">
                        <span className="header__notifycation-name">Xác thực nguồn gốc các sản phẩm Ohui</span>
                        <span className="header__notifycation-descriotion">Xác thực chính hãng nguồn gốc các sản phẩm Ohui</span>
                      </div>
                    </a>
                  </li>

                  <li className="header__notifycation-item">
                    <a href="" className="header__notifycation-link">
                      <img src="/assets/img/mypham.jpg" alt="" className="header__notifycation-img" />
                      <div className="header__notifycation-info">
                        <span className="header__notifycation-name">Xác thực nguồn gốc các sản phẩm Ohui</span>
                        <span className="header__notifycation-descriotion">Xác thực chính hãng nguồn gốc các sản phẩm Ohui</span>
                      </div>
                    </a>
                  </li>

                  <div className="all"><a href="">Xem Tất Cả</a></div>
                </ul>
              </div>
            </li>
            <li className="header__navbar-item">
              <a href="" className="header__navbar-item-link">

                <i className=" header__navbar-icon fa-solid fa-circle-question "></i>
                Trợ Giúp
              </a>
            </li>
            <li className="header__navbar-item">




            </li>


            {
              isAdmin ? <li className="header__navbar-item relative admin-hover">
                <div className="header__navbar-item-link font-medium">
                  <i className="fa-regular fa-user text-[#fff] mr-4 " ></i>Admin
                  <div className="h-fit w-56 bg-[#fff] absolute z-10 top-12 right-0 rounded-lg before-p admin">
                    <Link href="/admin/product"> <div className="text-[#000] w-full h-14 items-center flex justify-center hover:bg-slate-300 hover:rounded-lg ">Admin page</div></Link>
                    <Link href="/admin/product/add"> <div className="text-[#000] w-full h-14 items-center flex justify-center hover:bg-slate-300 hover:rounded-lg ">Thêm Sản Phẩm</div></Link>
                    <Link href="/thongke"> <div className="text-[#000] w-full h-14 items-center flex justify-center hover:bg-slate-300 hover:rounded-lg ">Thống Kê</div></Link>
                    <a href="" onClick={logout}> <div className="text-[#000] w-full h-14 items-center flex justify-center hover:bg-slate-300 hover:rounded-lg ">Logout</div></a>
                  </div>
                </div>
              </li>
                :
                <>
                  {
                    !user ? <>
                      <Link href="/account/register"><li className="header__navbar-item header__navbar-item--bold header__navbar-item--separate js-register">
                        Đăng Ký
                      </li></Link>
                      <Link href="/account/login"><li className="header__navbar-item header__navbar-item--bold js-login">
                        Đăng Nhập</li></Link>
                    </>
                      :
                      <li className="header__navbar-item relative admin-hover">
                        <div className="header__navbar-item-link font-medium">
                          <i className="fa-regular fa-user text-[#fff] mr-4 " ></i> {user.firstname + " " + user.lastname}
                          <div className="h-fit w-56 bg-[#fff] absolute z-10 top-12 right-0 rounded-lg before-p admin">
                            <a href="" onClick={logout}> <div className="text-[#000] w-full h-14 items-center flex justify-center hover:bg-slate-300 hover:rounded-lg ">Logout</div></a>
                          </div>
                        </div>
                      </li>
                  }
                </>
            }


          </ul>

        </nav>

        {
          !router.pathname.includes("/admin") && <div className="header__all-search">


            <a href="http://localhost:3000/">
              {/* <script>
                document.getElementById('link-to-14promax').addEventListener('click', function (event) {
                  event.preventDefault();  // Ngăn chặn liên kết mặc định
                
                  // Sử dụng Live Server để cung cấp các tệp HTML từ thư mục hiện tại
                  // Thay đổi tên tệp HTML bạn muốn hiển thị ở đây
                  window.location.href = 'index.html';
                });
                </script> */}

              <div className="header__logo">
                <img src="https://i.imgur.com/nx9JcuI.pnghttps://i.imgur.com/nx9JcuI.png" className="h-[105px] mt-[25px]" alt="" />

              </div>
            </a>
            <div className="header__search">
              <div className="header_search-search">
                <input type="text" className="header__search-input" placeholder="Nhập để tìm kiếm sản phẩm" />

                <div className="header_search-history">
                  <div className="header_search-history__heading">Lịch sử tìm kiếm</div>
                  <ul className="header_search-history__text">
                    <a href="">Macbook Pro M2 </a>
                    <a href="">Iphone 15 ProMax 256Gb</a>
                    <a href="">Aplle Watch seri 9</a>
                    <a href="">Ipad Pro 2023 1TGB</a>
                    <a href="">I Mac 2023</a>

                  </ul>

                </div>
              </div>
              <div className="header__search-where">
                Trong Shop này
                <i className="fa-solid fa-chevron-down text-black"></i>
                <div className="header__search-select">
                  <div className="header__search-select__two">
                    <div className="header_search-select--text">
                      Trong Shop này
                      <i className="fa-solid fa-check text-[#f34b2b]"></i>
                    </div>
                  </div>
                  <div className="header__search-select__two">
                    <div className="header_search-select--text">Trong CowTech</div>
                  </div>
                </div>
              </div>
              <button className="header__search-btn">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
            <div className="header__cart">
              <Link href="/cart">
                <div className="header__cart--all">

                  <div className="cart__number-item">{totalProductCart}</div>
                  <i className="fa-solid fa-cart-shopping text-[#fcfdfd]"></i>

                  <div className="header__cart-list__has-cart">
                    <div className="header__cart-list__has-cart__heading">
                      Sản Phẩm Mới Thêm
                    </div>
                    <div className="header__cart-list__has-cart__content">

                      {
                        cart?.map((item, index) => {
                          const uniqueProductIds = Array.from(new Set(cart.map(item => item.product.id)));
                          const totalProductCart = uniqueProductIds.length;

                          return <div key={index}>
                            <CartItem2 product={item.product} quantity={item.quantity} id={item.id as number} />
                          </div>
                        })
                      }

                      {/* <div className="header__cart__content-item">
                        <img src="assets/img/15prm-blue.webp" alt="" className="cart__item__img" />
                        <div className="cart__item__describe">Điện thoại Apple iPhone 15 Pro Max 1TB</div>
                        <div className="cart__item__price">44.499.000đ</div>
                      </div>
                      <div className="header__cart__content-item">
                        <img src="assets/img/15prm-blue.webp" alt="" className="cart__item__img" />
                        <div className="cart__item__describe">Điện thoại Apple iPhone 15 Pro Max 1TB</div>
                        <div className="cart__item__price">34.499.000đ</div>
                      </div>
                      <div className="header__cart__content-item">
                        <img src="assets/img/15prm-blue.webp" alt="" className="cart__item__img" />
                        <div className="cart__item__describe">Điện thoại Apple iPhone 15 Pro Max 1TB</div>
                        <div className="cart__item__price">34.499.000đ</div>
                      </div>
                      <div className="header__cart__content-item">
                        <img src="assets/img/15prm-blue.webp" alt="" className="cart__item__img" />
                        <div className="cart__item__describe">Điện thoại Apple iPhone 15 Pro Max 1TB</div>
                        <div className="cart__item__price">34.499.000đ</div>
                      </div> */}
                    </div>

                    <div className="header__cart-list__has-cart__footer">
                      <div className="header__cart-list__number">{totalProductCart} Đã Được Thêm Hàng Vào Giỏ</div>

                      <div className="header__cart-list__open-cart">
                        Xem Giỏ Hàng
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

            </div>
          </div>
        }
      </div>


    </header>
  )
}

export default Header