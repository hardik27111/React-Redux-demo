import React from 'react'
import { useDispatch } from 'react-redux'
import {Button} from 'semantic-ui-react'
import {search} from '../useraction'
function Searchbth(props) {
    console.log(props.searchvalue)
    const dispatch = useDispatch()
    return (
        <Button primary onClick={() => dispatch(search(props.searchvalue))}>Search</Button>
    )
}

export default Searchbth
