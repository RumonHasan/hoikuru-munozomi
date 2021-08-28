import React from 'react';
import { makeStyles,Paper, Grid, Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { useGlobalContext } from '../context/mainContext';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { colors } from '../style/colors';
import { FaInfo } from 'react-icons/fa';
import { basicInfo } from '../services/data';

const InfoTable = ()=>{
    const {checkSize, extraSmall} = useGlobalContext();
    const useStyles = makeStyles(theme=>({
        container:{
            background: colors.imageBg,
        },
        // image design
        infoGrid:{
            marginTop: theme.spacing(3),
        },
        //image slider design
        imageSlider:{

        },
        //table:
        tableGrid:{
            padding: theme.spacing(3),
            display: 'flex',
            alignItems:'center',
            marginBottom: theme.spacing(10),
        },
        tableContainer:{
            padding:theme.spacing(4),
            borderRadius: '30px',
        },
        table:{
        
        },
        // title block
        titleBlock:{
            display:'flex',
            transition: '850ms',
            maxWidth: checkSize ? '200px': '300px',
            borderTopRightRadius: '50px',
            borderBottomRightRadius: '50px',
            background: colors.imageTitleBlock,
            marginBottom: theme.spacing(8),
            padding: theme.spacing(2),
            
        },
        title:{
            fontWeight:'bold',
            transition: '850ms',
            color: colors.lightPink,
            fontSize: checkSize ? '30px': '40px',
        },
        infoIcon:{

        },
    })) 
    const classes = useStyles();

    return(
        <div className={classes.container}>
            <div style={{paddingTop:'50px'}}>
                <Fade left>
                    <div className={classes.titleBlock}>
                        <FaInfo className={classes.infoIcon}/>
                        <Typography  className={classes.title}>保育園概要</Typography>
                    </div>
                </Fade>
            </div>

            <Grid container alignItems='center' className={classes.infoGrid}>
            <Zoom bottom>
                <Grid item xs={12} lg={6} md={6}  className={classes.tableGrid}>
                    <TableContainer component={Paper} className={classes.tableContainer}>
                        <Table className={classes.table} aria-label='simple table'>
                            <TableHead>
                                {basicInfo.map((item, index)=>{
                                    const {name, text} = item;
                                    return (
                                        <TableRow key={index} >
                                            <TableCell style={{fontSize:checkSize? '15px' :'20px'}}>{name}</TableCell>
                                            <TableCell style={{fontSize:checkSize? '15px' :'20px'}}>{text}</TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableHead>
                        </Table>
                    </TableContainer>
                </Grid>
                </Zoom>
                <Grid item xs={12} lg={6} md={6} className={classes.imageSlider}>
                    
                </Grid>
            </Grid>
        </div>
    )
}

export default InfoTable;