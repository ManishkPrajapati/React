import React from "react"

export default class LifeCycleC extends React.Component{
    componentDidMount(){
        console.log("Called when component mounted")
    }
    componentDidUpdate(){
        console.log("Called when component updated")
    }
    componentWillUnmount(){
        console.log("Called when component unmounted")
    }

    render(){
        return(
            <>
            <p>
                lifecycle component ...
                {this.props.msg}
            </p>
            </>
        )
    }
}