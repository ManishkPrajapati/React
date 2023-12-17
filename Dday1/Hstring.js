import React from "react"

export default class HalfString extends React.Component{
    constructor(){
        super()
        this.state = {half:"Write Something"}
    }


    handler=(event)=>{
        let s = event.target.value 
        let hs = s.substring(0,s.length/2)+s.substring(s.length/2).toUpperCase()

        this.setState({half:hs})
    }

    render(){
        return(
            <div>
                Enter String : <input type="text" onBlur={this.handler}/>
                <p>String is {this.state.half}</p>
            </div>
        )
    }
}