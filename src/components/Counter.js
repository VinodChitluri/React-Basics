import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    Increment() {
        //       this.state.count = this.state.count + 1  //Do not mutate state directly. Use setState()
        // this.setState({
        //     count : this.state.count + 1
        // })   //if we use like this console & state is not in sync . console = state - 1

        /*      this.setState(
                 {
                
                    count : this.state.count + 1
                 }, 
                 () => {
                     console.log(this.state.count)  //added call back to sync console & state
                 }
                 
              )   */

        this.setState(prevState => (
            {
                count: prevState.count + 1
            }),   //included prevstate in a function
            () => {
                console.log(this.state.count)
            }
        )
    }

    Increment5() {
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
    }

    render() {
        return (
            <div>
                <div> Count : {this.state.count} </div>
                <button onClick={() => this.Increment5()}>Increment</button>
            </div>
        )
    }
}

export default Counter
