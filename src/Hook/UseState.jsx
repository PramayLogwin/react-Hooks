
import React, { useState } from 'react'

export default function UseState() {
    //usestate
    const [name, setName] = useState("Js To React");


    const click = () => {
        let value = name;
        
        if (value === 'Js To React') {
            setName("React");
        } else if (value === "React") {
            setName("Node");
        }
        else {
            setName("Js To React");
        }

        // (value === "Js To React")?  /// ternery operator 
        // setName("React"): setName("Node");
    }
    //useState with object
    const [user, newuser] = useState({ firstName: " ", lastName: " " });


    return (
        <>
            <p>{name}</p>
            <button onClick={click}>Update</button>

            <p>UseState With object</p>
            <form>

                <label>User:-</label>
                <input type="text" value={user.firstName} onChange={e => { newuser({ ...user, firstName: e.target.value }) }}></input><br></br>

                <label>lastName:-</label>
                <input type="text" value={user.lastName} onChange={e => { newuser({ ...user, lastName: e.target.value }) }}></input>

            </form><br></br>
            {user.firstName}
            {user.lastName}
        </>
    )
}
