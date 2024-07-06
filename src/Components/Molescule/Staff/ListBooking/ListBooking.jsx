import React from "react";
import { DataTableDemo } from "../components/data";
import Card from "./components/Card";
import { useState, useEffect } from "react";
import { getAllCombo } from "lib/api/services-api";
import Loading from "Components/ui/loading";
export default function ListBooking() {
  const [loading, setLoading] = useState(true);
  const [card, setCard] = useState();
  useEffect(() => {
    const getAllCard = async () => {
      try {
        const data = await getAllCombo();
        setCard(data);
        console.log(data);
      } catch (error) {
        console.log("err", error);
      } finally {
        setLoading(false);
      }
    };
    getAllCard();
  }, []);
  return (
    <div>
      <h1 className="font-bold font-mainText3 text-xl pb-4">
        Danh sách đặt chổ
      </h1>
      {loading ? (
        <Loading />
      ) : card && card.length >= 1 ? (
        <>
          {card.map((res, index) => (
            <Card res={res} index={index} />
          ))}
        </>
      ) : (
        <p>không có đặt chỗ</p>
      )}
    </div>
  );
}
