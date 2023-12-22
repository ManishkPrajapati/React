import React from "react"
import "./ex.css"

export default class Hello extends React.Component{
    render(){
        return(
            <div className="first">
                <div className="second">
                    <p style={{backgroundColor:this.props.col}}>
                        <b><big>Hello {this.props.name}</big></b>
                    </p>
                </div>
                {/* <div class="second">
                    this is second
                </div> */}
            </div>
        )
    }
}