import React, { useEffect, useState } from "react";
import { Button } from "Components/ui/button";
import { useParams } from "react-router-dom";
import { DetailService } from "lib/api/services-api";
import { Skeleton } from "Components/ui/skeleton";

export default function ServicesDetail() {
  const [card, setCard] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchDetailService = async () => {
      try {
        const data = await DetailService(id);
        if (Array.isArray(data) && data.length > 0) {
          setCard(data[0]);
        } else {
          console.error("Data format is incorrect", data);
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDetailService();
  }, [id]);

  return (
    <div>
      {!isLoading ? (
        <div className="mx-[20%]">
          <div className="flex justify-center mb-5">
            <div className="p-5 ">
              <h1 className="text-3xl font-bold text-blue-900 mb-7">
                {card.name}
              </h1>
              <p className="font-bold mb-3">{card.price} vnđ</p>
              <p className="mb-3">
                <b>Availability: </b>
                {card.status}
              </p>
              <Button className="text-white bg-blue-900 rounded-2xl px-10 mb-3 ">
                THÊM VÀO GIỎ HÀNG
              </Button>
            </div>

            <img
              src={card.image}
              alt={card.name}
              className="w-[20vw] rounded-md shadow-inner mx-5"
            />
          </div>
          <div className="min-h-10 p-5 ring-1  ring-gray-500 rounded-sm mb-5">
            <p className="font-bold text-blue-900 text-2xl mb-5">Mô tả Combo</p>
            {card.des}
          </div>
        </div>
      ) : (
        <div className="flex justify-center  flex-row-reverse gap-10 ">
          <Skeleton className="h-[20vw] w-[20vw] rounded-xl mb-5" />
          <div className="space-y-6 ">
            <Skeleton className="h-10 w-[20vw] mb-10" />
            <Skeleton className="h-7 w-[10vw] " />
            <Skeleton className="h-5 w-[15vw] " />
            <Skeleton className="h-4 w-[8vw] " />
          </div>
        </div>
      )}
    </div>
  );
}
