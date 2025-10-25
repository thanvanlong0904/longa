export default function Add() {
  return (
    <>
      <div className="bg-gray-100 shadow-sm h-screen">
        <div className=" flex justify-between px-4 py-5">
          <h1 className=" font-semibold text-[16px] uppercase">
            Thêm Sản Phẩm
          </h1>
          <ul className=" flex justify-end gap-2 text-[14px] text-gray-600">
            <li>Trang chủ</li>
            <li>/</li>
            <li>Thêm Sản Phẩm</li>
          </ul>
        </div>
        <div className=" grid grid-cols-12 gap-10 px-4 ">
          <div className=" col-span-6">
            <span className=" mb-2 block">Tên sản phẩm</span>
            <input
              className=" border border-gray-400 w-full bg-white h-5 px-2 py-4 outline-0"
              type="text"
            />
            <p className=" text-red-700 h-[12px] mt-1 text-[14px]">
              Khong duoc de trong ten san pham
            </p>
          </div>
          <div className="col-span-6">
            <span className=" mb-2 block">Giá sản phẩm</span>
            <input
              className=" border border-gray-400 w-full bg-white h-5 px-2 py-4 outline-0"
              type="text"
            />
            <p className=" text-red-700 h-[12px] mt-1 text-[14px]">
              Khong duoc de trong ten san pham
            </p>
          </div>
          <div className=" col-span-6">
            <span className=" mb-2 block">Số lượng phẩm</span>
            <input
              className=" border border-gray-400 w-full bg-white h-5 px-2 py-4 outline-0"
              type="text"
            />
            <p className=" text-red-700 h-[12px] mt-1 text-[14px]">
              Khong duoc de trong ten san pham
            </p>
          </div>
          <div className="col-span-6">
            <span className=" mb-2 block">Mô tả</span>
            <input
              className=" border border-gray-400 w-full bg-white h-5 px-2 py-4 outline-0"
              type="text"
            />
            <p className=" text-red-700 h-[12px] mt-1 text-[14px]">
              Khong duoc de trong ten san pham
            </p>
          </div>
          <div className="col-span-12 flex justify-center">
            <button className="  bg-blue-600 text-center py-2 px-8 text-white rounded-[5px] cursor-pointer hover:bg-blue-700">
              Thêm sản phẩm
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
