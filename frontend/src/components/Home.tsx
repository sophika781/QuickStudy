import * as React from 'react';
import NavBar from './NavBar';
import { Container } from '@mui/material';

function Home() {
    return(
        <>
        <NavBar/>
        <Container className="context"></Container>
        <Container className="landing-initial">
            <h1>QuickStudy</h1>
        </Container>

        </>
    );
}

export default Home;