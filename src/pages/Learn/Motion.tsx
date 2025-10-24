import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
export default function Motion() {
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
    hidden: { opacity: 0, y: -12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "tween", duration: 0.18, ease: "easeOut" as const },
    },
    exit: {
      opacity: 0,
      y: -12,
      transition: { type: "tween", duration: 0.15, ease: "easeIn" as const },
    },
  };
  return (
    <div>
      <button onClick={() => setOpen((s) => !s)} className=" cursor-pointer">
        {open ? <LuX></LuX> : <LuMenu></LuMenu>}
      </button>
       <AnimatePresence>
        {open && (
          <motion.div
            key="box"
            initial={{ opacity: 0,  x: -20 }}
            animate={{ opacity: 1,  x:0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="mt-4 p-6 bg-blue-200 rounded-lg"
          >
            👋 Xin chào Framer Motion!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    
  );
}
