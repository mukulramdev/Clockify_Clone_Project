import { Set_data,Set_Name } from "./Actiontype"

const initstate = {
     name:"NO Name",
     email: "",
     password: "",
     Timer: [],
}

export const UserdataReducer = (state = initstate, {type,payload})=>{
    switch(type){
     case Set_data:{
          return{
               ...state,
               email:payload.email,
               Timer:payload.Timer,
               name:payload.name,
               id:payload.id
          }
     }
     case Set_Name:{
          return{
               ...state,
               name:payload
          }
     }
     default:{
          return state
     }
    }
}