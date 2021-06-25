import React from 'react'
import { useSelector } from 'react-redux'
import spinner from './Spinner.gif'

function Loader() {
    const loaderContainer={
        position:'fixed',
        top:0,
        left:0,
        width:'100%',
        height:'100%',
        background:'#F8F8F8AD'
    }
    const loader={
        left:'50%',
        top:'30%',
        position:'absolute',
        zIndex:1000
    }
    const loaderspinn = useSelector((state)=>state.loader.isloading)
    if(!loaderspinn) return null;
    console.log(loaderspinn)
    return (
        <div style={loaderContainer}>
            <div style={loader}>
                <img src={spinner} alt='loading...'/>
            </div>
        </div>
    )
}

export default Loader