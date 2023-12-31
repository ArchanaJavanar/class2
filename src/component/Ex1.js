import React, { useState } from 'react'

//state => internal variable of react ,number, string, boolean, object,array

function Ex1(props) {
    //useState => react hook
    //hook => declear of useState
    //const [state,handler] = useState(initial value)
    // in react developer tool name of the state and name of the state handler won't be visible it is called mutable
    const [ x,setX] = useState(1234)
    const [title, setTitle] = useState ("welcome to react")
    const [view, setView] = useState(true)
    const [user, setUser] = useState({
        name : 'Raju',
        email  : 'raju@gmail.com',
        age: 24
    })
    
    const [colors, setColors] = useState(['red', 'green', 'blue'])
    return (
        <div>
            <h3>States in Functional Component</h3>
            <h4> var x= {x}</h4>
            <h3>{title}</h3>
            <h3>{view ? "Say True" : "Say False"}</h3>
            <hr />
            <ul>
                {
                    colors.map((item,index) =>{
                        return(
                            <li
                                key = {index}>{item}
                            </li>
                        )
                    })
                }
            </ul>
            <hr />

            <h3>{user.name}</h3>
            <h3>{user. age}</h3>
        </div>
    )
}

export default Ex1