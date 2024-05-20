import { createContext, useContext } from "react";
import { ICar } from "../pages/ICar";


export const CarContext = createContext<ICar | undefined>(undefined);

export function useCarContext(){
    const car = useContext(CarContext);

    if(car === undefined){
        throw new Error('useCarContext must be used with CarCotext')
    }

    return car;
}