import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import http from "../../../assets/http.api";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

const schema = Yup.object({
  name: Yup.string().required("Tên sản phẩm không được bỏ trống"),
  price: Yup.number()
    .transform((value, originalValue) =>
      String(originalValue).trim() === "" ? undefined : value
    )
    .typeError("Nhập giá phải là số")
    .required("Giá không được bỏ trống"),
  stock: Yup.number()
    .transform((value, originalValue) =>
      String(originalValue).trim() === "" ? undefined : value
    )
    .typeError("Số lượng phải là số")
    .required("Số lượng không được bỏ trống"),
  description: Yup.string().required("Mô tả không được bỏ trống"),
}).required();

type FormSchema = Yup.InferType<typeof schema>;

export default function Add() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<Omit<FormSchema, "id">>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const qc = useQueryClient();

  const addProduct = useMutation({
    mutationFn: (body: Omit<FormSchema, "id">) => http.post("products", body),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["products"] });
      toast.success("Thêm sản phẩm thành công! 🎉");
      reset();
    },
  });

  const onSubmit = (data: Omit<FormSchema, "id">) => {
    addProduct.mutate(data);
  };

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 2500,
          style: {
            background: "#1e293b",
            color: "#fff",
            fontSize: "14px",
            padding: "12px 20px",
            borderRadius: "8px",
            minWidth: "280px",
          },
          success: {
            style: { background: "#16a34a" },
          },
          error: {
            style: { background: "#dc2626" },
          },
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-10 px-6">
        <div className="max-w-8xl mx-auto bg-white shadow-lg rounded-xl p-8">
          {/* Header */}
          <div className="flex justify-between items-center border-b pb-4 mb-8">
            <h1 className="text-2xl font-semibold text-gray-700 uppercase tracking-wide">
              Thêm sản phẩm
            </h1>
            <ul className="flex text-sm text-gray-500 gap-2">
              <li>Trang chủ</li>
              <li>/</li>
              <li className="text-blue-600 font-medium">Thêm sản phẩm</li>
            </ul>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="mb-2 block font-medium text-gray-700">
                Tên sản phẩm
              </label>
              <input
                {...register("name")}
                className={`border rounded-lg w-full h-12 px-3 outline-none  transition ${
                  errors.name ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"
                }`}
                type="text"
                placeholder="Nhập tên sản phẩm..."
              />
              <p className="text-red-600 text-sm h-5 mt-1">
                {errors.name?.message || "\u00A0"}
              </p>
            </div>

            {/* Price */}
            <div>
              <label className="mb-2 block font-medium text-gray-700">
                Giá sản phẩm
              </label>
              <input
                {...register("price")}
                className={`border rounded-lg w-full h-12 px-3 outline-none  transition ${
                  errors.price ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"
                }`}
                type="text"
                placeholder="Nhập giá sản phẩm..."
              />
              <p className="text-red-600 text-sm h-5 mt-1">
                {errors.price?.message || "\u00A0"}
              </p>
            </div>

            {/* Stock */}
            <div>
              <label className="mb-2 block font-medium text-gray-700">
                Số lượng sản phẩm
              </label>
              <input
                {...register("stock")}
                className={`border rounded-lg w-full h-12 px-3 outline-none  ${
                  errors.stock ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"
                }`}
                type="text"
                placeholder="Nhập số lượng..."
              />
              <p className="text-red-600 text-sm h-5 mt-1">
                {errors.stock?.message || "\u00A0"}
              </p>
            </div>

            {/* Description */}
            <div>
              <label className="mb-2 block font-medium text-gray-700">
                Mô tả
              </label>
              <input
                {...register("description")}
                className={`border rounded-lg w-full h-12 px-3 outline-none   ${
                  errors.description ? "border-red-500" : "border-gray-300 focus:ring-2 focus:ring-blue-500"
                }`}
                type="text"
                placeholder="Nhập mô tả sản phẩm..."
              />
              <p className="text-red-600 text-sm h-5 mt-1">
                {errors.description?.message || "\u00A0"}
              </p>
            </div>

            {/* Submit */}
            <div className="col-span-1 md:col-span-2 flex justify-center mt-4">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-lg text-[15px] font-medium transition-all shadow-md hover:shadow-lg cursor-pointer"
                type="submit"
              >
                Thêm sản phẩm
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
