import Welcome,{Greeting} from "./welcom";
import Maths from "./Math";
import Total from "./Total";
import IDcard from "./IDcard";


function App() {

  let arr = [10,20,30,40,50,74,93,84,363,939]
  let obj = {name:"Manish", dob: "29/05/2001", email:"matt353730@gmail.com"}
  return (
    <>
    <Welcome></Welcome>
    <Greeting></Greeting>
    <Maths num1={10} num2={53} op={"+"}></Maths>
    <Maths num1={51} num2={10} op={"/"}></Maths>
    <Maths num1={12} num2={23} op={"*"}></Maths>
    <Maths num1={53} num2={10} op={"-"}></Maths>
    <Total num={arr}></Total> 
    <IDcard obj={obj}></IDcard>
    </>
  );
}

export default App;
