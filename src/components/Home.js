import React from 'react';
import { Paper, Grid, Typography, makeStyles, Button } from '@material-ui/core';
// images
import room1 from '../images/room2.JPG'
// context
import { useGlobalContext } from '../context/mainContext';
// header
import Header from './Header';
// typewrite
import Typewriter from 'typewriter-effect';
// title & color
import { Title } from '../services/data';
import { colors } from '../style/colors';

const Home = ()=>{
    const {checkSize} = useGlobalContext();
        // material styles
        const useStyles = makeStyles(theme=>({
            title:{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                position: 'relative',
                left: '50%',
                transform: 'translate(-50%, 0)',
                fontSize:'clamp(2.5vw, 5vw, 6vw)',
                fontWeight:'bold',
                transition: '850ms',
                color:colors.mainYellow,
            },
            headerGrid:{
                padding:theme.spacing(5),
                display: 'flex',
                justifyContent:'center',
                alignItems:'center',
                flexDirection:'column',
            },
            aboutButton:{
                background: colors.mainYellow,
                margin:theme.spacing(2),
                width: checkSize ? '200px' :'300px',
                '&:hover':{
                    background: colors.mainYellow,
                    transition:'850ms',
                }
            }
        }))
    const classes = useStyles();

    const styles = {
        paperContainer:{
            backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ),url(${room1})`,
            transition: '850ms',
            backgroundSize: 'cover',
            width: '100%',
            minHeight: checkSize ? '350px' : '500px',
        }
    }

    return (
        <div style={styles.paperContainer}>
            <Header/>
            <Grid container alignItems='center' style={{display:'flex', justifyContent:'center',
            flexDirection:'column', alignItems:'center', marginTop:'30px'}} >
                <Grid item xs={12} className={classes.headerGrid}>
                    <Typography variant='h2' className={classes.title}>
                    <Typewriter
                        onInit={(typeText)=>{
                        typeText.typeString('ようこそ, 保育儿一么の芒众概要')
                        .start()
                    }}
                    ></Typewriter>
                    </Typography>
                    <Button className={classes.aboutButton} variant='contained'>保育園概要</Button>
                </Grid>
            </Grid>
   
        </div>
    )
}

export default Home;