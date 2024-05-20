import { CarForm } from "./CarForm";
import { useEffect } from "react";

interface CarManagementProps {
  setUpdateFlag: (updateFlag:boolean) => void;
}

export const CarManagement: React.FC<CarManagementProps> = ({ setUpdateFlag }) => {
  useEffect(() => {}, []);

  return (
    <div className="text-white flex gap-3 w-[40%] mx-auto  mt-[10%] items-center py-2">
      <CarForm setUpdateFlag={setUpdateFlag} />
      <CarForm setUpdateFlag={setUpdateFlag} />
    </div>
  );
};
