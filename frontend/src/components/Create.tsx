import NavBar from "./NavBar";
import { useState } from "react";
import Button from '@mui/material/Button';
import { Box } from "@mui/material";

function Create(){

    const [isLoggedIn, setLoggedIn]= useState(() => {
            return sessionStorage.getItem('token') !== null;
    });

    const [title, setTitle]= useState("Untitled");

    return(
        <>
            <NavBar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}/>
            <Box className="context"></Box>
            <h2>{title}</h2>
            <Button className="lr-buttons">Learn</Button>
        </>
    );
}

export default Create;