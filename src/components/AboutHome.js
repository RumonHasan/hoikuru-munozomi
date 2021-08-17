import React, {useState} from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.css";
// material ui 
import { Paper, Grid, makeStyles } from '@material-ui/core';
// images
import room1 from '../images/room1.JPG';
import room2 from '../images/room2.JPG';
import room3 from '../images/room3.JPG';
// global context
import { useGlobalContext } from '../context/mainContext';

const useStyles = makeStyles(theme=>({
    root:{
        padding: theme.spacing(5),
        marginTop: theme.spacing(5),
    },
    roomImages:{
        width: '100%',
        height: '100%',
        objectFit:'cover',
    },
    picGrid:{
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
    }

}))

const AboutHome = ()=>{
    const {checkSize} = useGlobalContext();
    const classes = useStyles();
    // image states
    const images = [room1,room2,room3];
    const [imageIndex, setImageIndex] = useState(0);

    return (
            <Paper classes={{root:classes.root}}>
                <Grid container alignItems='center'>
                    <Grid item xs={checkSize ? 12 : 6} className={classes.picGrid}>
                        <Carousel autoPlay={true} infiniteLoop={true} className={classes.carousel}>
                            {images.map((image, index)=>{
                                    return (
                                        <img src={image} alt={image} key={index} className={classes.roomImages}/>
                                    )
                                })}
                        </Carousel>
                    </Grid>
                    <Grid item xs={checkSize ? 12 : 6}>

                    </Grid>
                </Grid>
            </Paper>
    )
}

export default AboutHome;