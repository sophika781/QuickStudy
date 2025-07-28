import { Container, Box} from '@mui/material';
import {Button} from '@mui/material';
import {TextField} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigate= useNavigate();

    const Registration = () => {
        navigate("/register");
    }

    return(
        <>
        <Box sx={{display: 'flex', flexDirection: 'row', marginTop: '5%', marginLeft: '10%', marginRight: '10%', border: '2px solid black'}}>
            <Container className="login" sx={{paddingBottom: '10%'}}>
                <Box sx={{display: 'flex', flexDirection: 'row', marginTop: '2%'}}>
                <img src= "/s.png"/>
                <h2>QuickStudy</h2>
                </Box>
                <Container sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2em', marginTop: '25%', paddingBottom: '5%'}}>
                    <h2>Login</h2>
                    <TextField variant="outlined" placeholder='Username' sx={{width: '75%'}}/>
                    <TextField variant="outlined" placeholder='Password' sx={{width: '75%'}}/>
                    <Button className="lr-buttons">Sign In</Button>
                </Container>
            </Container>
            <Container className="new-user" sx={{ textAlign: 'center', paddingTop: '25%', paddingBottom: '10%', gap: '2em', marginLeft: '10%', borderLeft: '1px solid black'}}>
                <h2>New User?</h2>
                <Button className="lr-buttons" onClick= {Registration}>Sign Up</Button>
            </Container>
        </Box>

        </>
    );
}

export default Login;