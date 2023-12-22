import React from "react"

export default class RevString extends React.Component{

    constructor(){
        super()
        this.state = {str:"", rev:"", org:""}
    }

    radiohandler=(event)=>{
        let s = this.state.str

        switch(event.target.id){
            case "uc": {
                let s1 = s.toUpperCase()
                this.setState({str:s1})
                break;
            }
            case "lc":{
                let s1 = s.toLowerCase()
                this.setState({str:s1})
                break;
            }
            case "tc":{
                let s1 = s.charAt(0).toUpperCase()+s.substring(1).toLowerCase()
                this.setState({str:s1})
                break;
            }
            default: break;
        }
    }

    revhandler=(event)=>{
        let isCheck = event.target.checked
        if(isCheck){
            let s = this.state.str
            let rev =""
            for(let i=s.length-1; i>=0;i--){
                rev+=s.charAt(i)
            }
            this.setState({str:rev,rev:rev})
        }else{
            this.setState({str:this.state.org})
        }
    }

    


    render(){
        return(
            <div>
                Enter String to Reverse : <input type="text"  onBlur={(event)=>{
                // console.log(event.target.value)
                 this.setState({org:event.target.value,str:event.target.value})
                     }}/>
                <br></br>
                Reverse String : <input type="checkbox" onClick={this.revhandler}/>

                <br></br>
                UC: <input type="radio" id="uc" name="c" onClick={this.radiohandler}/>
                <br></br>
                LC: <input type="radio" id="lc" name="c" onClick={this.radiohandler}/>
                <br></br>
                TC: <input type="radio" id="tc" name="c" onClick={this.radiohandler}/>
                <br></br>
                <p> Change String is {this.state.str}</p>
            </div>
        )
    }

    

}