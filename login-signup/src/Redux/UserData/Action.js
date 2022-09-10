import { Set_data,Set_Name } from "./Actiontype";
export const setdata = (data)=>({
    type:Set_data,
    payload:data
})
export const setname = (data)=>({
     type:Set_Name,
     payload:data
})