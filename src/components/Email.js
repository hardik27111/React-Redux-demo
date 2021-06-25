import React, { useContext } from 'react'

import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import { Sortingcontext } from './Usertable'
function Email() {
    const srotContext = useContext(Sortingcontext)

    return (
        <Table.HeaderCell>
                Email
                <i className="sort up icon" onClick={()=>srotContext.srotingDispatch({type:'ASCENDING',key:'email'})}>
                </i>
                <i className="sort down icon" onClick={()=>srotContext.srotingDispatch({type:'DESCENDING',key:'email'})}>
                </i>
              </Table.HeaderCell>
    )
}

export default Email
