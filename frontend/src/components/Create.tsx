import NavBar from "./NavBar";
import { useState } from "react";
import Button from '@mui/material/Button';
import { Box, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import EditIcon from '@mui/icons-material/Edit';
import Card from "./Card";
function Create(){

    const [isLoggedIn, setLoggedIn]= useState(() => {
            return sessionStorage.getItem('token') !== null;
    });

    const [title, setTitle]= useState("Untitled");
    const [enabled, setEnabled]= useState(false);

    const handleTitle= () => {
        setEnabled(true);
    }

    const handleTitleChange= (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }

    const handleKeyDown= (event: React.KeyboardEvent<HTMLDivElement>) => {
        if(event.key === 'Enter'){
            event.preventDefault();
            setEnabled(false);
        }
    }

    return(
        <>
            <NavBar isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}/>
            <Box className="context"></Box>
            <Box sx={{display: 'flex', flexDirection: 'column', border: 'solid black', margin: '3%'}}>
                
                <Box sx={{display: 'flex', flexDirection: 'row', margin: '3%', gap: '60%'}}>
                    <Box sx= {{display: 'flex', flexDirection: 'row', padding: '2%', gap: '2em'}}>
                        <TextField value= {title} disabled={!enabled} onChange={handleTitleChange} onKeyDown={handleKeyDown}
                            InputProps={{
                                sx: {
                                fontSize: '2em',
                                '& fieldset': { border: 'none' },
                                width: '7em' // increases input font size
                                }
                            }}
                        />
                        <IconButton aria-label="edit" className="edit-button" sx={{margin: '6%', width: '40px', height: '40px'}} onClick={handleTitle}>
                            <EditIcon className="edit-icon"/>
                        </IconButton>
                    </Box>
                <Button className="lr-buttons" sx={{display: 'flex', flexDirection: 'row', margin: '2%', padding: '2%'}}>Learn</Button>
                </Box>
                
                <Box sx={{display: 'flex', flexDirection: 'column', marginLeft: '5%', marginRight: '5%', border: 'solid black'}}>
                    <Card></Card>
                </Box>
                
                <Button sx={{marginLeft: '5%', marginRight: '5%', marginTop: '2%', paddingTop: '1%', paddingBottom: '1%', backgroundColor: 'white', color: 'black', border: 'solid black'}}>+ Add Flashcard</Button>
                
                <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'end', margin: '2%', gap: '5em'}}>
                    <Button className='lr-buttons' >Save</Button>
                    <Button sx={{backgroundColor: 'red', color: 'white'}}>Delete</Button>
                </Box>
            </Box>
            
        </>
    );
}

export default Create;