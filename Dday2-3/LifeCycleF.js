import {useEffect} from "react";

export default function LifecycleF(props){
    useEffect(()=>{
        console.log("called when mounting")
        return ()=>{console.log("called when unmounting")}
    },[])

    useEffect(()=>{
        console.log("call when updating", props.msg)
    },[props.msg])
}