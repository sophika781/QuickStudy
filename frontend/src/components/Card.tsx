import { Box, TextField, Button } from "@mui/material";

function Card(){
    return(
        <>
        <Box sx={{display: 'flex', flexDirection: 'row'}}>
            <Box sx={{display: 'flex', flexDirection: 'column', borderRight: '0.5px solid black', alignItems: 'start', width: '50%', padding: '1%'}}>
                <TextField fullWidth multiline rows= {2} sx={{marginTop: '2%', marginBottom: '2%', alignItems: 'center'}}/>
                <Button sx={{backgroundColor: 'black', color: 'white', paddingLeft: '40%', paddingRight: '45%', paddingTop: '2%', paddingBottom: '2%', margin: '2%'}}>+ Image</Button>
            </Box>
            <TextField fullWidth multiline rows= {5} sx={{margin: '2%', width: '50%', alignItems: 'center'}}/>
        </Box>
        </>
    );
}

export default Card;