import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {useHistory} from "react-router-dom";
import {auth} from "../firebase";

export default function ButtonAppBar() {

    const history = useHistory();
    const signOut = () => {
        auth.signOut().then(r => history.replace("/"));
    }
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" color={"primary"}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        Siveals Partner
                    </Typography>
                    <Button color="inherit" onClick={signOut}>Logout</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
