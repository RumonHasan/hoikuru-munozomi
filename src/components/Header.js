import React, {useState} from 'react';
import { AppBar, Toolbar, Grid, Drawer as MuiDrawer, makeStyles, Typography, List, ListItem, ListItemIcon, Button, ListItemText, } from '@material-ui/core';
import { useGlobalContext } from '../context/mainContext';
import { FaBars } from 'react-icons/fa';
import { FaSearchLocation } from 'react-icons/fa';
// datas
import { menuItems, Title } from '../services/data';
// colors
import { colors } from '../style/colors';

const Header = ()=>{
    //context 
    const {openDrawer, openDrawerFunc, closeDrawerFunc, checkSize} = useGlobalContext();
    const useStyles = makeStyles(theme=>({
        root:{
    
        },
        locationButton:{
            fontSize:checkSize ? '25px': '30px',
            transition: '850ms',
            color:colors.mainYellow,
        },
        headerButton:{
            fontSize:checkSize ? '25px': '30px',
            transition: '850ms',
            color:colors.mainYellow,
        },
        List:{
            display:'flex',
            justifyContent:'center',
            flexDirection:'column',
            padding: theme.spacing(4),
        },
        ListButton:{
            padding: theme.spacing(1.5),
        },
        headerTitle:{
            fontSize:checkSize ? '18px': '25px',
            transition: '850ms',
            color:colors.mainYellow,
        }
    }))
    // style classes
    const classes = useStyles();
    // drawer anchor 
    const [anchor, setAnchor] = useState('right');

    return (
        <AppBar position='sticky' style={{ background: 'transparent', boxShadow: 'none'}}>
            <Toolbar> 
                <Grid container alignItems='center' justifyContent='center'>
                    <Grid item xs={6}>
                        <Typography variant='h3' className={classes.headerTitle}>{Title}</Typography>
                    </Grid>

                    <Grid item sm></Grid> {/*empty item*/}

                    <Grid item xs={6} style={{display:'flex', justifyContent:'flex-end' }}>
                        <Button className={classes.locationButton}><FaSearchLocation/></Button>
                        <Button className={classes.headerButton} onClick={openDrawerFunc}><FaBars/></Button>
                        <MuiDrawer anchor={anchor} open={openDrawer} onClose={closeDrawerFunc}>
                            <List className={classes.List}>
                                {menuItems.map((item,index)=>{
                                    const {label, icon} = item;
                                    return(
                                        <Button style={{fontSize:'23px'}} className={classes.ListButton} color='primary' key={index} >
                                            <ListItemIcon style={{fontSize:'25px', color:colors.menuBlue}}>{icon}</ListItemIcon>
                                            <ListItemText style={{fontSize:'25px'}} primary={label}/>
                                        </Button>
                                    )
                                })}
                            </List>
                        </MuiDrawer>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header;