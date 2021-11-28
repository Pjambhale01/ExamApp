
export const reducer =(state={},action)=>{
     switch(action.type){
        case "ADD_TEST":
            return{
                ...state,TestDetails:action.payload
            }          
        case "USER_ANS":
  
            return{
                ...state,userAns:[...state.userAns,action.payload]
            }
        case  "RADIO_ANS":
            
            return{
                ...state,radioAns:[...state.radioAns,action.payload]
            }
        case "CHECKBOX_ANS":
            return{
                ...state,checkBoxAns:[...state.checkBoxAns,action.payload]
            }
            
        case "CORRECT_RADIO_ANS":{
            return{
                ...state,correctRadioAns:[...state.correctRadioAns,action.payload]
            } 
        }  
        case "WRONG_ANS":{
            return{
                ...state,wrongAns:[...state.wrongAns,action.payload]
            }
        } 
        case "REFRESH_STATE":{
            return {
                ...state,radioAns:action.payload,correctRadioAns:action.payload,checkBoxAns:action.payload
            }
        }
        // case "REFRESH_STATE":{
        //     return {
        //         ...state,correctRadioAns:action.payload
        //     }
        // }  
        // case "REFRESH_STATE":{
        //     return {
        //         ...state,checkBoxAns:action.payload
        //     }
        // }    
        // case "RADIO_ANS":  
        //     return{
        //         ...state,RadioAns:[...state,RadioAns,action.payload]
        //     }      
        default:
             return state
         
     }
}  