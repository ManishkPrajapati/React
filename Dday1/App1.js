import { useState } from "react"
import Hello from "./Hello"
import Hi from "./Hi"
import Month from "./Month"
import HalfString from "./Hstring"
import RevString from "./RevString"
import HidenShow from "./HidenShow"
import ShowList from "./ShowList"




export default function App1(){

    let [col,setcol] = useState("red")
    function handler(event){
        setcol(event.target.value)
    }

    

    return(
        <>
        Enter Color : <input type="color" onChange={handler}/>
        <Hello name={"Manish"} col={col}></Hello>
        <Hi></Hi>
        <Month></Month>
        <HalfString></HalfString>
        <RevString></RevString>
        <HidenShow></HidenShow>
        <ShowList></ShowList>
        </>
    )
}