import React from 'react'

//with jsx
/* const Hello = () => {
    return (
        <div className = 'dummyclass' >   // check below comment
           <h1>
               hello vinnu
           </h1>
        </div>
    )
} */

//without jsx & without attributes

/* const Hello = () => {
    return React.createElement('div',
                                null,  //attribute like id,class,etc
                               React.createElement('h1',
                                                   null,   // attribute like id ,class,etc
                                                   'hello lucky'
                               )
        
    )
} */

//without jsx & with attributes
const Hello = () => {
    return React.createElement('div',
                                {id : 'hello' , className:'dummyclass'},  //attribute like id,class,etc
                               React.createElement('h1',
                                                   null,   // attribute like id ,class,etc
                                                   'hello lucky'
                               )
        
    )
}

// in html we use class attribute but in react we need to use className because class is already a keyword
//for function component
//if you use class you will get below error
//index.js:1 Warning: Invalid DOM property `class`. Did you mean `className`?
/* in div (created by Hello)
in Hello (at App.js:13)
in div (at App.js:10)
in App (at src/index.js:9)
in StrictMode (at src/index.js:8)
 */
export default Hello;


//jsx differences
/*
html       jsx/react
Class      className
for        htmlFor
onclick    onClick
tabindex   tabIndex
*/