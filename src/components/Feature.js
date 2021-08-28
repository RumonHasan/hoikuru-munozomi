import React, {useState} from 'react';
import { makeStyles, Paper, Grid, Typography } from '@material-ui/core';
import { FaChild } from 'react-icons/fa';
import { colors } from '../style/colors';
import { featureData } from '../services/data';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
// context
import { useGlobalContext } from '../context/mainContext';
import { FormatColorTextSharp } from '@material-ui/icons';

const Feature = ()=>{
    const {checkSize, extraSmall} = useGlobalContext();
    // styles
    const useStyles = makeStyles(theme=>({
        container:{
            background: colors.featureBg,
        },
        root:{
            padding: theme.spacing(5),
            display: 'flex',
            justifyContent:'center',
          

        },
        featureGrid:{
            borderRadius: 30,
            background: colors.featureTitle,
            maxWidth: '1100px',
            opacity: '0.7',
            marginBottom: theme.spacing(10),
            '&:hover':{
                transition: '850ms',
                transform: 'scale(1.03)',
            }

        },
        featureBlock:{
            padding: theme.spacing(3),
        
        },
        // title block
        titleBlock:{
            display:'flex',
            transition: '850ms',
            justifyContent:'center',
            marginTop: theme.spacing(10),
            maxWidth: checkSize ? '300px': '400px',
            borderTopLeftRadius: '50px',
            borderBottomLeftRadius: '50px',
            background: colors.featureTitle,
            right: 0,
            opacity: '0.7',

        },
        title:{
            fontWeight:'bold',
            padding: theme.spacing(2),
            transition: '850ms',
            color: colors.lightPink,
            fontSize: checkSize ? '15px': '30px',
        },
        titleContainer:{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
        },
        featureIcon:{
            fontSize: checkSize ? '50px' :'80px',
            transition:'850ms',
            color: colors.lightPink, 
            padding: theme.spacing(1),
        }
    }))
    const classes = useStyles();
    return (
    <div className={classes.container}>
    <Fade right >
        <div className={classes.titleContainer}>
            <div className={classes.titleBlock}>
                <FaChild className={classes.featureIcon}/>
                <Typography variant={checkSize ? 'h4': 'h2'} className={classes.title}>保育ルームのぞみの特徴</Typography>
            </div>
        </div>
    </Fade>
    <Zoom top>
        <div className={classes.root}>
                <Grid container alignItems='center' className={classes.featureGrid}>
                    {featureData.map((item, index)=>{
                        const {id, text} = item;
                        return(
                            <Grid item key={index} xs={12} lg={6} md={6} className={classes.featureBlock}>
                                <Typography variant='h5' style={{color:colors.primaryWhite}}>
                                    {id}. {text}
                                </Typography>
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
            </Zoom>
        </div>
    )
}

export default Feature;