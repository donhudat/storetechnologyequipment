import Header from '@/components/header'
import Footer from '@/components/footer'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { ProductResponse } from '../api/product'
import { Product as Pro } from '../../../models/product'
import { useAuth } from '@/hook/useAuth'
import { AddCartResponse } from '../api/cart/add'
import { toast } from 'react-toastify'
import CurrencyFormatter from '@/components/CurrencyFormatter'
function Product() {
  const router = useRouter()
  const id = router.query.id;
  const [product, setProduct] = useState<Pro>()
  const { user, fetchCart } = useAuth();
  useEffect(() => {
    fetch("http://localhost:3000/api/product/" + id)
      .then(res => res.json())
      .then((productRes: ProductResponse) => {
        if (productRes.data) setProduct(productRes.data as Pro)
      })
  }, [id])
  if (!product) {
    return;
  }
  const handleAddToCart = () => {
    fetch("http://localhost:3000/api/cart/add", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({
        id_user: user?.id,
        id_product: id,
        quantity: 1
      })
    }).then(res => res.json())
      .then((data: AddCartResponse) => {
        if (data.success) {
          toast.success("Thêm sản phẩm vào giỏ hành thành công!")
          fetchCart();
        } else {
          toast.error("Thêm sản phẩm thất bại!")
        }
      }).catch(() => {
        toast.error("Thêm sản phẩm thất bại!")
      })
  }
  return (
    <>
      <Header />
      <div className="main">
        <div id="includedheader"></div>

        <div className="product-tab bg-white">
          <div className="gird">
            <div className="product-tab__title row ">
              <h1 className="text-3xl"> {product.name}
                <i className="fa-solid fa-star ml-1 text-[#edbc07]"></i>
                <i className="fa-solid fa-star text-[#edbc07]"></i>
                <i className="fa-solid fa-star text-[#edbc07]"></i>
                <i className="fa-solid fa-star text-[#edbc07]"></i>
                <i className="fa-solid fa-star text-[#edbc07]"></i>

              </h1>
              <h5 className='mt-2'>1.4k Đánh giá</h5>
            </div>
            <div className="product-tab__product ">

              <div className="product__img-list">
                <div className="product__img-main mb-3">
                  <img className='h-full' src={product.img} alt="" />
                </div>

                <div className="product__img__infos row ">
                  <div className="product__img__info">
                    <h2>Thông tin sản phẩm</h2>
                    <ul>
                      <li><i className="fa-solid fa-mobile-screen text-[#4a4a4a]" ></i> Hàng chính hãng Apple Việt Nam, Mới</li>
                      <li><i className="fa-solid fa-box-open text-[#4a4a4a]" ></i> Hộp, Sách hướng dẫn, Cây lấy sim, Cáp Lightning - Type C</li>
                      <li><i className="fa-solid fa-shield-virus text-[#4a4a4a]" ></i> 1 ĐỔI 1 trong 30 ngày nếu có lỗi phần cứng nhà sản xuất. Bảo hành 12 tháng tại trung tâm bảo hành chính hãng Apple</li>
                      <li> <i className="fa-solid fa-money-check text-[#4a4a4a]" ></i> Giá sản phẩm đã bao gồm VAT</li>
                    </ul>
                  </div>
                  <div className="shop-have-product column">
                    <div className="shop__address row">
                      <div className="shop__address__city">Hà Nội</div>
                      <div className="shop__address__district">
                        Quận\Huyện
                        <i className="fa-solid fa-chevron-down"></i>
                      </div>
                    </div>
                    <div className="shop__address-have-product row">
                      Có <h3>9</h3> cửa hàng có sản phẩm
                    </div>

                    <ul className="shop__address__list column">
                      <div className="shop__address__item row">
                        <div className="shop__address__item-phone-number"><i className="fa-solid fa-phone"></i>
                          024.789.1238
                        </div>
                        <div className="shop__address__item-address">
                          <a href="https://www.google.com/maps/place/Highlands+Coffee+Nguy%E1%BB%85n+Tr%C3%A3i/@20.9882591,105.7985243,19.94z/data=!4m6!3m5!1s0x3135ad450b2a50ad:0x214b27d1f2babe6d!8m2!3d20.9881856!4d105.7989873!16s%2Fg%2F11f9zqyby7?entry=ttu"> - <i className="fa-solid fa-location-dot"></i> 128 Nguyễn Trãi,Thanh Xuân,Hà Nội.</a>
                        </div>
                      </div>
                      <div className=" bgcl shop__address__item row">
                        <div className="shop__address__item-phone-number"><i className="fa-solid fa-phone"></i>
                          024.789.1238
                        </div>
                        <div className="shop__address__item-address">
                          <a href="https://www.google.com/maps/place/Highlands+Coffee+Nguy%E1%BB%85n+Tr%C3%A3i/@20.9882591,105.7985243,19.94z/data=!4m6!3m5!1s0x3135ad450b2a50ad:0x214b27d1f2babe6d!8m2!3d20.9881856!4d105.7989873!16s%2Fg%2F11f9zqyby7?entry=ttu"> - <i className="fa-solid fa-location-dot"></i> 128 Nguyễn Trãi,Thanh Xuân,Hà Nội.</a>
                        </div>
                      </div>
                      <div className="shop__address__item row">
                        <div className="shop__address__item-phone-number"><i className="fa-solid fa-phone"></i>
                          024.789.1238
                        </div>
                        <div className="shop__address__item-address">
                          <a href="https://www.google.com/maps/place/Highlands+Coffee+Nguy%E1%BB%85n+Tr%C3%A3i/@20.9882591,105.7985243,19.94z/data=!4m6!3m5!1s0x3135ad450b2a50ad:0x214b27d1f2babe6d!8m2!3d20.9881856!4d105.7989873!16s%2Fg%2F11f9zqyby7?entry=ttu"> - <i className="fa-solid fa-location-dot"></i> 128 Nguyễn Trãi,Thanh Xuân,Hà Nội.</a>
                        </div>
                      </div>
                      <div className="bgcl shop__address__item row">
                        <div className="shop__address__item-phone-number"><i className="fa-solid fa-phone"></i>
                          024.789.1238
                        </div>
                        <div className="shop__address__item-address">
                          <a href="https://www.google.com/maps/place/Highlands+Coffee+Nguy%E1%BB%85n+Tr%C3%A3i/@20.9882591,105.7985243,19.94z/data=!4m6!3m5!1s0x3135ad450b2a50ad:0x214b27d1f2babe6d!8m2!3d20.9881856!4d105.7989873!16s%2Fg%2F11f9zqyby7?entry=ttu"> - <i className="fa-solid fa-location-dot"></i> 128 Nguyễn Trãi,Thanh Xuân,Hà Nội.</a>
                        </div>
                      </div>
                      <div className="shop__address__item row">
                        <div className="shop__address__item-phone-number"><i className="fa-solid fa-phone"></i>
                          024.789.1238
                        </div>
                        <div className="shop__address__item-address">
                          <a href="https://www.google.com/maps/place/Highlands+Coffee+Nguy%E1%BB%85n+Tr%C3%A3i/@20.9882591,105.7985243,19.94z/data=!4m6!3m5!1s0x3135ad450b2a50ad:0x214b27d1f2babe6d!8m2!3d20.9881856!4d105.7989873!16s%2Fg%2F11f9zqyby7?entry=ttu"> - <i className="fa-solid fa-location-dot"></i> 128 Nguyễn Trãi,Thanh Xuân,Hà Nội.</a>
                        </div>
                      </div>

                    </ul>

                  </div>
                </div>


              </div>

              <div className="product-tab__info column">
                <div className="row product-tab__info__capacity-options">
                  <a href="" className=" column product-tab__info__capacity-item">
                    1TB
                    <div id="tab-price">40.990.000 đ</div>
                  </a>
                  <a href="" className=" column product-tab__info__capacity-item">
                    512GB
                    <div id="tab-price">35.190.000 đ</div>
                  </a>
                  <a href="" className=" column product-tab__info__capacity-item">
                    256GB
                    <div id="tab-price">29.290.000 đ</div>
                  </a>
                  <a href="" className=" column product-tab__info__capacity-item">
                    128GB
                    <div id="tab-price">26.390.000 đ</div>
                  </a>

                </div>
                <h2 id="titleh2">Chọn màu để xem giá và chi nhánh có hàng </h2>
                <div className="row product-tab__info__color-options">

                  <div className="product-tab__info__color-options-item row hover:bg-[#adadad8a]">
                    <img src="assets/img/vang-iphone-14-pro_5.webp" alt="" className="product-tab__info__color-options__img" />
                    <div className="product-tab__info__color-options__color column">
                      <div id="color-product-tab">
                        Vàng
                      </div>
                      29.290.000đ
                    </div>
                  </div>
                  <div className="product-tab__info__color-options-item row hover:bg-[#adadad8a]">
                    <img src="assets/img/14prm-tim.webp" alt="" className="product-tab__info__color-options__img" />
                    <div className="product-tab__info__color-options__color column">
                      <div id="color-product-tab">
                        Tím
                      </div>
                      29.290.000đ
                    </div>
                  </div>
                  <div className="product-tab__info__color-options-item row hover:bg-[#adadad8a]">
                    <img src="assets/img/14prm-den.webp" alt="" className="product-tab__info__color-options__img" />
                    <div className="product-tab__info__color-options__color column">
                      <div id="color-product-tab">
                        Đen
                      </div>
                      29.290.000đ
                    </div>
                  </div>
                  <div className="product-tab__info__color-options-item row hover:bg-[#adadad8a]">
                    <img src="assets/img/14prm-whitle.webp" alt="" className="product-tab__info__color-options__img" />
                    <div className="product-tab__info__color-options__color column">
                      <div id="color-product-tab">
                        Trắng
                      </div>
                      29.290.000đ
                    </div>
                  </div>

                </div>
                <div className="product-tab__info__price row hover:bg-[#adadad8a]">
                  <div className="product-tab__info__price__trade row">
                    <img src="assets/img/trade-phone.webp" alt="" />
                    <div className="product-tab__info__price__trade-option column">
                      <div id="price-trade">27.990.990đ</div>
                      Khi thu cũ đổi mới
                    </div>
                  </div>
                  <div className="product-tab__info__price__buy column ">
                    <div id="price-sale-tab"><CurrencyFormatter amount={product.sale_price} /></div>
                    <div id="price-new-tab"><CurrencyFormatter amount={product.price} /></div>

                  </div>
                </div>
                <div className="row product-tab__info__buy">
                  <div className="product-tab__info__buy-now column"> Mua Ngay
                    <h5>(Giao nhanh từ 2 giờ hoặc nhận tại cửa hàng)</h5>
                  </div>
                  <div onClick={handleAddToCart} className="product-tab__info__add-cart column cursor-pointer">
                    <i className="fa-solid fa-cart-plus"></i>
                    Thêm vào giỏ
                  </div>
                </div>
                <div className=" row product-tab__info__pay-options">
                  <div className="product-tab__info__pay">
                    <h3>TRẢ GÓP 0%</h3>
                    <h4>Trả trước chỉ từ 8.997.000đ</h4>
                  </div>
                  <div className="product-tab__info__pay">
                    <h3>TRẢ GÓP QUA THẺ</h3>
                    <h4>(Visa,Mastercard,JCB)</h4>
                  </div>
                </div>
                <a href="" className="timhieuthem">Tìm Hiểu Thêm</a>
                <div className="product-tab__info__extra-sale column">
                  <h2>ƯU ĐÃI THÊM</h2>
                  <ul className="sale-extra__program-details">
                    <li className="row"> <i className="fa-solid fa-circle-check text-[#12d929]"></i>  Giảm thêm tới 1% cho thành viên Cowmember (áp dụng tùy sản phẩm)</li>
                    <li className="row"> <i className="fa-solid fa-circle-check text-[#12d929]"></i> <img src="assets/img/logo-home-credit.webp " className='h-[14px]' alt="" />  Ưu đãi đến 500k khi trả góp qua Home Credit (áp dụng iPhone 15 Series)</li>
                    <li className="row"> <i className="fa-solid fa-circle-check text-[#12d929]"></i> <img src="assets/img/kredivo.webp h" className='h-[14px]' alt="" /> Kredivo Giảm thêm 5% tối đa 200.000đ khi thanh toán qua Kredivo</li>
                    <li className="row"> <i className="fa-solid fa-circle-check text-[#12d929]"></i> <img src="assets/img/logo_vib.webp" alt="" /> VIB Mở thẻ tín dụng VIB - Nhận voucher 200.000đ mua hàng tại CowTech</li>
                    <li className="row"> <i className="fa-solid fa-circle-check text-[#12d929]"></i> <img src="assets/img/ocb.webp" alt="" />  Giảm 500k đơn hàng từ 10 triệu (trừ các sản phẩm Apple)</li>
                    <li className="row"> <i className="fa-solid fa-circle-check text-[#12d929]"></i>  <img src="assets/img/hsbc.web p " className='h-[14px]' alt="" />   Mở thẻ tín dụng HSBC - Nhận voucher đến 2.5 triệu</li>
                    <li className="row"> <i className="fa-solid fa-circle-check text-[#12d929]"></i>  Nhập mã “TUUTRUONG” - Giảm 30% khi đăng ký gói ELSA PRO từ 6 tháng trở lên</li>
                  </ul>
                </div>


              </div>

            </div>
          </div>
        </div>


      </div>
      <Footer />
    </>
  )
}

export default Product;