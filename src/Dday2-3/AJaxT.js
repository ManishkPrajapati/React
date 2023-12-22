import axios from "axios";
import { useState } from "react";

export default function AJaxT(){

    let[arr,setarr] = useState([])

    function rows(){
        return arr.map((eme)=>{
            return(
                <tr>
                    <td>{eme.first_name.concat(" ", eme.last_name)}</td>
                    <td>{eme.email}</td>
                    <td><img src={eme.avatar} alt="not found"/></td>
                </tr>
            )
        })
    }





    function handler(){
        let promise = axios.get("https://reqres.in/api/users?page=2")
        promise.then((res)=>{
            setarr(res.data.data)
        })
    }


    return(
        <>
        <input type="button" value="Get Data" onClick={handler}/>
        <table border="2">
            <thead>
                <tr><th>Name</th><th>Email</th><th>Image</th></tr>
            </thead>
            <tbody>
                {rows()}
            </tbody>
        </table>
        </>
    )
}