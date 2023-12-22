import { useState } from "react"

export default function ShowList(){

    let[tableflag,settable] = useState(false)
    let[olflag,setol] = useState(false)
    let[ulflag,setul] = useState(false)
    let arr=["red","green","blue","yellow","pink","purple","white","black"]
    let[arr2,setarr2] = useState([])

    function handler(pick){
        switch(pick){
            case "table":{
                settable(true)
                let arr2 = arr.map((element,index)=>{
                    return <tr><td>{index}</td><td>{element}</td></tr>
                })
                setarr2(arr2)
                setol(false)
                setul(false)
                break;
            }
            case "UL":{
                setul(true)
                let arr2 = arr.map((element)=>{
                    return <ul>{element}</ul>
                })
                setarr2(arr2)
                settable(false)
                setol(false)
                break;
            }
            case "OL":{
                setol(true)
                let arr2 = arr.map((element)=>{
                    return <ol>{element}</ol>
                })
                setarr2(arr2)
                settable(false)
                setul(false)
                break;
            }
            default: break;
        }

    }




    return(
        <>
        Table : <input type="radio" name="format" onClick={()=>{handler("table")}}/>
        UL : <input type="radio" name="format" onClick={()=>{handler("UL")}}/>
        OL : <input type="radio" name="format" onClick={()=>{handler("OL")}}/>
        {tableflag &&<table border="2">{arr2}</table>}
        {olflag && <ol>{arr2}</ol>}
        {ulflag && <ul>{arr2}</ul>}
        </>
    )
}