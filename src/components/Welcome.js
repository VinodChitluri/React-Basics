import React, {Component} from 'react';

class Welcome extends Component {
    render(){
        return (<h1> welcome to my world 
              {this.props.name }  your gender is {this.props.gender}
        </h1> )
    }
}

/* class Welcome2 extends Component {
    render(){
        return <h1> welcome2 to my world</h1> 
    }
} */


export default Welcome;
//only one function can export
