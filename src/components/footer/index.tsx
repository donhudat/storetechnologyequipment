import Link from "next/link";
import "./assets/img/pay-visa.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__commit">
        <div className=" column--3 footer__commit__returns">
          <i className="fa-solid fa-rotate-left"></i>
          <ul className="commit__returns__text">
            <li>7 Ngày miễn phí trả hàng</li>
            <li>Trả hàng miễn phí trong 7 ngày</li>
          </ul>
        </div>
        <div className=" column--3 footer__commit__returns">
          <i className="fa-solid fa-check  text-[#D0011B]" ></i>
          <ul className="commit__returns__text">
            <li>Hàng chính hãng 100%</li>
            <li>Đảm bảo hàng chính hãng hoặc hoàn tiền gấp đôi</li>
          </ul>
        </div>
        <div className=" column--3 footer__commit__returns">
          <i className="fa-solid fa-tr text-[#D0011B]" ></i>
          <ul className="commit__returns__text">
            <li>Miễn phí vận chuyển</li>
            <li>Giao hàng miễn phí toàn quốc</li>
          </ul>
        </div>

      </div>
      <div className="color">
        <div className="footer__introduct">
          <div className="footer__introduct-list">
            <div className="footer__introduct-list__title">
              CHĂM SÓC KHÁCH HÀNG
            </div>
            <ul className="footer__introduct-list-item">
              <li>Cow Tech Blog</li>
              <li>Trung Tâm Trợ Giúp</li>
              <li>Hướng Dẫn Mua Hàng</li>
              <li>Thanh Toán</li>
              <li>Cow Xu</li>
              <li>Vận Chuyển</li>
              <li>Trả Hàng & Hoàn Tiền</li>
              <li>Chăm Sóc Khách Hàng</li>
              <Link href='/cskh'> <li>Chính Sách Khách Hàng</li></Link>
              <li>Chính Sách Bảo Hành</li>
            </ul>
          </div>

          <div className="footer__introduct-list">
            <div className="footer__introduct-list__title">
              VỀ COW TECH
            </div>
            <ul className="footer__introduct-list-item">
              <li>Giới Thiệu Về Cow Tech</li>
              <li>Tuyển Dụng</li>
              <li>Điều Khoản Cow Tech</li>
              <li>Chính Sách Bảo Mật</li>
              <li>Chính Hãng</li>
              <li>Kênh Người Bán</li>
              <li>Sale</li>
              <li>Liên Hệ Với Truyền Thông</li>

            </ul>
          </div>


          <div className="footer__introduct-list">

            <div className="footer__introduct-list__pay">
              <div className="footer__introduct-list__title">
                THANH TOÁN
              </div>
              <div className="footer__introduct-list__item">
                <ul className="footer__introduct-list__pay-item">
                  <li><img src="https://down-vn.img.susercontent.com/file/d4bbea4570b93bfd5fc652ca82a262a8" alt="" /></li>
                  <li><img src="https://down-vn.img.susercontent.com/file/a0a9062ebe19b45c1ae0506f16af5c16" alt="" /></li>
                  <li><img src="https://down-vn.img.susercontent.com/file/38fd98e55806c3b2e4535c4e4a6c4c08" alt="" /></li>
                  <li><img src="https://down-vn.img.susercontent.com/file/5e3f0bee86058637ff23cfdf2e14ca09" alt="" /></li>
                  <li><img src="https://down-vn.img.susercontent.com/file/2c46b83d84111ddc32cfd3b5995d9281" alt="" /></li>
                  <li><img src="https://down-vn.img.susercontent.com/file/bc2a874caeee705449c164be385b796c" alt="" /></li>


                </ul>
              </div>
            </div>
            <div className="footer__introduct-list__transport">
              <div className="footer__introduct-list__title">
                ĐƠN VỊ VẬN CHUYỂN
              </div>
              <div className="footer__introduct-list__item">
                <ul className="footer__introduct-list__pay-item">
                  <li><img src="https://down-vn.img.susercontent.com/file/vn-50009109-159200e3e365de418aae52b840f24185" alt="" /></li>
                  <li><img src="https://down-vn.img.susercontent.com/file/d10b0ec09f0322f9201a4f3daf378ed2" alt="" /></li>
                  <li><img src="https://down-vn.img.susercontent.com/file/77bf96a871418fbc21cc63dd39fb5f15" alt="" /></li>
                  <li><img src="https://down-vn.img.susercontent.com/file/59270fb2f3fbb7cbc92fca3877edde3f" alt="" /></li>
                  <li><img src="https://down-vn.img.susercontent.com/file/957f4eec32b963115f952835c779cd2c" alt="" /></li>
                  <li><img src="https://down-vn.img.susercontent.com/file/0d349e22ca8d4337d11c9b134cf9fe63" alt="" /></li>
                  <li><img src="https://down-vn.img.susercontent.com/file/0b3014da32de48c03340a4e4154328f6" alt="" /></li>

                </ul>
              </div>
            </div>
          </div>

          <div className="footer__introduct-list">
            <div className="footer__introduct-list__title">
              THEO DÕI CHÚNG TÔI TRÊN
            </div>
            <ul className="footer__introduct-list-item">
              <a href=""><i className="fa-brands fa-facebook"></i> FaceBook</a>
              <a href=""><i className="fa-brands fa-square-instagram"> </i> Instagram</a>
              <a href=""><i className="fa-brands fa-linkedin"></i> Linkedn</a>
            </ul>
          </div>

          <div className="footer__introduct-list">
            <div className="footer__introduct-list__title">
              TẢI ỨNG DỤNG COW TECH NGAY THÔI
            </div>
            <ul className="footer__introduct-list-item">
              <div className="footer__down__app">
                <div className="footer__down__app-qr">
                  <img src="https://down-vn.img.susercontent.com/file/a5e589e8e118e937dc660f224b9a1472" alt="" />
                </div>
                <div className="footer__down__app-system">
                  <img src="https://down-vn.img.susercontent.com/file/ad01628e90ddf248076685f73497c163" alt="" className="ch-/play" />
                  <img src="https://down-vn.img.susercontent.com/file/ae7dced05f7243d0f3171f786e123def" alt="" className="ios" />
                  <img src="https://down-vn.img.susercontent.com/file/35352374f39bdd03b25e7b83542b2cb0" alt="" className="app/lery" />
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__info">
        <div className="footer__info__policy">
          <ul className="footer__info__policy-text">
            <li><a href=""> CHÍNH SÁCH BẢO MẬT</a></li>
            <li><a href=""> CHÍNH SÁCH KHÁCH HÀNG</a></li>
            <li><a href=""> CHÍNH SÁCH BẢO HÀNH</a></li>
            <li><a href=""> QUY CHẾ HOẠT ĐỘNG</a></li>
          </ul>
        </div>
        <div className="footer__info__industry-trade">
          <img src="assets/img/logoCCDV.png" alt="" />
        </div>
        <div className="footer__info__end">
          <ul className="footer__info__end-text">
            <li>Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam. Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn</li>
            <li>Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại liên hệ: 024 73081221 (ext 4678)</li>
            <li>Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015</li>
            <li>© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer