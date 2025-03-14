"use client";
import { Car } from "@/app/types";
import { getPaymentUrl } from "@/app/utils/service";

interface Props {
  car: Car;
}

const RentButton = ({ car }: Props) => {
  const handleRent = () => {
    getPaymentUrl(car).then((data) => console.log(data));
  };
  return (
    <button
      onClick={handleRent}
      className="bg-basic-blue py-2 px-6 text-white rounded-md hover:brightness-90 transition min-w-[150px]"
    >
      Simdi Kirala
    </button>
  );
};
export default RentButton;
