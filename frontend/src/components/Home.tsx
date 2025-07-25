import NavBar from './NavBar';
import { Box } from '@mui/material';
import { useState } from 'react';

function Home() {

    const [isLoggedIn, setLoggedIn]= useState(false);

    return(
        <>
        <NavBar isLoggedIn={isLoggedIn}/>
        <Box className="context">
        <Box className="landing-initial">
            { !isLoggedIn &&
            <h1>QuickStudy</h1>
            }
        </Box>
        </Box>
        </>
    );
}

export default Home;