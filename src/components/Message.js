import React, {Component} from 'react';

// use of state is we can modify the 

class Message extends Component {
    constructor (){
        super()
        this.state = {
            message : 'welcome visitor',
        }
    }

    changeMessage (){
        return this.setState({
            message : 'Thank you for subscribing'
        })
    }
    render(){
        return (
          <div>
          <h1> 
              {this.state.message}  
          </h1>
          <button onClick={()=>this.changeMessage()}>Subscibe</button>
          </div>
         )
    }
}


export default Message;

