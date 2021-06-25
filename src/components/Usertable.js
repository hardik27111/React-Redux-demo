import React, { useEffect,useState,useCallback} from 'react'
import { Container, Table } from 'semantic-ui-react'
import { useDispatch,useSelector } from 'react-redux'
import UsertableRow from './Usertablerow'
import { search,userdata,ascending ,descending} from '../useraction'
import { Redirect} from 'react-router-dom'
import Search from './Search'
import Searchbth from './Searchbth'
// import ID from './ID'
// import Name from './Name'
// import Email from './Email'

// export const Sortingcontext = React.createContext()
// // const initialState = 0;
// const reducer = (state,action)=>{
//   switch (action.type) {
//     case 'ASCENDING':
//       return state.sort((a,b)=>(a[action.key]>b[action.key]?1:-1))
//     case 'DESCENDING':
//       return state.sort((a,b)=>(a[action.key]<b[action.key]?1:-1))
//     default:
//       break;
//   }
// }

function Usertable() {
  // let user = []
  // const searchRef = useRef()
  let intialload = []
  // const [staticuser,setStaticuserdata]=useState()
  const Dispatch = useDispatch()
  const users = useSelector((state)=>state.users.userinfo || [])
  const state = useSelector((state)=>state)
  useEffect(()=>{
    Dispatch(userdata())
  }, [])
  useEffect(()=>{
    
  }, [users])

  if(users){
    intialload=users
  }
// const searchEvent = (e) =>{
// Dispatch(search(e.target.value))
// }
  // const [sroting,dispatch] = useReducer(reducer,users)

  // const srotEnvent = (order,key)=>{
  //   if(order==='ascending'){
  //     fetceduser.sort((a,b)=>(a[key]>b[key]?1:-1))
  //   }else{
  //     fetceduser.sort((a,b)=>(a[key]<b[key]?1:-1))
  //   }
  // }
if(!state.signIn._id)return<Redirect to='/signin'/>
    return (
        <>
        <Container>

        {/* <h1>{this.props.user}</h1> */}
        {/* <Search ref={searchRef} /> */}
        {/* <Input placeholder='Search...' onChange={searchEvent} /> */}
        
        <Search  user={intialload}/>
        {/* {console.log(searchRef.current.value)} */}
        {/* <Searchbth event={searchEvent}/> */}
        <Table celled>
          <Table.Header>
            <Table.Row>
            {/* <Sortingcontext.Provider value={{ srotingon:sroting , srotingDispatch:dispatch }}> */}
            {/* <Sortingcontext.Provider > */}

              {/* ID */}
              {/* <ID/> */}
              <Table.HeaderCell>
            Id

            <i className="sort up icon"  onClick={()=>Dispatch( ascending('id'))}>
            </i>
            <i className="sort down icon" onClick={()=>Dispatch(descending('id'))} ></i>
        </Table.HeaderCell>
              {/* USER NAME */}
              {/* <Name/> */}
              <Table.HeaderCell>
            Name

            <i className="sort up icon"  onClick={()=>Dispatch( ascending('username'))}>
            </i>
            <i className="sort down icon" onClick={()=>Dispatch( descending('username'))} ></i>
        </Table.HeaderCell>

              {/* EMAIL */}
              {/* <Email/> */}
              <Table.HeaderCell>
            Email

            <i className="sort up icon"  onClick={()=>Dispatch( ascending('email'))}>
            </i>
            <i className="sort down icon" onClick={()=>Dispatch( descending('email'))} ></i>
        </Table.HeaderCell>
            {/* </Sortingcontext.Provider> */}
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {users.map((user) => {
              return <UsertableRow key={user.id} id={user.id} username={user.username} email={user.email} />
            }
            )}

          </Table.Body>
        </Table>
        </Container>
        </>
    )

        }
export default Usertable

