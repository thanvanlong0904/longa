import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
export default function List() {
  return (
    <>
      <div className=" bg-gray-50 shadow-sm">
        <div className=" flex justify-between px-4 py-5">
          <h1 className=" font-semibold text-[16px] uppercase">Bài Viết</h1>
          <ul className=" flex justify-end gap-2 text-[14px] text-gray-600">
            <li>Trang chủ</li>
            <li>/</li>
            <li>Bài viết</li>
          </ul>
        </div>
        <div>
          <table className="w-full border border-gray-200">
            <thead className="bg-white py-2">
              <tr>
                <th className="border border-gray-300 w-[5%] py-2">STT</th>
                <th className="border border-gray-300 w-[25%] py-2 capitalize">
                  Tên sản phẩm
                </th>
                <th className="border border-gray-300 py-2 capitalize">Giá</th>
                <th className="border border-gray-300 w-[35%] py-2 capitalize">
                  Mô Tả
                </th>
                <th className="border border-gray-300 w-[10%] py-2 capitalize">
                  Số Lượng
                </th>
                <th className="border border-gray-300 w-[15%] py-2 capitalize">
                  Tác Vụ
                </th>
              </tr>
            </thead>
            <tbody className="font-light">
              <tr>
                <td className="border border-gray-300 text-center py-2 px-2 ">
                  1
                </td>
                <td className="border border-gray-300 py-2 px-4 font-light">
                  Áo thun nam
                </td>
                <td className="border border-gray-300 py-2 px-4 font-normal">120.000đ</td>
                <td className="border border-gray-300 py-2 px-4">
                  Áo cotton thoáng mát
                </td>
                <td className="border border-gray-300 text-center py-2">50</td>
                <td className="border border-gray-300 text-center py-2 flex justify-center items-center gap-1">
                  <FaRegEdit className="text-[20px] text-white bg-green-600 p-1 cursor-pointer" />{" "}
                  /
                  <MdDeleteForever className="text-[20px] text-white bg-red-600 p-1 cursor-pointer" />
                </td>
              </tr>

              <tr>
                <td className="border border-gray-300 text-center py-2 px-2">
                  2
                </td>
                <td className="border border-gray-300 py-2 px-4">
                  Áo sơ mi trắng
                </td>
                <td className="border border-gray-300 py-2 px-4">180.000đ</td>
                <td className="border border-gray-300 py-2 px-4">
                  Áo sơ mi vải lụa cao cấp, dễ ủi
                </td>
                <td className="border border-gray-300 text-center py-2">35</td>
                <td className="border border-gray-300 text-center py-2 flex justify-center items-center gap-1">
                  <FaRegEdit className="text-[20px] text-white bg-green-600 p-1 cursor-pointer" />{" "}
                  /
                  <MdDeleteForever className="text-[20px] text-white bg-red-600 p-1 cursor-pointer" />
                </td>
              </tr>

              <tr>
                <td className="border border-gray-300 text-center py-2 px-2">
                  3
                </td>
                <td className="border border-gray-300 py-2 px-4">
                  Quần jeans nam
                </td>
                <td className="border border-gray-300 py-2 px-4">250.000đ</td>
                <td className="border border-gray-300 py-2 px-4">
                  Chất vải dày, co giãn nhẹ, phong cách trẻ trung
                </td>
                <td className="border border-gray-300 text-center py-2">40</td>
                <td className="border border-gray-300 text-center py-2 flex justify-center items-center gap-1">
                  <FaRegEdit className="text-[20px] text-white bg-green-600 p-1 cursor-pointer" />{" "}
                  /
                  <MdDeleteForever className="text-[20px] text-white bg-red-600 p-1 cursor-pointer" />
                </td>
              </tr>

              <tr>
                <td className="border border-gray-300 text-center py-2 px-2">
                  4
                </td>
                <td className="border border-gray-300 py-2 px-4">
                  Áo khoác gió
                </td>
                <td className="border border-gray-300 py-2 px-4">320.000đ</td>
                <td className="border border-gray-300 py-2 px-4">
                  Áo khoác gió chống nước, thích hợp đi phượt
                </td>
                <td className="border border-gray-300 text-center py-2">20</td>
                <td className="border border-gray-300 text-center py-2 flex justify-center items-center gap-1">
                  <FaRegEdit className="text-[20px] text-white bg-green-600 p-1 cursor-pointer" />{" "}
                  /
                  <MdDeleteForever className="text-[20px] text-white bg-red-600 p-1 cursor-pointer" />
                </td>
              </tr>

              <tr>
                <td className="border border-gray-300 text-center py-2 px-2">
                  5
                </td>
                <td className="border border-gray-300 py-2 px-4">
                  Giày sneaker
                </td>
                <td className="border border-gray-300 py-2 px-4">450.000đ</td>
                <td className="border border-gray-300 py-2 px-4">
                  Giày thể thao nhẹ, đế cao su chống trượt
                </td>
                <td className="border border-gray-300 text-center py-2">15</td>
                <td className="border border-gray-300 text-center py-2 flex justify-center items-center gap-1">
                  <FaRegEdit className="text-[20px] text-white bg-green-600 p-1 cursor-pointer" />{" "}
                  /
                  <MdDeleteForever className="text-[20px] text-white bg-red-600 p-1 cursor-pointer" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
