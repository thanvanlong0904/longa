import { useState } from "react";
import { MdAssignment } from "react-icons/md";
import { CiShop } from "react-icons/ci";
import ButtonSidebar from "../../components/ButtonSidebar";
import { Link } from "react-router-dom";

export default function Sidebar() {
  type MenuGroup = "posts" | "pages" | "product" | null;
  const [openGroup, setOpenGroup] = useState<MenuGroup>(null);

  const toggleGroup = (group: MenuGroup) => {
    setOpenGroup((prev) => (prev === group ? null : group));
  };

  return (
    <div className="px-6 py-4 font-poppins bg-slate-800 min-h-screen text-slate-100">
      <h1 className="text-center text-white font-medium text-2xl mb-4">Lweb</h1>

      <ul className="space-y-2">
        {/* Nhóm: Bài viết */}
        <ButtonSidebar
          groupKey="posts"
          label="Bài viết"
          icon={<MdAssignment className="text-lg" />}
          isOpen={openGroup === "posts"}
          onToggle={() => toggleGroup("posts")}
          panelId="posts-group"
        >
          <li>
            <Link
              to="/posts"
              className="block text-slate-300 hover:text-white hover:bg-slate-700 rounded-md px-3 py-1 text-[13px]"
            >
              Tất cả trang
            </Link>
          </li>
          <li>
            <Link
              to="/posts/add"
              className="block text-white hover:bg-slate-700 rounded-md px-3 py-1 text-[13px] font-medium"
            >
              Thêm trang
            </Link>
          </li>
          <li>
            <Link
              to="/posts/templates"
              className="block text-slate-300 hover:text-white hover:bg-slate-700 rounded-md px-3 py-1 text-[13px]"
            >
              Mẫu trang
            </Link>
          </li>
        </ButtonSidebar>

        {/* Nhóm: Sản phẩm */}
        <ButtonSidebar
          groupKey="product"
          label="Sản phẩm"
          icon={<CiShop className="text-lg" />}
          isOpen={openGroup === "product"}
          onToggle={() => toggleGroup("product")}
          panelId="product-group"
        >
          <li>
            <Link
              to="product/add"
              className="block text-slate-300 hover:text-white hover:bg-slate-700 rounded-md px-3 py-1 text-[13px]"
            >
              Thêm sản phẩm
            </Link>
          </li>
          <li>
            <Link
              to="/admin"
              className="block text-white hover:bg-slate-700 rounded-md px-3 py-1 text-[13px] font-medium"
            >
              Danh sách sản phẩm
            </Link>
          </li>
          <li>
            <Link
              to="/products/templates"
              className="block text-slate-300 hover:text-white hover:bg-slate-700 rounded-md px-3 py-1 text-[13px]"
            >
              Mẫu trang
            </Link>
          </li>
        </ButtonSidebar>
      </ul>
    </div>
  );
}
