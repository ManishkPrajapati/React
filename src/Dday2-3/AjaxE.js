import { useState } from "react";
import axios from "axios";

export default function AjaxE(){
    let [fname,setfname] = useState("")
    let [lname,setlname] = useState("")
    let [img,setimg] = useState("")


    function handler(){
        let promise = axios.get("https://reqres.in/api/users/2")
        promise.then((Response)=>{
            setfname(Response.data.data.first_name)
            setlname(Response.data.data.last_name)
            setimg(Response.data.data.avatar)
        },(reject)=>{
            console.log("something wrong",reject)
        })
    }



    return(
        <>
        <input type="button" value="Get the value"
        onClick={handler}/>
        <p>{fname} {lname}</p>
        <img src={img} alt="not found"/>
        </>
    )
}