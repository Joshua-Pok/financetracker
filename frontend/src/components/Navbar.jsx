import React from 'react'
import {AppBar, Button, Container, Stack, Toolbar} from '@mui/material'


const Navbar = () => {
    return (
        <AppBar position="static" color="red" sx={{mb: "50px"}}>
            <Container maxWidth="x1">
                <Toolbar>
                    <Stack direction = 'row' spacing={2} sx={{ml: 'auto'}}>
                        <Button>Home</Button>
                        <Button>About</Button>
                        <Button>Contact</Button>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Navbar
