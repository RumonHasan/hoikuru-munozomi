import React from 'react';
import { makeStyles,Paper, Grid, Typography,Button, Table, TableContainer, TableHead, TableRow, TableCell} from '@material-ui/core';
import { useGlobalContext } from '../context/mainContext';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { colors } from '../style/colors';
import { FaInfo } from 'react-icons/fa';
import { basicInfo } from '../services/data';
import Slider from 'react-slick';
import '../style/imageSlider.css';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
// images
import room1 from '../images/room1.JPG';
import room2 from '../images/room2.JPG';
import room3 from '../images/room3.JPG';


const InfoTable = ()=>{
    const {checkSize, openDialogBox} = useGlobalContext();
    const useStyles = makeStyles(theme=>({
        container:{
            background: colors.imageBg,
        },
        // image design
        infoGrid:{
            marginTop: theme.spacing(3),
            paddingBottom: checkSize ? undefined  : theme.spacing(7),

        },
        //image slider design
        imageSlider:{
            paddingRight: theme.spacing(5),
            paddingLeft: theme.spacing(5),
        },
        image:{
            width: '100%',
            borderRadius: '30px',
            cursor: 'pointer',
            outline: 'none',
        },
        sliderApp:{
            margin: '30px',
        },
        //table:
        tableGrid:{
            paddingRight: theme.spacing(3),
            paddingLeft: theme.spacing(3),
            display: 'flex',
            alignItems:'center',
     
        },
        tableContainer:{
            padding:theme.spacing(3),
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

    // image slider 
    const NextArrow = ({ onClick }) => {
        return (
          <div className="arrow next" onClick={onClick} style={{fontSize: checkSize ? '25px': '35px'}}>
            <FaArrowRight style={{color:colors.imageTitleBlock}}/>
          </div>
        );
      };
      const PrevArrow = ({ onClick }) => {
        return (
          <div className="arrow prev" onClick={onClick} style={{fontSize: checkSize ? '25px': '35px'}}>
            <FaArrowLeft style={{color:colors.imageTitleBlock}} />
          </div>
        );
      };
    const images = [
        {
          original: room1,
        },
        {
          original: room2,
        },
        {
          original: room3,
        },
      ];
    const settings = {
      autoPlay: true,
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: true,
      prevArrow: <PrevArrow/>,
      nextArrow: <NextArrow/>,
    }

    return(
        <div className={classes.container} id='保育園概要'>
            <div style={{paddingTop:'50px'}}>
                <Fade left>
                    <div className={classes.titleBlock}>
                        <FaInfo className={classes.infoIcon}/>
                        <Typography  className={classes.title}>保育園概要</Typography>
                    </div>
                </Fade>
            </div>

            <Zoom bottom>
                <Grid container alignItems='center' className={classes.infoGrid}>
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
                    <Grid item xs={12} lg={6} md={6} className={classes.imageSlider}>
                        <div className={classes.sliderApp} >
                            <Typography variant='h2' style={{textAlign:'center', 
                            color:colors.imageTitleBlock, fontWeight:'bold', padding: '10px'}}>写真</Typography>
                            <Slider {...settings}>
                                {images.map((image, index)=>{
                                    const {original} = image;
                                    return (
                                        <div key={index}>
                                        <Button onClick={openDialogBox}>
                                            <img src={original} alt={original}  className={classes.image}/>
                                        </Button>
                                           
                                        </div>
                                    )
                                })}
                            </Slider>
                        </div>
                    </Grid>
                </Grid>
            </Zoom>
        </div>
    )
}

export default InfoTable;