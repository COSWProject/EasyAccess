import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BasicInfo from './BasicInfo';
import IconButton from '@material-ui/core/IconButton';
import AppBarComponent from "../Component/AppBarComponent";
import ArrowBack from "@material-ui/icons/ArrowBack";

const styles = theme => ({
    appBar: {
        position: 'relative',
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        padding: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
            marginTop: theme.spacing.unit * 6,
            marginBottom: theme.spacing.unit * 6,
            padding: theme.spacing.unit * 3,
        },
    },
    stepper: {
        padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit,
    }, backButton: {
        marginLeft: -12,
        marginRight: 20
    }
});

const steps = ['Basic information'];

function getStepContent(step) {
    switch (step) {
        case 0:
            return <BasicInfo/>;
        default:
            throw new Error('Unknown step');
    }
}

class Checkout extends React.Component {
    state = {
        activeStep: 0,
    };

    handleNext = () => {
        this.setState(state => ({
            activeStep: state.activeStep + 1,
        }));
    };

    handleBack = () => {
        this.setState(state => ({
            activeStep: state.activeStep - 1,
        }));
    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
    };

    handleBackButton() {
        window.location.href = "/";
    }

    render() {
        const {classes} = this.props;
        const {activeStep} = this.state;


        const form = (

            <main className={classes.layout}>
                <Stepper activeStep={activeStep} className={classes.stepper}>
                    {steps.map(label => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <React.Fragment>
                    {activeStep === steps.length ? (
                        <React.Fragment>
                            <Typography variant="h5" gutterBottom>
                                Thank you.
                            </Typography>
                            <Typography variant="subtitle1">
                                Sign up successfully.
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                component="a"

                                href="/"
                            >
                                Finish
                            </Button>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            {getStepContent(activeStep)}
                            <div className={classes.buttons}>
                                {activeStep !== 0 && (
                                    <Button onClick={this.handleBack} className={classes.button}
                                    >
                                        Back
                                    </Button>
                                )}
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleNext}
                                    className={classes.button}

                                >
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </div>
                        </React.Fragment>
                    )}
                </React.Fragment>
            </main>
        );

        const backButton = (
            <IconButton
                className={classes.backButton}
                onClick={this.handleBackButton}
            >
                <ArrowBack/>
            </IconButton>
        );

        return (
            <>
                <AppBarComponent title="Sign Up" button={backButton}/>
                {form}
            </>
        );
    }
}

Checkout.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Checkout);