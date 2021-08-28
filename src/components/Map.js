import React, {useState} from 'react';
import { Paper } from '@material-ui/core'; 
import { FaLocationArrow } from 'react-icons/fa';
import { colors } from '../style/colors';
// material
import { Typography, makeStyles, Grid } from '@material-ui/core';
// google map imports
import { GoogleMap, withGoogleMap, Marker, withScriptjs, InfoWindow } from 'react-google-maps';
// context
import { useGlobalContext } from '../context/mainContext';
// primary location api key 
const LocationAPIKey = 'AIzaSyBNmrQqM7LpnhZ30xQ0HsM2YH6jDXlYQec';

const Map = ()=>{
    const { checkSize } = useGlobalContext();
    // styles 
    const useStyles= makeStyles(theme=>({
        root:{
          marginTop: theme.spacing(6),
        },
        // title block
        titleBlock:{
          display:'flex',
          transition: '850ms',
          maxWidth: checkSize ? '200px': '300px',
          borderTopRightRadius: '50px',
          borderBottomRightRadius: '50px',
          background: colors.darkPink2,
          opacity: '0.7',

      },
      title:{
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
    
    // map
    const MapWithAMarker = ()=>{
      return(
        <GoogleMap
        defaultZoom={17}
        defaultCenter={{ lat: location.lat, lng: location.long }}
        >
        <Marker position={{lat:location.lat, lng:location.long}}
          onClick={()=>setSelectLocation(true)}
        />
        {
          selectLocation && 
          <InfoWindow
            position={{ lat: location.lat, lng: location.long }}
            onCloseClick={() => {
              setSelectLocation(null);
            }}
          >
          Details
        </InfoWindow>
        }

      </GoogleMap>
      )
    }
    // google map script 
    const WrappedMap = withScriptjs(withGoogleMap(MapWithAMarker));
    
    return (
    <div style={{marginTop: '300px'}}>
        <div className={classes.titleBlock}>
            <FaLocationArrow className={classes.mapIcon}/>
            <Typography variant={checkSize ? 'h5': 'h4'} className={classes.title}>アクセス</Typography>
        </div>
        <Paper elevation={3} className={classes.root}>
          <Grid container alignItems='center' style={{padding: '10px'}}>
            <Grid item xs={12} lg={6} md={6}>
              <WrappedMap
                  googleMapURL= {`https://maps.googleapis.com/maps/api/js?key=${LocationAPIKey}&v=3.exp&libraries=geometry,drawing,places`}
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: `400px` }} />}
                  mapElement={<div style={{ height: `100%` }} />}
                  />
            </Grid>
            <Grid item xs={12} lg={6} md={6}>

            </Grid>
          </Grid>
        </Paper>
    </div>
    )
}
export default Map;