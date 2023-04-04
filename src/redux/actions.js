

export const actionTypes={
    GET:"getEmployees",
    ADD:"addEmployee"
};

export const getEmployees=(data)=>{
    return{
        type:actionTypes.GET,
        payload:data
    }   
};

export const addEmployee=(data)=>{
    return{
        type:actionTypes.ADD,
        payload:data
    } 
};
const initialState={
    isLoading:true,
    employees:[]
}

export const reducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.GET:
            return{
                ...state,
                isLoading:false,
                employees:action.payload
            }
            case actionTypes.ADD:
            return{
                ...state,
                employees:[...state.employees,{
                    name:action.payload
                }]
            }
            default:
                return state;
    }
}