import React, { useState } from 'react'

const UseStateExample = () => {
    // Example 1
    // const [cartCount, setCartCount] = useState(0);
    // const addCardCount = () => {
    //     setCartCount(cartCount + 1);
    // }

    // Example 2
    // const [userName, setUserName] = useState("Ram");
    // const [userAge, setUserAge] = useState(20);
    // const updateUserName = () => {
    //     setUserName("Sam");
    //     userName === "Ram" ? setUserName("Sam") : setUserName("Ram");
    // }
    // const updateUserAge = () => {
    //     setUserAge(25);
    //     userAge === 20 ? setUserAge(25) : setUserAge(20);
    // }

    // Example 3
    // const [user, setUser] = useState({"name": "Ram", "age": 20});
    // const updateUserName = () => {
    //     setUser({ ...user, name: "Sam" });
    // }
    // const updateUserAge = () => {
    //     setUser({ ...user, age: 25 });
    // }

    // Example 4
    const [user, setUser] = useState({ "name": "Ram", "age": 20 });
    // const changeName = (e) => {
    //     alert(e.target.value);
    // }
    // const changeAge = (e) => {
    //     alert(e.target.value);
    // }

    // const changeName = (e) => {
    //     const newStageObject = { ...user };
    //     newStageObject.name = e.target.value;
    //     setUser(newStageObject);
    // }
    // const changeAge = (e) => {
    //     const newStageObject = {...user};
    //     newStageObject.age = e.target.value;
    //     setUser(newStageObject);
    // }

    // const changeName = (e) => {
    //     setUser((prev)=>{
    //         return {...prev, name: e.target.value}
    //     })
    // }
    // const changeAge = (e) => {
    //     setUser((prev)=>{
    //         return {...prev, age: e.target.value}
    //     })
    // }

    const userDetailChange = (e) => {
        setUser((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    return (
        // Example 1
        // <>
        //     <h4>Number of items in the cart: {cartCount}</h4>
        //     <button onClick={addCardCount}>Add to Cart</button>
        // </>

        // Example 2
        // <>
        //     <h3>User Details</h3>
        //     <h4>{userName}</h4>
        //     <h4>{userAge}</h4>
        //     <button onClick={updateUserName}>Change User Name</button>
        //     <button onClick={updateUserAge}>Change User Age</button>
        // </>

        // Example 3
        // <>
        //     <h3>User Details</h3>
        //     <h4>{user.name}</h4>
        //     <h4>{user.age}</h4>
        //     <button onClick={updateUserName}>Change User Name</button>
        //     <button onClick={updateUserAge}>Change User Age</button>
        // </>

        // Example 4
        <>
            <form>
                <h2>{user.name} {user.age}</h2>
                <input
                    type="text"
                    placeholder="Enter your Name"
                    // onChange={changeName}
                    onChange={userDetailChange}
                    value={user.name}
                    name="name"
                />
                <input
                    type="text"
                    placeholder="Enter your Age"
                    // onChange={changeAge}
                    onChange={userDetailChange}
                    value={user.age}
                    name="age"
                />
            </form>
        </>
    )
}

export default UseStateExample