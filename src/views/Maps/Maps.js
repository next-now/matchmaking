import React from "react";

import GoogleMapReact from 'google-map-react';

import makeStyles from "@material-ui/core/styles/makeStyles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import RoomIcon from '@material-ui/icons/Room';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Button from '@material-ui/core/Button';


import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



const customMarkerUseStyles= makeStyles((theme) => ({
    root: {
        width: '300px',
        backgroundColor: 'white',
    },
    heading: {
        backgroundColor: "#47B0F0",
        color: "white",
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));




const CustomMarker = ({name, hasCar, maxDistance, categories }) => {
    const classes = customMarkerUseStyles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
    setOpen(true);
    };

    const handleClose = () => {
    setOpen(false);
    };

    return (
        <div className={classes.root}>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    className={classes.heading}
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content">
                    <Box alignItems="center" display="flex">
                        <Box>
                            <Avatar>{name.split(" ").map(x => x[0]).join("")}</Avatar>
                        </Box>
                        <Box m={2}>
                            <Typography align={'left'} >{name}</Typography>
                        </Box>
                    </Box>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Grid container>
                        <Grid item xs={6}>
                            <Box alignItems="center" display="flex">
                                <Box>
                                    <DriveEtaIcon />
                                </Box>
                                <Box m={2}>
                                    <Typography align={'left'}>{ hasCar? "Has a car" : "No car"}</Typography>
                                </Box>
                                
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box alignItems="center" display="flex">
                                <Box>
                                    <RoomIcon/>
                                </Box>
                                <Box m={2}>
                                    <Typography align={'left'} >{maxDistance}</Typography>
                                </Box>
                            </Box>

                        </Grid>
                        <Grid item xs={12}>
                            <Box alignItems="center" display="flex">
                                <Box>
                                    <LocalOfferIcon/>
                                </Box>
                                <Box m={2}>
                                    <Typography align={'left'} >{categories}</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid> <Box>

                                    <Button onClick={handleClickOpen} type="submit" fullWidth  align={'center'} variant="contained" color="primary" className={classes.submit}>
                                   Ask for help
                                </Button>
                                <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Success"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          The user providing help has been notified and will get back to you soon
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        
          <Button onClick={handleClose} color="primary" autoFocus>
            Acknowledge
          </Button>
        </DialogActions>
      </Dialog>
                           
                                </Box></Grid>
                    </Grid>

                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>

    );
};

const Maps = (props) =>  {
    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
              bootstrapURLKeys={{ key: "AIzaSyDaPkjq-3ILkGcaY3UjrD7jsA5ZVbzqr_A" }}
              defaultCenter={props.center}
              defaultZoom={props.zoom}
          >
            <CustomMarker lat={45.5017} lng={-73.5673} name={"Nathan Trembley"} hasCar={true} maxDistance={"20 KM"} categories={"Mobility, Shopping, Delivery"}/>
            <CustomMarker lat={45.6017} lng={-73.3673} name={"Susan"} hasCar={false} maxDistance={"5 KM"} categories={"Education, Elderly care"}/>
            <CustomMarker lat={45.7017} lng={-73.7673} name={"Angela"} hasCar={true} maxDistance={"30 KM"} categories={" Elderly care, Shopping"}/>

          </GoogleMapReact>
        </div>
    );
};

Maps.defaultProps = {
  center: { lat: 45.5017, lng: -73.5673 },
  zoom: 13
};

export default Maps;
