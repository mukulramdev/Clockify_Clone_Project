import { Set_time } from "./Actiontype";
const initstate = {
    Timer:[]
}


export const Timereducer = (state = initstate, {type,payload})=>{
     switch(type){
        case Set_time:{
            return{
                ...state,
                second:payload
            }
        }
        default:{
            return state
        }
     } 
}