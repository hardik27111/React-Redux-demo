import React from 'react'
import {  Table } from 'semantic-ui-react'

function Usertablerow(props) {
    const {id,username,email}=props
    return (
        <>
        <Table.Row>
        <Table.Cell>{id}</Table.Cell>
        <Table.Cell>{username}</Table.Cell>
        <Table.Cell>{email}</Table.Cell>
      </Table.Row>
        </>
    )
}

export default Usertablerow

