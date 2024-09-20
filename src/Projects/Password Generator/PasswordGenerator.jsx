import React, { useEffect, useState } from 'react'
import { Button, Card, Form, InputGroup, Alert } from 'react-bootstrap'

const PasswordGenerator = () => {
    const [length, setLength] = useState(8);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbol, setIncludeSymbol] = useState(true);
    const [password, setPassword] = useState("");
    const [alertMessage, setAlertMessage] = useState(false);

    const generatePassword = (() => {
        let charset = ""
        if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
        if (includeNumbers) charset += "0123456789";
        if (includeSymbol) charset += "!@#$%^&*()_+[]{}|;:,.<>?";

        let generatePassword = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            generatePassword += charset[randomIndex];
        }
        setPassword(generatePassword);
        setAlertMessage(false);
    });

    const copyToClipboard = (() => {
        navigator.clipboard.writeText(password);
        setAlertMessage(true);
    });

    return (
        <div className='d-flex justify-content-center align-items-center vh-100 vw-100' style={{ backgroundColor: "aliceblue" }}>
            <Card className='p-3'>
                <Card.Body>
                    <h4 className='text-info text-center px-3 mb-4'>STRONG PASSWORD GENERATOR</h4>
                    {alertMessage &&
                        <Alert variant="success" dismissible>
                            Password copied!
                        </Alert>
                    }
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label className='fw-bold'>Password Length:</Form.Label>
                            <Form.Control
                                type='number'
                                value={length}
                                onChange={(e) => setLength(parseInt(e.target.value))}
                            />
                        </Form.Group>
                        <Form.Group controlId="includeUppercase">
                            <Form.Check
                                type="checkbox"
                                label="Include Uppercase"
                                checked={includeUppercase}
                                onChange={(e) => { setIncludeUppercase(e.target.checked) }}
                            />
                        </Form.Group>
                        <Form.Group controlId="includeLowercase">
                            <Form.Check
                                type="checkbox"
                                label="Include Lowercase"
                                checked={includeLowercase}
                                onChange={(e) => { setIncludeLowercase(e.target.checked) }}
                            />
                        </Form.Group>
                        <Form.Group controlId="includeNumbers">
                            <Form.Check
                                type="checkbox"
                                label="Include Numbers"
                                checked={includeNumbers}
                                onChange={(e) => { setIncludeNumbers(e.target.checked) }}
                            />
                        </Form.Group>
                        <Form.Group controlId="includeSymbol">
                            <Form.Check
                                type="checkbox"
                                label="Include Symbol"
                                checked={includeSymbol}
                                onChange={(e) => { setIncludeSymbol(e.target.checked) }}
                            />
                        </Form.Group>
                        <Button
                            variant='primary'
                            className='mt-3'
                            onClick={generatePassword}
                            disabled={!includeUppercase && !includeLowercase && !includeNumbers && !includeSymbol}
                        >
                            Generate Password
                        </Button>
                        <Form.Group className='mt-3'>
                            <InputGroup>
                                <Form.Control
                                    type='text'
                                    readOnly
                                    value={password}
                                    className='mb-0'
                                />
                                <Button variant='success' onClick={copyToClipboard} disabled={!password}>
                                    Copy
                                </Button>
                            </InputGroup>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default PasswordGenerator