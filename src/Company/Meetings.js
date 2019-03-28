import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import DrawerComponent from "../Component/DrawerComponent";
import MeetingRoom from '@material-ui/icons/MeetingRoom';
import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import Add from "@material-ui/icons/Add";
import AccountCircle from "@material-ui/icons/AccountCircle";

const styles = theme => ({
    fab: {
        position: "fixed",
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2,
    }
})

class Meetings extends React.Component {

    handleNewMeeting() {
        window.location.href = "/company/new-meeting"
    }

    handleProfile(){
        window.location.href = "/company/profile"
    }

    render() {

        const {classes} = this.props

        const items = [
            {
                label: "Profile",
                icon: <AccountCircle/>,
                onClick: this.handleProfile
            }
        ];

        const drawerItems = items.map((x, i) => {
            return (
                <ListItem
                    button
                    onClick={x.onClick}
                    key={i}
                >
                    <ListItemIcon>
                        {x.icon}
                    </ListItemIcon>
                    <ListItemText primary={x.label}/>
                </ListItem>
            );
        });

        const fabButton = (
            <Fab
                className={classes.fab}
                color="primary"
            >
                <Add onClick={this.handleNewMeeting}/>
            </Fab>
        );

        return (
            <DrawerComponent
                title="My meetings"
                drawerItems={drawerItems}
                fabButton={fabButton}
            />
        );
    }
}

export default withStyles(styles)(Meetings);