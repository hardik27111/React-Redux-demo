import React, { useCallback, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Container, Input} from 'semantic-ui-react'
import { search } from '../useraction'
import Searchbth from './Searchbth'


const Search = ()=>{

    // const searchRef = useRef()
    const [searchkeyword,setSearchkeyword]=useState()
    const searchEvent = (e)=>{
        dispatch(search(e.target.value))
        setSearchkeyword(e.target.value)
        // setSearchkeyword(searchRef.current.value)
    }
    const dispatch = useDispatch()
    return (
        <>
        <Container>
        <Input placeholder='Search...' onChange={searchEvent} icon={{margin:'10px'}} value={searchkeyword} />
        <Searchbth searchvalue={searchkeyword} />
        </Container>
        </>
    )
}
    // const [search,setSearch]=useState('')
    


export default Search
// export default React.memo(Search)

