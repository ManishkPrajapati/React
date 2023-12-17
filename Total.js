export default function Total({num}){
    
    let add=0
    for(let i=0; i<num.length; i++){
        add += num[i]
    }
    
    return(
        <p>The Addition of array : {add}</p>
    )
}