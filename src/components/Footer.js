import React from 'react';
import {makeStyles, Typography} from '@material-ui/core';
import { colors } from '../style/colors';
import { font } from '../style/font';

const Footer = () => {
    const useStyles= makeStyles(theme=>({
        root:{
            height: '5vh',
            display: 'flex',
            justifyContent:'center',
            alignItems:'center',
            background: colors.darkPink2
        }
    }))
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant='h6' style={{color:colors.primaryWhite, 
            fontWeight:'bolder', fontFamily: font.textFont}}>@2021 保育ルームのぞみ</Typography>
        </div>
    )
}

export default Footer;
