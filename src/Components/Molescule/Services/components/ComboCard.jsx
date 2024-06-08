import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "Components/ui/card";
import { Button } from "Components/ui/button";
export default function ComboCard({ combo }) {
  return (
    <div className="">
      <Card className="w-[300px]">
        <CardHeader>
          {<img className="w-full mb-4" src={combo.image}></img>}
          <CardTitle className=" text-center"> {combo.name}</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <p>
              GIÁ : <b>{combo.price} vnđ</b>
            </p>
          </div>
        </CardContent>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <p>
                TRẠNG THÁI: <b>{combo.status}</b>
              </p>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button className="bg-[#222a63]">Detail</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
