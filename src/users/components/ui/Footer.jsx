import React from 'react';
import { useLocation } from 'react-router';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import logo from "../../../assets/images/commons/logo.png";
import iconFacebook from "../../../assets/images/commons/icon_facebook.png";
import iconInstagram from "../../../assets/images/commons/icon_instagram.png";
import iconTwitter from "../../../assets/images/commons/icon_twitter.png";
import iconWhatsApp from "../../../assets/images/commons/icon_whatsApp.png";

export default function Footer() {
  let { pathname } = useLocation();
  const isUser = (pathname.indexOf("admin") === -1 && pathname.indexOf("employee") === -1 ? true : false);

  return (
     <footer className="footer">
        { 
        isUser && <div className="container">
            <div className="footer__up">
                <div className="footer__title">
                    <div className="footer__title-logo">
                        <img className="h-100" alt="Vue logo" src={logo} />
                        <h6 className="text-white typography-h6 mb-0">Logo</h6>
                    </div>
                    <div className="footer__title-text">
                    <p >
                    The Coffee® được sinh ra từ niềm đam mê bất tận với hạt cà phê Việt Nam.  <br></br>
                    Qua một chặng đường dài, chúng tôi đã không ngừng mang đến những sản <br></br>
                     phẩm 
                    cà phê thơm ngon, sánh đượm trong không gian thoải mái và lịch sự <br></br> với 
                     mức
                    giá hợp lý. Những ly cà phê của chúng tôi không chỉ đơn thuần là <br></br> 
                    thức uống quen thuộc mà còn mang trên mình một sứ mệnh văn hóa phản  <br></br> 
                    ánh một phần nếp sống hiện đại của người Việt Nam
                    </p>

                    </div>
                </div>
                <div className="footer__infor">
                    <div className="footer__infor-item">
                        <LocationOnIcon />
                        <p>Son Tra, Da Nang, Viet Nam</p>
                    </div>
                    <a className="footer__infor-item" href="mailto:info@companyname.com">
                        <EmailIcon />
                        <p>thecoffeeshop.com</p>
                    </a>
                </div>
            </div>
            <div className="footer__down">
              <div className="footer__copy">
                  <p>© The coffee shop 2021. All rights reserved.</p>
              </div>
              <div className="footer__social">
                  <ul className="social-list">
                      <li><a href="https://www.instagram.com/" target="_blank"><img src={iconInstagram} /></a></li>
                      <li><a href="https://www.facebook.com/" target="_blank"><img src={iconFacebook} /></a></li>
                      <li><a href="https://www.twitter.com/" target="_blank"><img src={iconTwitter} /></a></li>
                      <li><a href="https://www.whatsapp.com/" target="_blank"><img src={iconWhatsApp} /></a></li>
                  </ul>
              </div>
          </div>
        </div>
        }
    </footer>
  )
}