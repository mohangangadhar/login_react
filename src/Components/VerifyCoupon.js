import * as React from 'react';
import {signInWithEmailAndPassword} from "../firebase"
import {createTheme} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import {ThemeProvider} from "@emotion/react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ButtonAppBar from "./BAppBar";
import {useState} from "react";

const theme = createTheme();
let coupon;
let but;

export default function VerifyCoupon() {

    const [books, setBooks] = useState(null);

    const onCouponChange = (event) => {
        coupon = event.target.value;
        console.log(coupon);
    }
    async function getData() {
        // const response = await fetch("https://www.anapioficeandfire.com/api/books");
        // const data = await res.json();

        // store the data into our books variable
        setBooks("Available") ;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(coupon);
        // call lambda to check coupon status and report
        if (coupon === "aa") {
            but = "redeem";
        }
        getData().then(r => console.log(r));
    };

    return (
        <ThemeProvider theme={theme}>
            <ButtonAppBar/>
            <Grid container component="main" sx={{height: '100vh', width: '100vh', mt: 10}}>
                <CssBaseline/>
                <Grid item square>
                    <Box sx={{
                        display: 'flex',
                        width: '180vh',
                        justifyContent: 'space-around',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                        <Typography component="h1" variant="h5">
                            Verify Coupon
                        </Typography>
                        <Box component="form" noValidate sx={{mt: 1}}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="coupon"
                                label="Coupon"
                                name="coupon"
                                autoFocus
                                onChange={onCouponChange}
                            />
                            <Grid container component="main">
                                <Grid item square sm={6} md={6}>
                                    <Button type="submit"
                                            variant="contained"
                                            sx={{mt: 3, mb: 2}}
                                            onClick={handleSubmit}
                                    > Verify </Button>
                                </Grid>
                                <Grid item square sm={6} md={6}>
                                    <Button type="submit"
                                            variant="contained"
                                            sx={{mt: 3, mb: 2}}
                                    > Redeem </Button>
                                </Grid>
                            </Grid>
                            {books === "Redeemed" && <Button fullWidth variant={'contained'} color='error' sx={{mt: 3, mb: 2}}>
                                {books}
                            </Button>
                            }
                            {books === "Available" && <Button fullWidth variant={'contained'} color='success' sx={{mt: 3, mb: 2}}>
                                {books}
                            </Button>
                            }
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}