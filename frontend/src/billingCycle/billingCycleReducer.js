const INITIAL_STATE = {list:[]}

export default (state = INITIAL_STATE, action) =>{
    //console.log(action)
    switch (action.type){
        
        case 'BILLING_CYCLES_FETCHED':
            return {...state, list: action.payload.data}
        default:
            return state    
    }
}
