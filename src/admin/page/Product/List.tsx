import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import http from "../../../assets/http.api";
import type { Product } from "../../../types/Product.type";
export default function List() {
  const { data: listProduct } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: () => http.get<Product[]>("products").then((res) => res.data),
  });
const qc = useQueryClient()
  const deleteProduc = useMutation({
    mutationFn: (id: number)=> http.delete(`products/${id}`).then(res=>res.data),
    onSuccess: ()=>{
      qc.invalidateQueries({queryKey:["products"]})
    }
  })

  console.log(listProduct);
  return (
    <>
      <div className="bg-gray-200 shadow-sm h-screen">
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
              {listProduct?.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 transition">
                  <td className="border border-gray-300 text-center py-2 px-2 w-[60px]">
                    {index + 1}
                  </td>
                  <td className="border border-gray-300 py-2 px-4 font-light text-sm">
                    {item.name}
                  </td>
                  <td className="border border-gray-300 py-2 px-4 font-normal text-sm text-right">
                    {item.price.toLocaleString("vi-VN")}đ
                  </td>
                  <td className="border border-gray-300 py-2 px-4 text-sm">
                    {item.description}
                  </td>
                  <td className="border border-gray-300 text-center py-2 text-sm">
                    {item.stock}
                  </td>
                  <td className="border border-gray-300 text-center py-2">
                    <div className="flex justify-center items-center gap-1">
                      <FaRegEdit  className="text-[20px] text-white bg-green-600 p-1 cursor-pointer rounded" />
                      <MdDeleteForever onClick={()=>deleteProduc.mutate(item.id)} className="text-[20px] text-white bg-red-600 p-1 cursor-pointer rounded" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
