import React, { useContext } from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import { Sortingcontext } from './Usertable'
function Name() {
    const srotContext = useContext(Sortingcontext)
    return (
        <Table.HeaderCell>
                User Name
                {/* <i className="sort up icon" onClick={() => this.usernameSortHandler('ascending')}></i> */}
                <i className="sort up icon" onClick={()=>srotContext.srotingDispatch({type:'ASCENDING',key:'username'})}>
                </i>
                <i className="sort down icon" onClick={()=>srotContext.srotingDispatch({type:'DESCENDING',key:'username'})}> </i>
                
                {/* <i className="sort down icon" onClick={() => this.srotEnvent('descending ','username')}>
                </i> */} 
              </Table.HeaderCell>
    )
}

export default Name
