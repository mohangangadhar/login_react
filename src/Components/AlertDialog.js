import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

class AlertDialog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: this.props.open,
        };
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleAgree = () => {
        console.log("I agree!");
        this.props.handleClose();
    };
    handleDisagree = () => {
        console.log("I do not agree.");
        this.props.handleClose();
    };
    render() {
        return (
            <div>
                {/* Button to trigger the opening of the dialog */}
                {/*<Button onClick={this.props.handleClickOpen}>Open alert dialog</Button>*/}
                {/* Dialog that is displayed if the state open is true */}
                <Dialog
                    open={this.state.open}
                    onClose={this.props.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Successful Alert"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            You are successful in life!
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleDisagree} color="primary">
                            Disagree
                        </Button>
                        <Button onClick={this.handleAgree} color="primary" autoFocus>
                            Agree
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default AlertDialog;
