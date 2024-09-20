// import React from 'react'
// import { Accordion, Container } from 'react-bootstrap';

// const Data = [
//     {
//         "id": 1,
//         "question": "What is React?",
//         "answer": "React is a JavaScript library for building user interfaces."
//     },
//     {
//         "id": 2,
//         "question": "What is an API?",
//         "answer": "API stands for Application Programming Interface."
//     },
//     {
//         "id": 3,
//         "question": "What is JSX?",
//         "answer": "JSX is a syntax extension for JavaScript used with React to describe UI."
//     }
// ]

// const FAQExample = () => {

//     return (
//         <Container>
//             <Accordion defaultActiveKey={"0"}>
//                 {Data.map((items, index) => (
//                     <Accordion.Item key={index} eventKey={index.toString()}>
//                         <Accordion.Header>
//                             {items.question}
//                         </Accordion.Header>
//                         <Accordion.Body>
//                             {items.answer}
//                         </Accordion.Body>
//                     </Accordion.Item>
//                 ))}
//             </Accordion>
//         </Container>
//     )
// }

// export default FAQExample



import React, { useEffect, useState } from 'react'
import { Accordion, Container } from 'react-bootstrap';
import axios from "axios";

const FAQExample = () => {

    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        const fetchFAQs = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/posts')
                setFaqs(response.data.posts);
            } catch (error) {
                console.log("Error fetching FAQs:", error);
            }
        };
        fetchFAQs();
    }, []);

    return (
        <Container>
            <div className='m-3'>
                <Accordion defaultActiveKey={"0"}>
                    {faqs.map((item, index) => (
                        <Accordion.Item key={item.id} eventKey={index.toString()} className='m-3 border border-2 rounded-2'>
                            <Accordion.Header>{item.title}</Accordion.Header>
                            <Accordion.Body>{item.body}</Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </div>
        </Container>
    )
}

export default FAQExample

