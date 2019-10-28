import React, { Component } from 'react';
import Gif from '../../Assets/hat.gif'
import { withStyles } from '@material-ui/styles';
import styles from '../../Styles/MicrositeCreatorStyle';
import Typography from '@material-ui/core/Typography';

const translations = window.props.translations

const LoadingPage = (props)=>{
    return(
        <div className={props.classes.LoadWrapper}>
            <Typography variant="h4" gutterBottom className={props.classes.stepTitle}>
                {translations.loading || "And now let the magic begin..."}
            </Typography>
            <img style={{maxWidth:500}} src={Gif}/>
        </div>
    )
}

export default withStyles(styles)(LoadingPage)