import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
export default function DetailOrder() {
  return (
    <div>
      <h1 className="font-bold font-mainText3 text-xl pb-4">
        Chi tiết đặt chổ
      </h1>
      <Link to={"/staff/list-booking"}>
        <div className="hover:text-textColer">
          <ArrowLeft />
        </div>
      </Link>
    </div>
  );
}
