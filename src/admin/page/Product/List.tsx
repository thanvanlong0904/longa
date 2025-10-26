import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import http from "../../../assets/http.api";
import type { Product } from "../../../types/Product.type";
import { useNavigate } from "react-router-dom";

export default function List() {
  const navigate = useNavigate()
  const { data: listProduct } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: () => http.get<Product[]>("products").then((res) => res.data),
  });

  const qc = useQueryClient();
  const deleteProduc = useMutation({
    mutationFn: (id: number) => http.delete(`products/${id}`).then((res) => res.data),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["products"] });
    },
  });

  return (
    <>
      <div className="bg-gray-50 min-h-screen">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-5 border-b bg-white shadow-sm">
          <h1 className="font-semibold text-lg uppercase text-gray-700">Danh sách sản phẩm</h1>
          <ul className="flex gap-2 text-sm text-gray-500">
            <li>Trang chủ</li>
            <li>/</li>
            <li>Danh sách</li>
          </ul>
        </div>

        {/* Table container */}
        <div className="p-6">
          <div className="overflow-x-auto bg-white rounded-lg shadow-md">
            <table className="min-w-full border-collapse">
              <thead className="bg-gray-100 text-gray-700 uppercase text-sm font-medium">
                <tr>
                  <th className="border-b border-gray-200 py-3 px-4 text-center">STT</th>
                  <th className="border-b border-gray-200 py-3 px-4 text-left">Tên sản phẩm</th>
                  <th className="border-b border-gray-200 py-3 px-4 text-right">Giá</th>
                  <th className="border-b border-gray-200 py-3 px-4 text-left">Mô tả</th>
                  <th className="border-b border-gray-200 py-3 px-4 text-center">Số lượng</th>
                  <th className="border-b border-gray-200 py-3 px-4 text-center">Tác vụ</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm divide-y divide-gray-100">
                {listProduct?.map((item, index) => (
                  <tr
                    key={item.id}
                    className="hover:bg-gray-50 transition-colors duration-150"
                  >
                    <td className="py-3 px-4 text-center text-gray-500">{index + 1}</td>
                    <td className="py-3 px-4 font-medium text-gray-800">{item.name}</td>
                    <td className="py-3 px-4 text-right font-semibold text-gray-700">
                      {item.price.toLocaleString("vi-VN")}₫
                    </td>
                    <td className="py-3 px-4 text-gray-600">{item.description}</td>
                    <td className="py-3 px-4 text-center">{item.stock}</td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex justify-center gap-3">
                        <button
                          onClick={() => navigate(`/admin/product/edit/${item.id}`)}
                          className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500 text-white hover:bg-green-600 transition"
                          title="Chỉnh sửa"
                        >
                          <FaRegEdit className="text-[16px]" />
                        </button>
                        <button
                          onClick={() => deleteProduc.mutate(item.id)}
                          className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500 text-white hover:bg-red-600 transition"
                          title="Xóa"
                        >
                          <MdDeleteForever className="text-[18px]" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {listProduct?.length === 0 && (
                  <tr>
                    <td colSpan={6} className="text-center py-6 text-gray-500 italic">
                      Không có sản phẩm nào.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
