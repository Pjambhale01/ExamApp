
export const reducer =(state={},action)=>{
     switch(action.type){
        
        case "ADD_TEST":
            return{
                ...state,TestDetails:action.payload
            }
        case "REFRESH":
            return{
                ...state,TestDetails:action.payload
            }
         default:
             return state
         
     }
}  