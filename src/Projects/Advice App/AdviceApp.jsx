import React, { useEffect, useState } from 'react'

const AdviceApp = () => {
    const [advice, setAdvice] = useState("Please Click button to Get Advice")
    const [count, setCount] = useState(0);

    const getAdvice = async () => {
        try {
            const res = await fetch("https://api.adviceslip.com/advice");
            const data = await res.json();
            setAdvice(data.slip.advice);
            setCount((prevCount) => prevCount + 1);
        } catch (error) {
            console.log("Error fetching the advice", error);
        }
    }

    // Uncomment this useEffect to load advice when the page initially loads without updating the count.
    // useEffect(() => {
    //     getAdvice();
    // }, []);

    return (
        <div>
            <h3>{advice}</h3>
            <button onClick={getAdvice}>Get Advice</button>
            <Counter counter={count} />
        </div>
    )
}

const Counter = (props) => {
    return (
        <p>You have read <b>{props.counter}</b> pieces of exercise</p>
    )
}

export default AdviceApp
