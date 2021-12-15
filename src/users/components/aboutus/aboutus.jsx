import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import coffee1 from "../../../assets/images/partials/home/coffe2.png";
import coffee2 from "../../../assets/images/partials/home/coffee.png";
import coffee3 from "../../../assets/images/partials/home/coffe3.png";
import album1 from "../../../assets/images/partials/home/album-1.png";
import album2 from "../../../assets/images/partials/home/album-2.png";
import album3 from "../../../assets/images/partials/home/album-3.png";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { FormatQuote  } from "@material-ui/icons";
export default function AboutUs(props) {
  return (
    <div className="home-user">
      <main>
        <section className="aboutus">
          <div className="container">
            <div className="banner__text">
              <div className="banner__text-title">
                <span className="banner__text-title-question">
                  Who we are?
                </span>
                <span className="banner__text-title-content">The Coffee Shop</span>
               <q>Từ tình yêu với Việt Nam và niềm đam mê cà phê, năm 1999, thương hiệu Highlands Coffee® ra đời với khát vọng nâng tầm di sản cà phê lâu đời của Việt Nam và lan rộng tinh thần tự hào, kết nối hài hoà giữa truyền thống với hiện đại.

Bắt đầu với sản phẩm cà phê đóng gói tại Hà Nội vào năm 2000, chúng tôi đã nhanh chóng phát triển và mở rộng thành thương hiệu quán cà phê nổi tiếng và không ngừng mở rộng hoạt động trong và ngoài nước từ năm 2002.

Qua một chặng đường dài, chúng tôi đã không ngừng mang đến những sản phẩm cà phê thơm ngon, sánh đượm trong không gian thoải mái và lịch sự. Những ly cà phê của chúng tôi không chỉ đơn thuần là thức uống quen thuộc mà còn mang trên mình một sứ mệnh văn hóa phản ánh một phần nếp sống hiện đại của người Việt Nam.

Đến nay, Highlands Coffee® vẫn duy trì khâu phân loại cà phê bằng tay để chọn ra từng hạt cà phê chất lượng nhất, rang mới mỗi ngày và phục vụ quý khách với nụ cười rạng rỡ trên môi. Bí quyết thành công của chúng tôi là đây: không gian quán tuyệt vời, sản phẩm tuyệt hảo và dịch vụ chu đáo với mức giá phù hợp.</q>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
