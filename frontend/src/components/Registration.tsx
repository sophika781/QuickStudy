import { Box, TextField, Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface RegistrationForm {
    firstname: String,
    lastname: String,
    username: String, 
    email: String,
    password: String
    confirm_password: String
}

function Registration() {

    const [formData, setFormData] = useState<RegistrationForm>({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        confirm_password: ''
    });

    const port= import.meta.env.VITE_PORT;

    const navigate= useNavigate();

    const handleSubmit= async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(formData.password === formData.confirm_password){
            const data= {
                firstName: formData.firstname,
                lastName: formData.lastname,
                username: formData.username,
                email: formData.email,
                password: formData.password
            }
            console.log(data);
            
            const response= await fetch(`http://localhost:${port}/register`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            console.log(response);
            if(response.ok){
                alert("Registration successful.");
                navigate("/login");
            } else{
                alert("Registration failed!");
            }
            
           setFormData({
            firstname: '',
            lastname: '',
            username: '',
            email: '',
            password: '',
            confirm_password: ''
           })
        }
        else{
            window.alert("Passwords do not match!");
        }
        
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value}= event.target
        setFormData({...formData, [name]: value});
    }

    return(
        <>
        <Box component= "form" onSubmit= {handleSubmit} sx={{display: 'flex', flexDirection: 'column', border: '1px solid black', marginLeft: '30%', marginRight: '30%', marginTop: '5%', gap: '1em', padding: '5%'}}>
            <h2>Sign Up</h2>
            
            <Box sx={{display: 'flex', flexDirection: 'row', gap: '1em'}}>
                <TextField 
                    required
                    name="firstname"
                    value= {formData.firstname} 
                    label= "First Name" 
                    onChange={handleChange}/>
                <TextField 
                    name="lastname"
                    value= {formData.lastname} 
                    label= "Last Name" 
                    onChange={handleChange}/>
            </Box>
            <TextField 
                required
                name="username"
                value= {formData.username} 
                label ="Username" 
                onChange={handleChange}/>
            <TextField 
                required
                name="email"
                value= {formData.email} 
                label="Email Address" 
                onChange={handleChange}/>
            <TextField 
                required
                name="password"
                type="password"
                value= {formData.password} 
                label= "Password" 
                onChange={handleChange}/>
            <TextField 
                required
                name="confirm_password"
                type="password"
                value= {formData.confirm_password} 
                label= "Retype Password" 
                onChange={handleChange}/>
            <Button 
                type="submit" 
                className="lr-buttons"
                >
                Sign Up
            </Button>
            <a href="/login">Already have an account?</a> 
        </Box>
        </>
    );
}

export default Registration;