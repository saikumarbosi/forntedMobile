import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const LoginPage = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const userDetails = { username, password }


    const usenavigate = useNavigate()

    const handleUser = async (e) => {
        e.preventDefault()
        console.log(userDetails)
        try {
            const response = await fetch("https://backendmoblie-3.onrender.com/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "Application/json"
                },
                body: JSON.stringify(userDetails)
            })
            // console.log(response)
            const data = await response.json()
            console.log(data)
            if (response.ok === true) {
                usenavigate('/joker')
            }
        }
        catch (e) {
            console.log("err:", e)
        }
    }

    return (
        <div className='bg-container'>
            <div className='login-container'>
                <h1>User Login</h1>

                <Form onSubmit={handleUser}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label><br />
                        <Form.Control type="text" placeholder="Enter username" onChange={(e) => setUsername(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label><br />
                        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
            
                    <div className="m-5 bt" >
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>

            </div>
        </div>
    )
}

export default LoginPage
