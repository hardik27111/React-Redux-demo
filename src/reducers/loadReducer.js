const intial = {isloading:false}
const loaderReducer = (state = intial, action)=>{
    switch (action.type) {
        case "SHOW_LOADER":
            return{
                ...state,
                isloading:true
            }
        case "HIDE_LOADER":
            return{
                ...state,
                isloading:false
            }
        default:
            return state
    }
}

export default loaderReducer