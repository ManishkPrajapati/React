export default function Maths(props){
    let n1=props.num1
    let n2=props.num2
    let op = props.op
    let res
    switch(op){
        case "+": res = n1+n2; break;
        case "*": res = n1*n2; break;
        case "/": res = n1/n2; break;
        case "-": res = n1-n2; break;
        default : res = NaN; break;
    }

    return(
        <p>{n1}{op}{n2} = {res}</p>    
    )
}