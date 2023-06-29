import React, {useState} from "react";

const Ex2 = (props) => {
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

            <h3>{user.name}</h3>
            <h3>{user. age}</h3>

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
            
        </div>
    )
}
export default Ex2