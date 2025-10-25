import logo from "../Shared/../../Home/../../admin/../assets/img/adminlogo.png";
import { FaChevronDown } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const variants: Variants = {
    hidden: { opacity: 0, y: -12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "tween", duration: 0.18, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -12,
      transition: { type: "tween", duration: 0.15, ease: "easeIn" },
    },
  };


export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className=" font-poppins px-4 ">
      <div className=" flex justify-end ">
        <div className=" relative">
          <button onClick={()=>setOpen(pre=> !pre)} className=" flex items-center gap-3 py-4 px-3 text-gray-600 cursor-pointer hover:bg-gray-100">
            <img
              src={logo}
              alt=""
              className=" w-10 rounded-full border border-amber-400"
            />
            <span className=" text-[14px]">Thân Văn Long</span>
            <FaChevronDown className=" text-[12px]" />
          </button>
          <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
            className="shadow-sm p-2 text-[13px] z-30 top-full right-0 absolute w-full rounded-[3px] bg-white"
            aria-label="Menu di động"
          >
           <ul className=" ">
              <li className="py-2 border-b border-gray-300 flex justify-center items-center gap-2"><FaUser></FaUser> Tài Khoản</li>
              <li  className="py-2 flex justify-center items-center gap-2"><IoLogOutOutline></IoLogOutOutline> Đăng xuất</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
          {/* <div className=" shadow-sm p-2 text-[13px]">
            <ul className=" ">
              <li className="py-2 border-b border-gray-300 flex justify-center items-center gap-2"><FaUser></FaUser> Tài Khoản</li>
              <li  className="py-2 flex justify-center items-center gap-2"><IoLogOutOutline></IoLogOutOutline> Đăng xuất</li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
}
