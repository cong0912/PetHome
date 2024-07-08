import React from "react";

export default function InfoPet({ res }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-mainColer">
      <img
        className="w-full h-48 object-cover"
        src={res.image.url}
        alt={res.name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{res.name}</div>
        <p className="text-gray-700 text-base">Loài: {res.species}</p>
        <p className="text-gray-700 text-base">Giới tính: {res.sex}</p>
        <p className="text-gray-700 text-base">Giống: {res.breed}</p>
        <p className="text-gray-700 text-base">Tuổi: {res.age} years</p>
        <p className="text-gray-700 text-base">Cân nặng: {res.weight} kg</p>
      </div>
    </div>
  );
}
