import NavBar from './NavBar';
import { Box } from '@mui/material';
import { useState, useEffect} from 'react';

function Home() {

    const [isLoggedIn, setLoggedIn]= useState(() => {
        return sessionStorage.getItem('token') !== null;
    });

    const [firstName, setFirstName] = useState(() => {
        return sessionStorage.getItem('firstName') || '';
      });
    

    return(
        <>
        <NavBar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}/>
        <Box className="context">
        <Box className="landing-initial">
            { !isLoggedIn &&
            <h1>QuickStudy</h1>
            }
            { isLoggedIn &&
            <h1>Welcome Back, {firstName}</h1>

            }
        </Box>
        </Box>
        </>
    );
}

export default Home;