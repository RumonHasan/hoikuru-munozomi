import React, {useState} from 'react';
import { Card, CardContent, CardHeader, Paper } from '@material-ui/core'; 
import { FaLocationArrow } from 'react-icons/fa';
import { colors } from '../style/colors';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { address } from '../services/data';
import kid from '../images/kid.png';
import { font } from '../style/font';
// material
import { Typography, makeStyles, Grid } from '@material-ui/core';
// google map imports
import { GoogleMap, Marker, InfoWindow, LoadScript } from '@react-google-maps/api';
// context
import { useGlobalContext } from '../context/mainContext';
// primary location api key 
const LocationAPIKey = 'AIzaSyBNmrQqM7LpnhZ30xQ0HsM2YH6jDXlYQec';

const Map = ()=>{
    const { checkSize } = useGlobalContext();
    // styles 
    const useStyles= makeStyles(theme=>({
        root:{
          marginTop: theme.spacing(10),
          paddingBottom: theme.spacing(15),
        },
        container:{
          background: colors.mapBg,
          position: 'relative',
        },
        // title block
        titleBlock:{
          display:'flex',
          transition: '850ms',
          maxWidth: checkSize ? '200px': '300px',
          borderTopLeftRadius: '50px',
          borderBottomLeftRadius: '50px',
          background: colors.darkPink2,
          opacity: '0.7',
          marginTop: theme.spacing(5),

      },
      titleContainer:{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
      title:{
          fontFamily: font.textFont,
          fontWeight:'bold',
          padding: theme.spacing(2),
          transition: '850ms',
          color: colors.lightPink,
          fontSize: checkSize ? '25px' :'50px',
      },
      mapIcon:{
          fontSize: checkSize ? '35px' :'50px',
          transition:'850ms',
          color: colors.lightPink, 
          padding: theme.spacing(1),
          marginTop: theme.spacing(1)
      },
      // address card designs
      addCard:{
        margin: checkSize ? '50px': '40px',
        borderRadius: '30px',
        zIndex: 10
      },
      imgBox:{
        position:'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: -1,
    },
      imgChild:{
          opacity: '0.7',
          width: '100%',
      }
    }))

    const classes = useStyles();
    const [selectLocation, setSelectLocation] = useState(false);
    // location object
    const location ={
        address: '〒335-0004 埼玉県蕨市中央5-20-23 アネックスアイ102号',
        lat: 35.8219398302284,
        long: 139.6808004207051
    }
    const mapContainerStyle = {
      width:'450px',
      height: '450px',
    }
    const center = {
      lat: 35.8219398302284,
      lng: 139.6808004207051
    }

    
    // map
    const MapWithAMarker = ()=>{
      return(
    <LoadScript 
    googleMapsApiKey={LocationAPIKey}>
        <GoogleMap mapContainerStyle={mapContainerStyle}
        zoom={17} center={center}>
                <Marker
                  position={{lat: 35.8219398302284, lng: 139.6808004207051}}/>
        </GoogleMap>
    </LoadScript>

      )
    }
    
    return (
    <div id='アクセス' className={classes.container}>

            <div className={classes.imgBox}>
                <img src={kid} alt={kid} className={classes.imgChild}
                />
            </div>

        <Fade right>
          <div className={classes.titleContainer}>
              <div className={classes.titleBlock}>
                  <FaLocationArrow className={classes.mapIcon}/>
                  <Typography variant={checkSize ? 'h5': 'h4'} className={classes.title}>アクセス</Typography>
              </div>
            </div>
        </Fade>

      <Zoom top>
        <div className={classes.root}>
          <Grid container alignItems='center' style={{padding: '10px'}}>
            <Grid item xs={12} lg={6} md={6} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
              <MapWithAMarker/>
            </Grid>
            <Grid item xs={12} lg={6} md={6}>
              <Paper elevation={3} className={classes.addCard} style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center', zIndex:10}}>
                    <Typography variant='h4' style={{padding:'20px', fontWeight:'bolder',fontFamily: font.textFont}}>{address.title}</Typography>
                    <Typography variant='h6' style={{padding: '20px', fontWeight:'bolder', fontFamily: font.textFont}}>〒335-0004 埼玉県蕨市中央5-20-23 アネックスアイ102号 <br></br>蕨駅より徒歩1５分<br/>戸田駅より徒歩1５分</Typography>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Zoom>
    </div>
    )
}
export default Map;