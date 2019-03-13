import React, {Component} from 'react';
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import VpnKey from '@material-ui/icons/VpnKey';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from "@material-ui/core/Button";
import SimpleModal from "../Component/SimpleModal";

const styles = theme => ({
    text: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: "100%"
    }, avatar: {
        backgroundColor: "black",
        margin: theme.spacing.unit,
        textAlign: "center"
    }, card: {
        marginTop: "7%"
    }, button: {
        width: "70%",
        position: "left"
    }, divButton: {
        textAlign: "right"
    }
});

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            companyName: "",
            password: ""
        }

        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeCompanyName = this.handleChangeCompanyName.bind(this);
    }

    handleChangeCompanyName(e) {
        this.setState({companyName: e.target.value});
    }

    handleChangePassword(e) {
        this.setState({password: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();

        window.location.href = "/company/meetings"
    }

    render() {

        const {classes} = this.props;


        const inputs = [
            {
                label: "Visitor ID",
                type: "number",
                onchange: this.handleChangeVisitorId,
                icon: <AccountCircle className={classes.icon}/>
            }, {
                label: "Password",
                type: "password",
                onchange: this.handleChangePassword,
                icon: <VpnKey className={classes.icon}/>
            }
        ]

        const inputTexts = inputs.map((x, i) => {
            return (
                <div key={i}>
                    <TextField
                        required
                        className={classes.text}
                        label={x.label}
                        margin="normal"
                        onChange={x.onchange}
                        type={x.type}
                        InputProps={{
                            startAdornment: (
                                x.icon
                            )
                        }}
                    />
                    <br/>
                </div>
            );
        });

        const form = (
            <form className={classes.form} onSubmit={this.handleSubmit}>
                <Typography component="h1" variant="h4">
                    Company sign in
                </Typography>
                <br/>
                {inputTexts}
                <br/>
                <Button
                    type="submit"
                    variant="outlined"
                    color="primary"
                    className={classes.button}
                >
                    Sign In
                </Button>
            </form>
        );

        return (
            <>
                <SimpleModal
                    elements={form}
                    buttonName="Company Sign In"
                    buttonSize="large"
                />
            </>
        );
    }
}

export default withStyles(styles)(Login);