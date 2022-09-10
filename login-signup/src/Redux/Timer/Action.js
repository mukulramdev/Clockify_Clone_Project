import { Set_time, Reset_time } from "./Actiontype";


export const settime = (data)=>({
    type:Set_time,
    payload:data
})