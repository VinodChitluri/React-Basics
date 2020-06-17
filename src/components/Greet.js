import React from 'react';

/* function Greet() {
     return <h1> Hello Vinnu Lucky </h1>
} */

//without properties
//export const Greet = () => <h1> Hello Vinnu Lucky </h1>;

//with properties

//export const Greet = (props) => <h1> Hello {props.name} </h1>;  //single line

export const Greet = (props) => {
return (
      <div>      (single line element no need to use)
        <h1> 
            Hello {props.name} your gender is {props.gender} 
        </h1>         
        {props.children}  (jsx use only one element, if you want to use multiple elements use div)
     </div>
  )
}



//{} is used to differenciate html & jsx code
//export default Greet;  ==> if we use this in app.js {} not required, exact function name is not requried