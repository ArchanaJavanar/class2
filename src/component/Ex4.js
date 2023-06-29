import React from "react";

class Ex4 extends React.Component {
    constructor(props) {
        super(props);
        //state
        this.state = {
            x :123,
            y : 24,
            title: "welcome to string",
            view : false,
            colors : ['red', 'green', 'blue'],
            user : {
                name: 'raju',
                age: 24,
                email : 'raju@gmail.com'
            }
        }
    }

    render () {
        return (
            <div>
                <h3>States in class component</h3>
                <h3>{this.state.x} , {this.state.y}</h3>
                <h3>{this.state.title}</h3>
                <h3>{this.state.view ? "Say true" : "Say False"}</h3>
                <hr />
                <ul>
                    {
                        this.state.colors.map((item, index) =>{
                            return(
                                <li
                                    key = {index}>{item}
                                </li>
                            )
                        })
                    
                    }
                </ul>
                <h3>{this.state.user.name}, {this.state.user.email}</h3>
            </div>
        )
    }
}

export default Ex4