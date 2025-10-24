import { useState } from "react";
import { FaPhone, FaSearch, FaShoppingCart } from "react-icons/fa";
import { LuMenu, LuX } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";
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

  const variants = {
    hidden: { opacity: 0, y: -12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.18, ease: "easeOut" } },
    exit: { opacity: 0, y: -12, transition: { duration: 0.15, ease: "easeIn" } },
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
          <a href="/">
            <img className="w-20 md:w-24 h-auto" src={logo} alt="Logo" />
          </a>
        </div>

        {/* desktop nav */}
        <nav className="basis-8/12 hidden md:block">
          <ul className="flex justify-between md:text-[13px] lg:text-[15px] gap-2 flex-wrap">
            {navItems.map((text) => (
              <li key={text} className="uppercase tracking-wide">{text}</li>
            ))}
          </ul>
        </nav>

        {/* actions + menu button */}
        <div className="basis-2/12 flex justify-end items-center gap-2">
          <button className="p-2 bg-gray-200 rounded-[4px]" aria-label="Tìm kiếm">
            <FaSearch className="text-red-900" />
          </button>
          <button className="p-2 bg-gray-200 rounded-[4px]" aria-label="Giỏ hàng">
            <FaShoppingCart className="text-red-900" />
          </button>

          {/* mobile menu toggle */}
          <button
            onClick={() => setOpen((s) => !s)}
            className="p-2 bg-gray-200 rounded-[4px] ml-2 md:hidden"
            aria-label="Mở menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
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
          >
            <ul className="flex flex-col px-3 py-2 text-[15px]">
              {navItems.map((text) => (
                <li
                  key={text}
                  className="uppercase py-2 border-b last:border-b-0 border-gray-100"
                  onClick={() => setOpen(false)}
                >
                  {text}
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
