import React from "react";
import moment from "moment";

export default function InfoUser({ res }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-mainColer">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{res.name}</div>
        <p className="text-gray-700 text-base">Email: {res.email}</p>
        <p className="text-gray-700 text-base">Phone: {res.phone}</p>
        <p className="text-gray-700 text-base">
          Date of Birth: {moment(res.dob).format("MMMM Do, YYYY")}
        </p>
        <p className="text-gray-700 text-base">Sex: {res.sex}</p>
        <p className="text-gray-700 text-base">
          Is Disabled: {res.isDisabled ? "Yes" : "No"}
        </p>
        <p className="text-gray-700 text-base">
          Is Working: {res.isWorking ? "Yes" : "No"}
        </p>
      </div>
    </div>
  );
}
