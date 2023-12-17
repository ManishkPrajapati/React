import { useState } from "react"

export default function Hi(){

    let[msg, setmsg]=useState("")
    function handler(){
        setmsg ("hell how you doing in this HelloHound")
        console.log(msg)
    }


    return(
        <>
        <input type="button" value="Click to print" onClick={handler}/>
        <p>{msg}</p>
        </>
    )
}