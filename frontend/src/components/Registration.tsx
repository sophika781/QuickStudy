import { Box, TextField, Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Registration() {

    const navigate= useNavigate();

    return(
        <>
        <Box sx={{display: 'flex', flexDirection: 'column', border: '1px solid black', marginLeft: '30%', marginRight: '30%', marginTop: '5%', gap: '1em', padding: '5%'}}>
            <h2>Sign Up</h2>
            <Box sx={{display: 'flex', flexDirection: 'row', gap: '1em'}}>
                <TextField placeholder= "First Name"/>
                <TextField placeholder= "Last Name"/>
            </Box>
            <TextField placeholder="Username"/>
            <TextField placeholder="Email Address"/>
            <TextField placeholder= "Password" />
            <TextField placeholder= "Retype Password" />
            <Button className="lr-buttons">Sign Up</Button>
            <a href="/login">Already have an account?
            </a>
            
        </Box>
        </>
    );
}

export default Registration;