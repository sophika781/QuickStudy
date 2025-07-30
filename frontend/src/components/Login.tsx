import { Container, Box} from '@mui/material';
import {Button} from '@mui/material';
import {TextField} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

interface LoginForm {
    username: string,
    password: string
}

function Login() {

    const [formData, setFormData]= useState<LoginForm>({
        username: '',
        password: ''
    })

    const port= import.meta.env.VITE_PORT;

    const navigate= useNavigate();

    const Registration = () => {
        navigate("/register");
    }

    const handleSubmit= async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data= {
            username: formData.username,
            password: formData.password
        }
        try{
            const response = await fetch(`http://localhost:${port}/login`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if(!response.ok){
                throw new Error("Login failed!");
            }

            const result= await response.json();

            sessionStorage.setItem('token', result.token);
            sessionStorage.setItem('username', formData.username); // taken from form input
            sessionStorage.setItem('firstName', result.firstName);
            sessionStorage.setItem('lastName', result.lastName);

            alert("Login was successful!");
            navigate("/");

        } catch(error){
            console.error('Login error:', error);
            alert("Login failed!");
        }
    };

    const handleChange= (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value}= event.target;
        setFormData({...formData, [name]: value});
    };

    return(
        <>
        <Box 
            sx={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: '5%',
                marginLeft: '10%',
                marginRight: '10%',
                border: '2px solid black'
            }}>
            <Container 
                className="login" 
                sx={{
                    paddingBottom: '10%'
                }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: '2%'
                }}>
                <img src= "/s.png"/>
                <h2>QuickStudy</h2>
                </Box>
                <Container 
                    component="form" 
                    onSubmit= {handleSubmit} 
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '2em',
                        marginTop: '25%',
                        paddingBottom: '5%'
                    }}>
                    <h2>Login</h2>
                    <TextField 
                        name="username" 
                        placeholder='Username' 
                        onChange= {handleChange} 
                        sx={{width: '75%'}}/>
                    <TextField 
                        name="password" 
                        type="password"
                        placeholder='Password' 
                        onChange= {handleChange} 
                        sx={{width: '75%'}}/>
                    <Button 
                        type="submit" 
                        className="lr-buttons"
                        >Sign In
                    </Button>
                </Container>
            </Container>
            <Container 
                className="new-user" 
                sx={{ 
                    textAlign: 'center',
                    paddingTop: '25%',
                    paddingBottom: '10%',
                    gap: '2em',
                    marginLeft: '10%',
                    borderLeft: '1px solid black'}}>
                <h2>New User?</h2>
                <Button className="lr-buttons" onClick= {Registration}>Sign Up</Button>
            </Container>
        </Box>

        </>
    );
}

export default Login;