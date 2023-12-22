import React from "react";
import EdDetails from "./EdDetails";

export default class HidenShow extends React.Component{
    constructor(){
        super()
    this.state={flag:false}
    }


    render(){
        return(
            <div>
                    <p>Name : Manish</p>
                    <p>D.O.B : 29/07/2000</p>
                    <p>Email : matt353@gmail.com</p>
                    
                Education Details : <input type="checkbox" onClick={(event)=>{
                    this.setState({flag:event.target.checked})
                }}/>
                {this.state.flag && <EdDetails></EdDetails>}
            </div>
        )
    }
}