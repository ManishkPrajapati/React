export default function IDcard(props){

    let {name,dob,email} = props.obj
    return(
        <div>
            <pre className="cam">
                <p>Name : {name}</p>
                <p>D.O.B : {dob}</p>
                <p>Email : {email}</p>
            </pre>
        </div>
    )
}