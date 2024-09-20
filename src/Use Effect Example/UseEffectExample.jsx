import React, { useEffect, useState } from "react"
import { Button, Container } from "react-bootstrap";

const UseEffectExample = () => {
    const [count, setCount] = useState(0);
    const [times, setTimes] = useState(0);

    // useEffect(()=>{
    //     // 1. The code that we want to run
    //     // 3. Optimal return function or clean up function
    // }, []); //2. Dependency Array

    // No Dependencies
    // useEffect(()=>{
    //     console.log("I am No Dependencies");
    // });
    // console.log("I am from outside");

    // Empty Dependency Array
    // useEffect(()=>{
    //     // call only for the first time
    //     console.log("I am Empty Dependencies");
    // }, []);

    // State Dependency Array
    // useEffect(()=> {
    //     console.log("I am State Dependencies");
    // }, [count, times])

    // on Mount Cleanup function
    // useEffect(() => {
    //     console.log("Mounted");
    //     return () => console.log("Unmounted");
    // }, []);

    // Re-rendere cleanup code
    // useEffect(()=>{
    //     console.log("Re-render code");
    //     return ()=> console.log("Re-render cleanup");
    // })

    // State cleanup code
    // useEffect(() => {
    //     console.log("State code");
    //     return () => console.log("State clean up");
    // }, [count]);

    useEffect(() => {
        const random = Math.floor(Math.random() * 1000);
        const timer = setInterval(() => {
            console.log(`${random} - Re-render`);
        }, 1000);
        return () => clearInterval(timer);
    });

    return (
        <Container>
            <h3>Count: {count}</h3>
            <Button variant="primary" className="me-2" onClick={() => setCount((value) => value + 1)}>+</Button>
            <Button variant="danger" onClick={() => setCount((value) => value + 1)}>-</Button>
            <br /> <br />
            <h3>Times: {times}</h3>
            <Button variant="warning" onClick={() => setTimes((value) => value + 1)}>T</Button>
        </Container>
    )
}

export default UseEffectExample