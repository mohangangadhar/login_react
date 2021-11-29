import * as React from 'react';
import {auth, signInWithEmailAndPassword} from "../firebase"
import {createTheme} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import {ThemeProvider} from "@emotion/react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ButtonAppBar from "./BAppBar";
import {useEffect, useState} from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {useConfirm} from 'material-ui-confirm';
import {ConfirmProvider} from 'material-ui-confirm';
import AlertDialog from "./AlertDialog";


const theme = createTheme();
let coupon;

export default function VerifyCoupon() {
    const [user] = useAuthState(auth);
    const [books, setBooks] = useState(null);
    const [open, setOpen] = useState(false);
    const [co, setCo] = useState("");
    const [info, setInfo] = useState({});
    const [valid, setValid] = useState(false);
    const [verify, setVerify] = useState(false);
    let invalidCoupon = false;

    const onCouponChange = (event) => {
        coupon = event.target.value;
        console.log(coupon);
        setCo(coupon);
    }

    const confirm = useConfirm();

    const handleClick = (event) => {
        console.log(co);
        console.log(event);
        event.preventDefault();
        if (user) {
            confirm({description: 'You about to redeem coupon ' + co + '!'})
                .then(async () => {
                    console.log(info);
                    console.log("I clicked Yes");
                    setVerify(false);
                    updateCoupon()
                }).catch(() => {
                console.log("It Failed");
            });
        }
    };

    const updateCoupon = () => {
        console.log(info);
        info.email_id = user.email;
        const requestOptions = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(info)
        };
        fetch('https://3edx7vfqsa.execute-api.ap-south-1.amazonaws.com/default/Siveals-update', requestOptions)
            .then(response => response.json())
            .then(data => {
                    setInfo(data);
                    if (data.resp === "Invalid Coupon!") {
                        invalidCoupon = true;
                        setBooks("Invalid");
                    } else {
                        data.valid ? setBooks("Available") : setBooks("Redeemed");
                        setValid(data.valid)
                    }
                }
            );
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setBooks(null);
        getData();
        setVerify(true);
    };

    const getData = () => {
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        };
        fetch('https://9p9gnbqc2j.execute-api.ap-south-1.amazonaws.com/siveals-read-order?id=' + coupon + '&vendor=' + user.email, requestOptions)
            .then(response => response.json())
            .then(data => {
                    setInfo(data);
                    if (data.resp === "Invalid Coupon!") {
                        invalidCoupon = true;
                        setVerify(false);
                        setBooks("Invalid");
                    } else {
                        data.valid ? setVerify(true) :setVerify(false);
                        data.valid ? setBooks("Available") : setBooks("Redeemed");

                        setValid(data.valid)
                    }
                }
            );
    }
    const handleClickOpen = () => {
        this.setState({open: true});
    };

    const handleClose = () => {
        this.setState({open: false});
    };

    return (
        <ThemeProvider theme={theme}>
            <ButtonAppBar/>
            <Grid container component="main" sx={{height: '100vh', mt: 10}}>
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
                        <AlertDialog open={open}
                                     handleClickOpen={handleClickOpen}
                                     handleClose={handleClose}
                        />
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
                                {verify ?
                                    <div>
                                        <Grid item square sm={12} md={12}>
                                            <Button type="submit"
                                                    fullWidth
                                                    variant="contained"
                                                    sx={{mt: 3, mb: 2}}
                                                    onClick={handleSubmit}
                                            > Verify </Button>

                                            <Button type="submit"
                                                    fullWidth
                                                    variant="contained"
                                                    sx={{mt: 3, mb: 2}}
                                                    onClick={handleClick}
                                            > Redeem </Button>
                                        </Grid>
                                    </div>
                                    :
                                    <Grid item square sm={12} md={12}>
                                        <Button type="submit"
                                                fullWidth
                                                variant="contained"
                                                sx={{mt: 3, mb: 2}}
                                                onClick={handleSubmit}
                                        > Verify </Button>
                                    </Grid>
                                }
                            </Grid>
                            {books === "Redeemed" &&
                            <Button fullWidth variant={'contained'} color='error' sx={{mt: 3, mb: 2}}>
                                {books}
                            </Button>
                            }
                            {books === "Available" &&
                            <Button fullWidth variant={'contained'} color='success' sx={{mt: 3, mb: 2}}>
                                {books}
                            </Button>
                            }
                            {books === "Invalid" &&
                            <Button fullWidth variant={'contained'} color='error' sx={{mt: 3, mb: 2}}>
                                Invalid Coupon
                            </Button>
                            }
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
