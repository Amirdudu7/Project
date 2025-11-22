import { useContext } from "react";
import { StoreContext } from "../stores/store";


export function useStore(){    //this hook access to our mobx store 
//                               thats inside oure store context
    return useContext(StoreContext) //out react app access to this store context
}