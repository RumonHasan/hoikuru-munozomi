import React from 'react';
import { Paper, Grid, Typography, makeStyles, Button, Card } from '@material-ui/core';
// images
import room1 from '../images/room2.JPG';
import homeRose from '../images/homeRose.png';
// context
import { useGlobalContext } from '../context/mainContext';
// header
import Header from './Header';
// typewrite
import Typewriter from 'typewriter-effect';
import Zoom from 'react-reveal/Zoom';
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
                fontSize:'clamp(2.5vw, 6vw, 6vw)',
                fontWeight:'bold',
                transition: '850ms',
                color:colors.secondPink,
                verticalAlign:'bottom',
            },
            headerGrid:{
                padding:theme.spacing(3),
                display: 'flex',
                justifyContent:'center',
       
            },
            aboutButton:{
                background: colors.secondPink,
                margin:theme.spacing(2),
                width: checkSize ? '200px' :'300px',
                '&:hover':{
                    background: colors.lightYellow,
                    transition:'850ms',
                }
            },
            homeBlock:{
                background: colors.darkPink2,
                opacity: '0.7',
                backgroundSize: 'cover',
                position: 'relative',
            },
            homeImg:{
                transition: '850ms',
                opacity: '0.96',
                width: checkSize ? '90%' :'45%',
                marginTop: checkSize && '100px',
            },
            homeRoom:{
                width:'60%' ,
                borderRadius: '50%',
                border: `4px solid ${colors.darkPink}`,
            },
            homeRoomGrid:{
                display: 'flex',
                justifyContent:'center',
            },
            homeGrid:{ // container
                display: 'flex',
                justifyContent: 'center',
                marginTop:checkSize ? '0px': '50px',
            }
        }))
    const classes = useStyles();

    const styles = {
        paperContainer:{
            transition: '850ms',
            width: '100%',
            minHeight: checkSize ? '350px' : '500px',
            display: 'flex',
            justifyContent: 'center',
            marginTop: checkSize ? '200px': '100px',
        }
    }

    return (
        <div className={classes.homeBlock}>
        <Header/>
        <div style={styles.paperContainer}>
            <Grid container  className={classes.homeGrid} alignItems='center' >
                <Grid item xs={12} lg={6} md={6} className={classes.headerGrid}>
                    <div style={{display: 'flex',
                justifyContent:'center',
                alignItems:'center',
                flexDirection:'column',}}>
                        <Typography variant='h2' className={classes.title}>
                        <Typewriter
                            onInit={(typeText)=>{
                            typeText.typeString('ようこそ, 保育ルームのぞみ')
                            .start()
                        }}
                        ></Typewriter>
                        </Typography>
                        <Button className={classes.aboutButton} variant='contained'>保育園概要</Button>
                    </div>

                </Grid>
                <Grid item xs={12} lg={6} md={6} className={classes.homeRoomGrid}>
                    <Zoom>
                    <img src={room1} alt={room1} className={classes.homeRoom}/>
                    </Zoom>
                    
                </Grid>
            </Grid>
        </div>
        <div style={{display:'flex', justifyContent:'center'}}>   
            <img src={homeRose} alt={homeRose} className={classes.homeImg}/>
        </div>
    </div>
    )
}

export default Home;