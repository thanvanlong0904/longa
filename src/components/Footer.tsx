import logo from "../assets/img/logo-footer.png";
import logoMap from "../assets/img/footer-map.jpg";
import { FiChevronsRight } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
export default function Footer() {
  return (
    <div className="  py-6">
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Cột 1: Thông tin */}
            <div>
              <a className="block mb-4" href="/">
                <img src={logo} alt="Logo" className="w-28 h-auto" />
              </a>

              <nav aria-label="Giới thiệu">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <FiChevronsRight /> Giới thiệu
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <FiChevronsRight /> Tuyển dụng
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <FiChevronsRight /> Điều khoản sử dụng
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <FiChevronsRight /> Chính sách bảo mật
                  </li>
                </ul>
              </nav>

              <div className="mt-4 space-y-2 text-sm text-gray-300">
                <p className="flex items-center gap-2">
                  <MdOutlineEmail /> Email: longthan0904@gmail.com
                </p>
                <p className="flex items-center gap-2">
                  <FaPhone /> Hotline: 0943 184 154
                </p>
              </div>

              {/* Đăng ký khuyến mãi */}
              <div className="mt-5">
                <p className="text-sm text-gray-300 mb-2">
                  Đăng ký nhận khuyến mãi
                </p>
                <form className="relative flex">
                  <input
                    className="bg-gray-700 text-sm placeholder:text-gray-400 w-full py-2 pl-3 pr-24 rounded-l-md outline-none "
                    type="email"
                    placeholder="Nhập email của bạn"
                    aria-label="Email"
                  />
                  <button
                    type="submit"
                    className="absolute right-0 h-full px-4 bg-red-600 hover:bg-red-700 text-sm rounded-r-md"
                  >
                    Đăng ký
                  </button>
                </form>
              </div>
            </div>

            {/* Cột 2: Hỗ trợ khách hàng */}
            <div>
              <h2 className="mb-3 font-semibold underline decoration-2">
                HỖ TRỢ KHÁCH HÀNG
              </h2>
              <ul className="space-y-2">
                {[
                  "Hướng dẫn mua hàng",
                  "Chính sách đổi trả",
                  "Giao hàng & thanh toán",
                  "Bảo hành & bảo trì",
                  "Liên hệ hỗ trợ",
                  "Câu hỏi thường gặp",
                ].map((t) => (
                  <li
                    key={t}
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-white cursor-pointer"
                  >
                    <FiChevronsRight /> {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Cột 3: Hệ thống cửa hàng / bản đồ */}
            <div>
              <h2 className="mb-3 font-semibold underline decoration-2">
                HỆ THỐNG CỬA HÀNG
              </h2>
              <a
                href="#"
                aria-label="Xem bản đồ hệ thống cửa hàng"
                className="block overflow-hidden rounded-md"
              >
                <img
                  src={logoMap}
                  alt="Bản đồ hệ thống"
                  className="w-full h-auto hover:scale-[1.02] transition"
                />
              </a>
            </div>

            {/* Cột 4: Kết nối */}
            <div>
              <h2 className="mb-3 font-semibold underline decoration-2">
                KẾT NỐI VỚI CHÚNG TÔI
              </h2>

              <div className="border-l-4 border-l-amber-500 pl-3 py-3 rounded-sm bg-gray-800/40">
                Cửa hàng điện thoại uy tín
              </div>

              <div className="mt-4 flex items-center gap-3">
                {/* Ví dụ social */}
                <a
                  href="#"
                  aria-label="Facebook"
                  className="p-2 rounded bg-gray-800 hover:bg-gray-700"
                >
                  f
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="p-2 rounded bg-gray-800 hover:bg-gray-700"
                >
                  ▶
                </a>
                <a
                  href="#"
                  aria-label="Zalo"
                  className="p-2 rounded bg-gray-800 hover:bg-gray-700"
                >
                  Z
                </a>
              </div>
            </div>
          </div>

          {/* dòng bản quyền */}
          <div className="mt-8 pt-4 border-t border-gray-800 text-center text-xs text-gray-400">
            © {new Date().getFullYear()} Tên Công Ty. All rights reserved.
          </div>
        </div>
      </footer>

      <div></div>
    </div>
  );
}
