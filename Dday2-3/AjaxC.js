import React from "react";
import axios from "axios";

export default class AjaxC extends React.Component{
    constructor(){
        super()
        this.state ={arr:[],selectedobj:null}
    }

    componentDidMount(){
        let promise=axios.get("https://reqres.in/api/users?page=2")
        promise.then((res)=>{
            this.setState({arr:res.data.data})
        })
    }

    getoption=()=>{
        return this.state.arr.map((Element)=>{
            return <option key={Element.id} value={Element.id}>{Element.first_name}</option>
        })
    }

    handler=(e)=>{
        let selectedId = e.target.value
        let obj = this.state.arr.find((ele)=> ele.id == selectedId
        // {
        //     if(ele.id == selectedId)
        //     return true;
        // else
        // return false;
        // }
        )
        this.setState({selectedobj:obj})
    }


    render(){
        return(
            <div>
                <select onChange={this.handler}>
                    {this.getoption()}
                </select>
                <p>ID : {this.state.selectedobj?.id}</p>
                <p>Email : {this.state.selectedobj?.email}</p>
            </div>
        )
    }
}