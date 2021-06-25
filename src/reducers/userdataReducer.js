
const intialState = {
    userinfo:[],
    clonedata:[]
}

const userdataReducer = (state=[],action)=>{
    switch (action.type) {
        case 'USER_DATA':
            // console.log(action.res.data)
            return {
                userinfo:action.usersdata,
                clonedata:action.usersdata
            }  
        case 'ASCENDING':
            return{
                ...state,
                userinfo:action.user.sort((a,b)=>(a[action.key]>b[action.key]?1:-1))
            }
        case 'DESCENDING':
            return{
                ...state,
                userinfo:action.user.sort((a,b)=>(a[action.key]<b[action.key]?1:-1))
            }
        case 'SEARCH':
            // const user = action.user
            return{
                ...state,
                userinfo:state.clonedata.filter((el) => {
                    return el.username.toLowerCase().includes(action.key)
                  })
            }
        default:
            return state;
    }
}

export default userdataReducer