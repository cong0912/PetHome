import React from "react";
import DefaultService from "./components/DefaultService";
import ComboCard from "./components/ComboCard";
import { Skeleton } from "Components/ui/skeleton";
import { getAllCombo } from "lib/api/services-api";
import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "Components/ui/select";

export default function Services() {
  const [comboCard, setComboCard] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getAllCombos();
  }, []);
  const getAllCombos = () => {
    getAllCombo()
      .then((data) => {
        setComboCard(data);
        console.log(data);
        setIsLoading(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <DefaultService />
      <div className="flex flex-col items-center mx-auto max-w-screen-lg m-10">
        <div className="mb-7 self-end">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center flex-wrap space-x-7">
            {comboCard?.map((key, index) => (
              <ComboCard key={index} combo={key} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center flex-wrap space-x-7">
            {comboCard?.map((key, index) => (
              <div key={index}>
                <Skeleton className="h-[125px] w-[300px] rounded-xl mb-5" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
