import React, {useEffect, useState} from "react";

import GoogleMapReact from 'google-map-react';

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
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
import config from "../../config";
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles(styles);

const customMarkerUseStyles = makeStyles((theme) => ({
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


const CustomMarker = ({title, desc, categories}) => {
    const classes = customMarkerUseStyles();

    return (
        <div className={classes.root}>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    className={classes.heading}
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content">

                            <Typography align={'left'}>{title}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography align={'left'}>{desc}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Box alignItems="center" display="flex">
                                <Box>
                                    <LocalOfferIcon/>
                                </Box>
                                <Box m={2}>
                                    <Typography align={'left'}>{categories}</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>

                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>

    );
};

const Maps = (props) => {
    const classes = useStyles();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`${config.url}/help-requests`)
            .then(res => res.json())
            .then(json => {
                setLoading(false);
                setData(json.data);
                console.log(json)
            })
    }, []);
    const children = data.map( item =>
        <CustomMarker key={item.id} lat={item.lat} lng={item.lon} title={item.title} desc={item.description}
                      categories={item.categories.map(c => c.name).join(", ")}/>)
    console.log(children)
    return (
        <div style={{height: '100vh', width: '100%'}}>
            <GoogleMapReact
                bootstrapURLKeys={{key: "AIzaSyDaPkjq-3ILkGcaY3UjrD7jsA5ZVbzqr_A"}}
                defaultCenter={props.center}
                defaultZoom={props.zoom}>

                {
                    children
                }

            </GoogleMapReact>
        </div>
    )
}

Maps.defaultProps = {
    center: {lat: 45.5017, lng: -73.5673},
    zoom: 13
};

export default Maps;
