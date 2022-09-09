import { Set_time, Reset_time } from "./Actiontype";
const initstate = {
    second:0,
    minute:0
}


export const Timereducer = (state = initstate, {type,payload})=>{
     switch(type){
        case Set_time:{
            return{
                ...state,
                second:payload.second,
                minute:payload.minute
            }
        }
        case Reset_time:{
            return{
                ...state,
                second:0,
                minute:0
            }
        }
        default:{
            return state
        }
     } 
}