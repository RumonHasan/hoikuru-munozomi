import React, {useState} from 'react';
import { Carousel } from 'react-responsive-carousel';
import { FaChild } from 'react-icons/fa';
import "react-responsive-carousel/lib/styles/carousel.css";
import Fade from 'react-reveal/Fade';
// material ui 
import { Paper, Grid, makeStyles, Card, CardHeader,CardActions, CardMedia, CardContent, Typography } from '@material-ui/core';
// images
import room1 from '../images/room1.JPG';
import childPlay from '../images/childPlay.png';
// global context
import { useGlobalContext } from '../context/mainContext';
// text
import { homeData } from '../services/data';
// colors
import { colors } from '../style/colors';

const AboutHome = ()=>{
    const {checkSize, checkSizeMid} = useGlobalContext();
    const useStyles = makeStyles(theme=>({
        aboutContainer:{
            background: colors.bgBlue,
            paddingTop: theme.spacing(4),
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            position: 'relative',
        },
        root:{ // paper container
            padding: theme.spacing(5),
        },
        roomImages:{
            width: '80%',
            height: '80%',
            objectFit:'cover',
            borderRadius: '30px',
            cursor: 'pointer',  
            '&:hover':{
                transform: 'scale(1.03)',
                transition: '850ms',
            }
        },
        picGrid:{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
        },
        // about information design 
        aboutGrid:{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
        },
        carousel:{
            display: 'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column',
            transition: '850ms',
        },
        greetings:{
            fontWeight: 'bold',
            color: colors.lightPink,
            paddingBottom: theme.spacing(2),
            fontSize:'clamp(2.5vw, 7vw, 7vw)',
        },
        greetingText:{
            color: colors.primaryWhite,
            transition: '850ms',
            fontSize:checkSize ? '20px': '30px',
        },
        // title block
        titleBlock:{
            display:'flex',
            transition: '850ms',
            maxWidth: checkSize ? '200px': '300px',
            borderTopRightRadius: '50px',
            borderBottomRightRadius: '50px',
            background: colors.mainBlue,
            marginBottom: theme.spacing(8),

        },
        title:{
            fontWeight:'bold',
            padding: theme.spacing(2),
            transition: '850ms',
            color: colors.lightPink,
        },
        // water mark
        imgBox:{
            position:'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        },
        imgChild:{
            opacity: '0.3',
            width: '100%',
        }
    
    }))
    const classes = useStyles();

    return (
        <div className={classes.aboutContainer}>
          <div className={classes.imgBox}>
                <img src={childPlay} alt={childPlay} className={classes.imgChild}
                />
            </div>
            <Fade left>
                <div className={classes.titleBlock}>
                    <Typography variant={checkSize ? 'h4': 'h2'} className={classes.title}>Greetings</Typography>
                </div>
            </Fade>
     
            <div className={classes.root}>
            <Fade left>
                <Grid container alignItems='center'>
                    <Grid item xs={12} lg={6} md={6} mid={6}  className={classes.picGrid}>
                        <img src={room1} alt={room1}  className={classes.roomImages}/>
                    </Grid>
                    <Grid item xs={12} lg={6} md={6} mid={6} className={classes.aboutGrid}>
                        <div style={{display:'flex', justifyContent:'center', flexDirection:'column', padding:'15px', alignItems:'center'}}>
                            <Typography variant='h3' className={classes.greetings}>{homeData.title}</Typography>
                            <Typography variant='h6' className={classes.greetingText}>
                                {homeData.text}
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Fade>
            </div>
        </div>
    )
}

export default AboutHome;