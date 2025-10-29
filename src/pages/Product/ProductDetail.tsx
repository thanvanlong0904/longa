import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "../../assets/http.api";
import type { Product } from "../../types/Product.type";
import { useCart } from "../../store/Cart.store";

export default function ProductDetail() {
  const { add, setQty1, items } = useCart();
  const { id } = useParams();
  const {
    data: detailProduct,
    isLoading,
    isError,
  } = useQuery<Product>({
    queryKey: ["product", id],
    enabled: !!id,
    queryFn: () => http.get<Product>(`products/${id}`).then((res) => res.data),
  });

  const [idx, setIdx] = useState(0);

  const cartItem = detailProduct
    ? items.find((i) => i.id === detailProduct.id)
    : undefined;
  const qty = cartItem?.qty ?? 1;

  const images = [
    "/img/iphone-12-mo-khoa_800x450.jpg",
    "/img/slide1.jpg",
    "/img/slide2.jpg",
    "/img/banner2.jpg",
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 py-8 text-center">
        Loading...
      </div>
    );
  }

  if (isError || !detailProduct) {
    return (
      <div className="min-h-screen bg-slate-50 py-8 text-center text-red-500">
        Error loading product details.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 px-4">
        {/* Left: Gallery */}
        <section className="lg:col-span-5">
          <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl bg-slate-200">
            <img
              src={images[idx]}
              alt={detailProduct.name}
              className="w-full h-full object-cover"
            />
            {/* Badge giảm giá nếu có */}
            {detailProduct.oldPrice > detailProduct.price && (
              <span className="absolute left-3 top-3 bg-rose-600 text-white text-xs font-semibold px-2 py-1 rounded-md">
                -
                {Math.round(
                  ((detailProduct.oldPrice - detailProduct.price) /
                    detailProduct.oldPrice) *
                    100
                )}
                %
              </span>
            )}
          </div>

          {/* Thumbnails */}
          <div className="mt-3 grid grid-cols-4 sm:grid-cols-6 gap-2">
            {images.map((src, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`relative aspect-square overflow-hidden rounded-lg ring-2 transition ${
                  i === idx
                    ? "ring-blue-600"
                    : "ring-transparent hover:ring-slate-300"
                }`}
              >
                <img
                  src={src}
                  alt="thumb"
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </section>

        {/* Right: Info & CTAs */}
        <section className="lg:col-span-7 bg-white rounded-xl shadow-sm p-6">
          {/* Title */}
          <h1 className="text-2xl font-semibold text-slate-800 leading-snug">
            {detailProduct?.name}
          </h1>

          {/* Rating mock + Sold (optional) */}
          <div className="mt-2 flex items-center gap-3 text-sm text-slate-500">
            <div className="flex items-center gap-1">
              <span>⭐</span>
              <span>4.7</span>
            </div>
            <span className="h-1 w-1 rounded-full bg-slate-300 inline-block" />
            <span>Đã bán 40k+</span>
          </div>

          {/* Price row */}
          <div className="mt-4 flex items-end gap-3">
            <div className="text-3xl font-bold text-rose-600">
              {detailProduct?.price.toLocaleString("vi-VN")}đ
            </div>
            {detailProduct &&
              detailProduct.oldPrice &&
              detailProduct.oldPrice > detailProduct?.price && (
                <div className="text-slate-400 line-through text-lg">
                  {detailProduct.oldPrice.toLocaleString("vi-VN")}đ
                </div>
              )}
            {detailProduct &&
              detailProduct.oldPrice &&
              detailProduct.oldPrice > detailProduct?.price && (
                <span className="text-xs bg-rose-50 text-rose-700 px-2 py-1 rounded-md font-medium">
                  Giảm{" "}
                  {Math.round(
                    ((detailProduct.oldPrice - detailProduct.price) /
                      detailProduct.oldPrice) *
                      100
                  )}
                  %
                </span>
              )}
          </div>

          {/* Quantity */}
          <div className="mt-6">
            <span className="block text-sm text-slate-500 mb-2">Số lượng</span>
            <div className="inline-flex items-center rounded-lg border border-slate-200 overflow-hidden">
              <button
                onClick={() => {
                  setQty1(detailProduct.id, Math.max(1, qty - 1));
                }}
                className="w-10 h-10 grid place-items-center hover:bg-slate-50"
              >
                −
              </button>
              <input
                value={qty}
                onChange={(e) => {
                  const v = Number(e.target.value);
                  const next = Number.isNaN(v) ? 1 : Math.max(1, v);
                  setQty1(detailProduct.id, next);
                }}
                className="w-12 h-10 text-center outline-none"
              />
              <button
                onClick={() => {
                  setQty1(detailProduct.id, qty + 1);
                }}
                className="w-10 h-10 grid place-items-center hover:bg-slate-50"
              >
                +
              </button>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="inline-flex items-center justify-center px-6 h-12 rounded-lg bg-rose-600 text-white font-medium shadow hover:bg-rose-700">
              Mua ngay
            </button>
            <button
              onClick={() => {
                add(detailProduct, 1);
              }}
              className="inline-flex items-center justify-center px-6 h-12 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700"
            >
              Thêm vào giỏ hàng
            </button>
            <button className="inline-flex items-center justify-center px-6 h-12 rounded-lg border border-slate-300 text-slate-700 font-medium hover:bg-slate-50">
              Thêm vào yêu thích
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
