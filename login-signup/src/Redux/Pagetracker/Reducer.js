import { Togglepage } from "./Actiontyps"
const initstate = {
    Pagestatus:true
}

export const PageReducer = (state = initstate, action )=>{
        switch(action.type){
            case Togglepage:{
                return{
                    ...state,
                    Pagestatus:(action.payload)
                }
            }
            default:{
                return state;
            }
        }
} 