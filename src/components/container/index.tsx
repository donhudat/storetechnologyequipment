import Link from "next/link"
import { Product } from "../../../models/product"
import CurrencyFormatter from "../CurrencyFormatter"
import MyVideoComponent from "./video"


function Container({ products }: { products: Product[] }) {


  return (
    <div className="container">
      <div className="gird ">
        <div className="container__header">
          <div className="container__header__profile">
            <div className=" profile__shop profile__info--3">

              <MyVideoComponent />

            </div>

            <div className=" profile__info profile__info--3">
              <div className="profile__info--3__item">
                <i className="fa-solid fa-house text-black"></i>
                <div className="profile__info--text">Sản Phẩm:</div>
                <div className="profile__info--text__value">391</div>
              </div>
              <div className="profile__info--3__item">
                <i className="fa-solid fa-user-plus text-black" ></i>
                <div className="profile__info--text">Đang Theo:</div>
                <div className="profile__info--text__value">1</div>
              </div>
              <div className="profile__info--3__item">
                <i className="fa-regular fa-comment-dots text-black" ></i>
                <div className="profile__info--text">Tỉ Lệ Phản Hồi Chat:</div>
                <div className="profile__info--text__value"> 97% (Trong Vài Giờ) <i className="fa-regular fa-circle-question text-black" ></i></div>
              </div>
            </div>
            <div className=" profile__info profile__info--3">
              <div className="profile__info--3__item">
                <i className="fa-solid fa-user-group text-black" ></i>
                <div className="profile__info--text">Người Theo Dõi:</div>
                <div className="profile__info--text__value">1.7B</div>
              </div>
              <div className="profile__info--3__item">
                <i className="fa-solid fa-star text-black" ></i>
                <div className="profile__info--text">Đánh Giá:</div>
                <div className="profile__info--text__value">4.9 (55,3k Đánh Giá)</div>
              </div>
              <div className="profile__info--3__item">
                <i className="fa-solid fa-shop text-black" ></i>
                <div className="profile__info--text">Đã Hoạt Động:</div>
                <div className="profile__info--text__value">5 Năm</div>
              </div>
            </div>
          </div>

          <div className="container__header__menu">
            <div className="container__header__menu-list">
              <div className="container__header__menu-list__item list__item--walk">Dạo</div>
              <div className="container__header__menu-list__item"><a href="#shop__product__list">TẤT CẢ SẢN PHẨM</a></div>
              <div className="container__header__menu-list__item">IPad</div>
              <div className="container__header__menu-list__item">AirPords</div>
              <div className="container__header__menu-list__item">IPhone</div>
              <div className="container__header__menu-list__item">Apple Watch</div>
              <div className="container__header__menu-list--extand">
                Thêm
                <i className="fa-sharp fa-solid fa-caret-down text-black" ></i>
                <div className="menu-list--extand-list z-20">
                  <div className="menu-list--extand-item">MacBook</div>
                  <div className="menu-list--extand-item">Phụ Kiện Apple</div>
                </div>

              </div>
            </div>


          </div>
        </div>
      </div>

      <div className="shop_pega-container">
        <div className="gird gird__container">
          <div className="shop__pega-voucher">
            <h3 className="voucher__title">MÃ GIẢM GIÁ CỦA SHOP</h3>
            <div className="voucher-list">
              <div className="voucher-list--row ">
                <div className="serrated-bar">

                </div>

                <div className="padin text-[:]gpx 0 12px 8px;">
                  <div className="voucher-list__info flex flex-col h-full justify-around">
                    <div className="voucher-info__down">Giảm 2tr <i className="fa-solid fa-dong-sign text-7xl"></i></div>
                    <div className="voucher-info__min">Đơn Tối Thiểu 0 </div>
                    <i className="fa-solid fa-dong-sign"></i>                 <div className="voucher-info__product-certain">Sản Phẩm Nhất Định</div>
                    <div className="voucher-info__bar-use">
                      <div className="bar__use"></div>

                    </div>
                    <div className="voucher-info__expiry">
                      <div className="expiry__use">Đã Dùng 45%,</div>
                      <div className="expiry-expiry">HSD: 31.12.2023</div>
                    </div>
                  </div>
                </div>

                <div className="voucher-list__use-now">
                  <div className="use__now">Dùng Ngay</div>
                  <div className="use__save">Lưu</div>
                </div>
              </div>

              <div className="voucher-list--row">
                <div className="serrated-bar">

                </div>

                <div className="padin text-[:]gpx 0 12px 8px;">
                  <div className="voucher-list__info flex flex-col h-full justify-around ">
                    <div className="voucher-info__down">Giảm 1Tr </div>
                    <i className="fa-solid fa-dong-sign"></i>                 <div className="voucher-info__min">Đơn Tối Thiểu 0 </div>
                    <i className="fa-solid fa-dong-sign"></i>                 <div className="voucher-info__product-certain">Sản Phẩm Nhất Định</div>
                    <div className="voucher-info__bar-use">
                      <div className="bar__use w-12"></div>

                    </div>
                    <div className="voucher-info__expiry">
                      <div className="expiry__use">Đã Dùng 60%,</div>
                      <div className="expiry-expiry">HSD: 31.12.2023</div>
                    </div>
                  </div>
                </div>

                <div className="voucher-list__use-now">
                  <div className="use__now">Dùng Ngay</div>
                  <div className="use__save">Lưu</div>
                </div>
              </div>
            </div>
          </div>

          <div className="shop__pega__suggest">

            <div className="shop__pega__suggest-heading">
              <div className="shop__pega__suggest-heading-title">GỢI Ý CHO BẠN</div>
              <a href="#shop__product__list" className="shop__pega__suggest-see">Xem Tất Cả <i className="fa-solid fa-chevron-right"></i></a>
            </div>
            <div className="shop__pega__suggest-content">
              <div className="shop__pega__suggest-list">
                <div className="suggest-list__product">
                  <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-14-pro_2__5.png" alt="" className="suggest-list__img" />

                  <div className="suggest-list__how-sales">
                    <div className="suggest__sale__how">20%</div>
                    <div className="suggest__sale__text">Giảm</div>
                  </div>
                </div>
                <div className="suggest-list__info">
                  <div className="suggest-list__title">Điện thoại Apple iPhone 14 Pro Max 128GB

                  </div>
                  <div className="suggest-list__price">
                    <div className="suggest-list__price-original">33.990.000<i className="fa-solid fa-dong-sign"></i></div>
                    <div className="suggest-list__price-sale">27.090.000<i className="fa-solid fa-dong-sign"></i></div>
                  </div>
                  <div className="suggest-list__sell">
                    <div className="suggest-list__sell-review">
                      <i className="fa-sharp fa-solid fa-star text-[#f0e805]"></i>
                      <i className="fa-sharp fa-solid fa-star text-[#f0e805]"></i>
                      <i className="fa-sharp fa-solid fa-star text-[#f0e805]"></i>
                      <i className="fa-sharp fa-solid fa-star text-[#f0e805]"></i>
                      <i className="fa-sharp fa-solid fa-star text-[#f0e805]"></i>
                    </div>
                    <div className="suggest-list__sell-sold-sales">Đã Bán 15,1K</div>
                  </div>

                </div>
              </div>

              <a href="#" id="link-to-index" className="shop__pega__suggest-list">
                <div className="suggest-list__product">
                  <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/v/n/vn_iphone_15_pro_white_titanium_pdp_image_position-1a_white_titanium_color.jpg" alt="" className="suggest-list__img" />
                  <div className="suggest-list__how-sales">
                    <div className="suggest__sale__how">20%</div>
                    <div className="suggest__sale__text">Giảm</div>
                  </div>
                </div>
                <div className="suggest-list__info">
                  <div className="suggest-list__title">Điện thoại Apple iPhone 15 Pro Max 128GB

                  </div>
                  <div className="suggest-list__price">
                    <div className="suggest-list__price-original">48.990.000<i className="fa-solid fa-dong-sign"></i></div>
                    <div className="suggest-list__price-sale">33.090.000<i className="fa-solid fa-dong-sign"></i></div>
                  </div>
                  <div className="suggest-list__sell">
                    <div className="suggest-list__sell-review">
                      <i className="fa-sharp fa-solid fa-star text-[#f0e805]"></i>
                      <i className="fa-sharp fa-solid fa-star text-[#f0e805]"></i>
                      <i className="fa-sharp fa-solid fa-star text-[#f0e805]"></i>
                      <i className="fa-sharp fa-solid fa-star text-[#f0e805]"></i>
                      <i className="fa-sharp fa-solid fa-star text-[#f0e805]"></i>
                    </div>
                    <div className="suggest-list__sell-sold-sales">Đã Bán 15,1K</div>
                  </div>

                </div>
              </a>


              <div className="shop__pega__suggest-list">
                <div className="suggest-list__product">
                  <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/m/b/mbp14-spacegray-select-202301_1.jpg" alt="" className="suggest-list__img" />
                  <div className="suggest-list__how-sales">
                    <div className="suggest__sale__how">20%</div>
                    <div className="suggest__sale__text">Giảm</div>
                  </div>
                </div>
                <div className="suggest-list__info">
                  <div className="suggest-list__title">MacBook Pro 14 inch M2 Pro 2023 (10 CPU - 16 GPU - 16GB - 512GB)

                  </div>
                  <div className="suggest-list__price">
                    <div className="suggest-list__price-original">52.990.000<i className="fa-solid fa-dong-sign"></i></div>
                    <div className="suggest-list__price-sale">47.990.000<i className="fa-solid fa-dong-sign"></i></div>
                  </div>
                  <div className="suggest-list__sell">
                    <div className="suggest-list__sell-review">
                      <i className="fa-sharp fa-solid fa-star text-[#f0e805]"></i>
                      <i className="fa-sharp fa-solid fa-star text-[#f0e805]"></i>
                      <i className="fa-sharp fa-solid fa-star text-[#f0e805]"></i>
                      <i className="fa-sharp fa-solid fa-star text-[#f0e805]"></i>
                      <i className="fa-sharp fa-solid fa-star text-[#f0e805]"></i>
                    </div>
                    <div className="suggest-list__sell-sold-sales">Đã Bán 11,1K</div>
                  </div>

                </div>
              </div>
              <div className="shop__pega__suggest-list">
                <div className="suggest-list__product">
                  <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/v/n/vn_iphone_15_blue_pdp_image_position-1a_blue_color_1_4.jpg" alt="" className="suggest-list__img" />
                  <div className="suggest-list__how-sales">
                    <div className="suggest__sale__how">20%</div>
                    <div className="suggest__sale__text">Giảm</div>
                  </div>
                </div>
                <div className="suggest-list__info">
                  <div className="suggest-list__title">Điện thoại Apple iPhone 15 128GB | Chính hãng VN/A

                  </div>
                  <div className="suggest-list__price">
                    <div className="suggest-list__price-original">22.990.000<i className="fa-solid fa-dong-sign"></i></div>
                    <div className="suggest-list__price-sale">21.090.000<i className="fa-solid fa-dong-sign"></i></div>
                  </div>
                  <div className="suggest-list__sell">
                    <div className="suggest-list__sell-review">
                      <i className="fa-sharp fa-solid fa-star text-[#f0e805]"></i>
                      <i className="fa-sharp fa-solid fa-star text-[#f0e805]"></i>
                      <i className="fa-sharp fa-solid fa-star text-[#f0e805]"></i>
                      <i className="fa-sharp fa-solid fa-star text-[#f0e805]"></i>
                      <i className="fa-sharp fa-solid fa-star text-[#f0e805]"></i>
                    </div>
                    <div className="suggest-list__sell-sold-sales">Đã Bán 2,1K</div>
                  </div>

                </div>
              </div>
              <div className="shop__pega__suggest-list">
                <div className="suggest-list__product">
                  <img src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/iphone-15-hong.png" alt="" className="suggest-list__img" />
                  <div className="suggest-list__how-sales">
                    <div className="suggest__sale__how">20%</div>
                    <div className="suggest__sale__text">Giảm</div>
                  </div>

                </div>
                <div className="suggest-list__info">
                  <div className="suggest-list__title">Điện thoại Apple iPhone 15 128GB | Chính hãng VN/A

                  </div>
                  <div className="suggest-list__price">
                    <div className="suggest-list__price-original">22.990.000<i className="fa-solid fa-dong-sign"></i></div>
                    <div className="suggest-list__price-sale">21.990.000<i className="fa-solid fa-dong-sign"></i></div>
                  </div>
                  <div className="suggest-list__sell">
                    <div className="suggest-list__sell-review">
                      <i className="fa-sharp fa-solid fa-star text-[#f0e805]"></i>
                      <i className="fa-sharp fa-solid fa-star text-[#f0e805]"></i>
                      <i className="fa-sharp fa-solid fa-star text-[#f0e805]"></i>
                      <i className="fa-sharp fa-solid fa-star text-[#f0e805]"></i>
                      <i className="fa-sharp fa-solid fa-star text-[#f0e805]"></i>
                    </div>
                    <div className="suggest-list__sell-sold-sales">Đã Bán 1,1K</div>
                  </div>

                </div>
              </div>
              <div className="shop__pega__suggest-list">
                <div className="suggest-list__product">
                  <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/a/p/apple_gps_7_.png " alt="" className="suggest-list__img" />

                </div>
                <div className="suggest-list__info">
                  <div className="suggest-list__title">Apple Watch Series 9 41mm (GPS) viền nhôm dây cao su | Chính hãng VN/A


                  </div>
                  <div className="suggest-list__price">

                    <div className="suggest-list__price-sale">12.990.000 <i className="fa-solid fa-dong-sign"></i></div>
                  </div>
                  <div className="suggest-list__sell">
                    <div className="suggest-list__sell-review">
                      <i className="fa-sharp fa-solid fa-star text-[#f0e805]"></i>
                      <i className="fa-sharp fa-solid fa-star text-[#f0e805]"></i>
                      <i className="fa-sharp fa-solid fa-star text-[#f0e805]"></i>
                      <i className="fa-sharp fa-solid fa-star text-[#f0e805]"></i>
                      <i className="fa-sharp fa-solid fa-star text-[#f0e805]"></i>
                    </div>
                    <div className="suggest-list__sell-sold-sales">Đã Bán 3,1K</div>
                  </div>

                </div>
              </div>
            </div>

          </div>

          <div className="shop__pega__introduct">
            <img src="https://down-bs-vn.img.susercontent.com/vn-11134210-23030-9strtfgihfovfa.webp" className="shop__pega__introduct-img" alt="" />
            <img src="https://down-bs-vn.img.susercontent.com/vn-11134210-7r98o-llnddo0hdfm7ba.webp" alt="" className="shop__pega__introduct-ip15" />
            <img src="assets/img/note-buy2.webp" alt="" className="notebuy1 with-100 " />
            <img src="assets/img/note-buy.webp" alt="" className="notebuy2 with-100 " />
            <img src="assets/img/tragop.webp" alt="" className="tragop with-100 " />
            <img src="assets/img/titan.webp" alt="" className="titan with-100" />
            <div className="product__className">
              <img src="https://down-bs-vn.img.susercontent.com/vn-11134210-7r98o-llxba98s33z3ab.webp" alt="" className="product__className-img" />
              <a href="" className="product__className-iphone"></a>
              <a href="" className="product__className-mac"></a>
              <a href="" className="product__className-ipad"></a>
              <a href="" className="product__className-watch"></a>
              <a href="" className="product__className-airpods"></a>
            </div>
            <img src="https://down-bs-vn.img.susercontent.com/vn-11134210-7qukw-lf80w6zcuf7u75.webp" alt="" className="thucu" />

          </div>
          <div className="shop__pega__selling">

            <div className="shop__pega__selling-heading">
              <div className="shop__pega__selling-heading-title">SẢN PHẨM BÁN CHẠY</div>
            </div>
            <div className="shop__pega__selling-content">

              <div className="width-24 shop__pega__selling-list ">
                <div className="selling-list__product">
                  <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_5.png" alt="" className="selling-list__img" />
                  <div className="selling-list__how-sales">
                    <div className="selling__sale__how">20%</div>
                    <div className="selling__sale__text">Giảm</div>
                  </div>
                </div>
                <div className="selling-list__info">
                  <div className="selling-list__title">Điện thoại Apple iPhone 15 Pro Max 128GB

                  </div>
                  <div className="selling-list__price">
                    <div className="selling-list__price-original">50.990.000<i className="fa-solid fa-dong-sign"></i></div>
                    <div className="selling-list__price-sale">33.090.000<i className="fa-solid fa-dong-sign"></i></div>
                  </div>
                  <div className="selling-list__sell">
                    <div className="selling-list__sell-review">
                      <i className="fa-sharp fa-solid fa-star text-[#f0e805]"></i>
                      <i className="fa-sharp fa-solid fa-star text-[#f0e805]"></i>
                      <i className="fa-sharp fa-solid fa-star text-[#f0e805]"></i>
                      <i className="fa-sharp fa-solid fa-star text-[#f0e805]"></i>
                      <i className="fa-sharp fa-solid fa-star text-[#f0e805]"></i>
                    </div>
                    <div className="selling-list__sell-sold-sales">Đã Bán 15,1K</div>
                  </div>

                </div>
              </div>

              <div className="width-24 shop__pega__selling-list ">
                <div className="selling-list__product">
                  <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus-256gb_2.png" alt="" className="selling-list__img" />
                  <div className="selling-list__how-sales">
                    <div className="selling__sale__how">5%</div>
                    <div className="selling__sale__text">Giảm</div>
                  </div>
                </div>
                <div className="selling-list__info">
                  <div className="selling-list__title">IPhone 15 128GB | Chính hãng VN/A
                  </div>
                  <div className="selling-list__price">
                    <div className="selling-list__price-original">22.990.000<i className="fa-solid fa-dong-sign"></i></div>
                    <div className="selling-list__price-sale">21.890.000<i className="fa-solid fa-dong-sign"></i></div>
                  </div>
                  <div className="selling-list__sell">
                    <div className="selling-list__sell-review">
                      <i className="fa-sharp fa-solid fa-star text-[#f0e805]"></i>
                      <i className="fa-sharp fa-solid fa-star text-[#f0e805]"></i>
                      <i className="fa-sharp fa-solid fa-star text-[#f0e805]"></i>
                      <i className="fa-sharp fa-solid fa-star text-[#f0e805]"></i>
                      <i className="fa-sharp fa-solid fa-star text-[#f0e805]"></i>
                    </div>
                    <div className="selling-list__sell-sold-sales">Đã Bán 15,1K</div>
                  </div>

                </div>
              </div>

              <div className="width-24 shop__pega__selling-list ">
                <div className="selling-list__product">
                  <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/s/2/s23-ultra-xanh.png" alt="" className="selling-list__img" />
                  <div className="selling-list__how-sales">
                    <div className="selling__sale__how">32%</div>
                    <div className="selling__sale__text">Giảm</div>
                  </div>
                </div>
                <div className="selling-list__info">
                  <div className="selling-list__title">Samsung Galaxy S23 Ultra 256GB
                  </div>
                  <div className="selling-list__price">
                    <div className="selling-list__price-original">31.990.000<i className="fa-solid fa-dong-sign"></i></div>
                    <div className="selling-list__price-sale">21.790.000<i className="fa-solid fa-dong-sign"></i></div>
                  </div>
                  <div className="selling-list__sell">
                    <div className="selling-list__sell-review">
                      <i className="fa-sharp fa-solid fa-star text-[#f0e805]"></i>
                      <i className="fa-sharp fa-solid fa-star text-[#f0e805]"></i>
                      <i className="fa-sharp fa-solid fa-star text-[#f0e805]"></i>
                      <i className="fa-sharp fa-solid fa-star text-[#f0e805]"></i>
                      <i className="fa-sharp fa-solid fa-star text-[#f0e805]"></i>
                    </div>
                    <div className="selling-list__sell-sold-sales">Đã Bán 13K</div>
                  </div>

                </div>
              </div>

              <div className="width-24 shop__pega__selling-list ">
                <div className="selling-list__product">
                  <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/g/a/galaxy-z-fold-5-kem-1.jpg" alt="" className="selling-list__img" />
                  <div className="selling-list__how-sales">
                    <div className="selling__sale__how">14%</div>
                    <div className="selling__sale__text">Giảm</div>
                  </div>
                </div>
                <div className="selling-list__info">
                  <div className="selling-list__title">Samsung Galaxy Z Fold5 12GB 256GB

                  </div>
                  <div className="selling-list__price">
                    <div className="selling-list__price-original">35.790.000<i className="fa-solid fa-dong-sign"></i></div>
                    <div className="selling-list__price-sale">34.990.000<i className="fa-solid fa-dong-sign"></i></div>
                  </div>
                  <div className="selling-list__sell">
                    <div className="selling-list__sell-review">
                      <i className="fa-sharp fa-solid fa-star text-[#f0e805]"></i>
                      <i className="fa-sharp fa-solid fa-star text-[#f0e805]"></i>
                      <i className="fa-sharp fa-solid fa-star text-[#f0e805]"></i>
                      <i className="fa-sharp fa-solid fa-star text-[#f0e805]"></i>
                      <i className="fa-sharp fa-solid fa-star text-[#f0e805]"></i>
                    </div>
                    <div className="selling-list__sell-sold-sales">Đã Bán 12,8K</div>
                  </div>

                </div>
              </div>

            </div>

          </div>

          <div className="shop__pega__shop-pruduct">

            <div className="shop-product__category">

              <div className="shop-product__category-title"><i className="fa-solid fa-list text-[#000000]"></i> Danh Mục</div>


              <ul className="shop__product-category-list">
                <li className="shop__product-category__item "> <i className="fa-solid fa-caret-right text-[#D0011B]"></i> <a className="chon" href="">Sản Phẩm</a> </li>
                <li className="shop__product-category__item"> <a href="">IPad</a> </li>
                <li className="shop__product-category__item"> <a href="">AirPods</a> </li>
                <li className="shop__product-category__item"> <a href="">IPhone</a> </li>
                <li className="shop__product-category__item"> <a href="">Aplle Watch</a> </li>
                <li className="shop__product-category__item"> <a href="">MacBook</a></li>
                <li className="shop__product-category__item"> <a href="">Phụ Kiện Apple</a></li>
              </ul>
            </div>

            <div id="shop__product__list" className="shop__product__list">

              <div className="shop__product__list-search">
                <div className="shop__product__list-search__title ">Sắp xếp theo</div>
                <div className="shop__product__list-search__item focus-shop-product-search">Phổ Biến</div>
                <div className="shop__product__list-search__item ">Mới Nhất</div>
                <div className="shop__product__list-search__item ">Bán Chạy</div>
                <div className="shop__product__list-search__price z-10">
                  Giá
                  <i className="fa-solid fa-chevron-down text-[#000000]"></i>
                  <div className="hover__shop__product__list-search__price">
                    <div className=" arrange min-to-max">Giá :Từ Thấp Đến Cao</div>
                    <div className=" arrange max-to-min">Giá :Từ Cao Đến Thấp</div>
                  </div>
                </div>
              </div>

              <div className="shop__product__list-item">
                {
                  products?.map((product, index) => {
                    return <Link key={index} href={`product/${product.id}`}>
                      <div className="shop__pega__product__all-list">
                        <div className="product__all-list__product">
                          <img src={product.img} alt="abc" className="product__all-list__img" />

                          <div className="product__all-list__how-sales">
                            <div className="product__all__sale__how">{Math.ceil(100 - product.price / product.sale_price * 100)}%</div>
                            <div className="product__all__sale__text">Giảm</div>
                          </div>
                        </div>
                        <div className="product__all-list__info">
                          <div className="product__all-list__title">{product.name}

                          </div>
                          <div className="product__all-list__price">
                            <div className="product__all-list__price-original"> <CurrencyFormatter amount={product.price} /> </div>
                            <div className="product__all-list__price-sale"><CurrencyFormatter amount={product.sale_price} /></div>
                          </div>
                          <div className="product__all-list__sell">
                            <div className="product__all-list__sell-review">
                              <i className="fa-sharp fa-solid fa-star text-[#f0e805]"></i>
                              <i className="fa-sharp fa-solid fa-star text-[#f0e805]"></i>
                              <i className="fa-sharp fa-solid fa-star text-[#f0e805]"></i>
                              <i className="fa-sharp fa-solid fa-star text-[#f0e805]"></i>
                              <i className="fa-sharp fa-solid fa-star text-[#f0e805]"></i>
                            </div>
                            <div className="product__all-list__sell-sold-sales">Đã Bán 5,81K</div>
                          </div>

                        </div>
                      </div>
                    </Link>
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Container