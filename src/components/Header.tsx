import { useState } from "react";
import { FaPhone, FaSearch, FaShoppingCart } from "react-icons/fa";
import { LuMenu, LuX } from "react-icons/lu";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import logo from "../assets/img/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    "Hàng mới về",
    "BỘ SƯU TẬP",
    "Áo nam",
    "Quần nam",
    "Phụ kiện",
    "4MEN ACTIVE",
    "ECO-GREEN",
    "OUTLET SALE",
  ];

  const variants: Variants = {
    hidden:  { opacity: 0, y: -12 },
    visible: { opacity: 1, y: 0, transition: { type: "tween", duration: 0.18, ease: "easeOut" as const } },
    exit:    { opacity: 0, y: -12, transition: { type: "tween", duration: 0.15, ease: "easeIn"  as const } },
  };

  return (
    <header className="shadow-sm">
      {/* top bar */}
      <div className="bg-black py-2 hidden md:block">
        <div className="max-w-7xl mx-auto flex text-white justify-between px-2 text-[14px] items-center">
          <div className="flex items-center">
            <FaPhone /> <span className="ml-2">Hotline: 0868.444.64</span>
          </div>
          <ul className="flex">
            <li className="px-2 border-r border-r-gray-600">Cách chọn Size</li>
            <li className="px-2 border-r border-r-gray-600">Chính sách khách vip</li>
            <li className="px-2">Giới thiệu</li>
          </ul>
        </div>
      </div>

      {/* main bar */}
      <div className="max-w-7xl mx-auto flex items-center px-2 py-2 justify-between">
        <div className="basis-2/12">
          <a href="/" aria-label="Trang chủ">
            <img className="w-20 md:w-24 h-auto" src={logo} alt="Logo 4MEN" />
          </a>
        </div>

        {/* desktop nav */}
        <nav className="basis-8/12 hidden md:block" aria-label="Điều hướng chính">
          <ul className="flex justify-between md:text-[13px] lg:text-[15px] gap-2 flex-wrap">
            {navItems.map((text) => (
              <li key={text} className="uppercase tracking-wide">{text}</li>
            ))}
          </ul>
        </nav>

        {/* actions + menu button */}
        <div className="basis-2/12 flex justify-end items-center gap-2">
          <button className="p-2 bg-gray-200 rounded-sm" aria-label="Tìm kiếm" type="button">
            <FaSearch className="text-red-900" />
          </button>
          <button className="p-2 bg-gray-200 rounded-sm" aria-label="Giỏ hàng" type="button">
            <FaShoppingCart className="text-red-900" />
          </button>

          {/* mobile menu toggle */}
          <button
            onClick={() => setOpen((s) => !s)}
            className="p-2 bg-gray-200 rounded-sm ml-2 md:hidden"
            aria-label={open ? "Đóng menu" : "Mở menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            type="button"
          >
            {open ? <LuX className="text-red-900" /> : <LuMenu className="text-red-900" />}
          </button>
        </div>
      </div>

      {/* mobile dropdown (md:hidden) */}
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
            className="md:hidden border-t border-gray-100 bg-white"
            aria-label="Menu di động"
          >
            <ul className="flex flex-col px-3 py-2 text-[15px]">
              {navItems.map((text) => (
                <li
                  key={text}
                  className="uppercase py-2 border-b last:border-b-0 border-gray-100"
                >
                  <button
                    type="button"
                    className="w-full text-left"
                    onClick={() => setOpen(false)}
                  >
                    {text}
                  </button>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
