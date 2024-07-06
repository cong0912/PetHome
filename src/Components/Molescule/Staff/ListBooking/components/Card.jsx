import React from "react";
import { Link } from "react-router-dom";
export default function Card({ res, index }) {
  return (
    <div className="px-10">
      <div
        className="mt-5 min-h-24 w-[70vw] border-spacing-4 rounded-2xl bg-mainColer shadow-md shadow-gray-400 text-nowrap"
        key={index}
      >
        <div className="p-5 flex justify-between items-end">
          <div className=" gap-5 flex items-center">
            <img
              src={res.image}
              alt="img service"
              width={80}
              className="w-50 rounded-sm"
            />
            <p className=" font-bold font-mainText3 text-2xl text-[#2D3748] ">
              {res.name}
            </p>
          </div>
          <div className=" flex justify-center items-end">
            <Link to={`/staff/list-booking/${res._id}`}>
              <p className=" text-textColer hover:text-cyan-600">
                {" "}
                Chi tiết đặt chỗ{" "}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
