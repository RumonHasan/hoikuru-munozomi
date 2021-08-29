import React, {useState} from 'react';
import { AppBar, Toolbar, Grid, Drawer as MuiDrawer, makeStyles, Typography, List, ListItem, ListItemIcon, Button, ListItemText, Card, CardHeader, } from '@material-ui/core';
import { useGlobalContext } from '../context/mainContext';
import { FaBars } from 'react-icons/fa';
import { FaSearchLocation } from 'react-icons/fa';
// datas
import { menuItems, Title } from '../services/data';
// colors
import { colors } from '../style/colors';
import { Link } from '@material-ui/core';

const Header = ()=>{
    //context 
    const {openDrawer, openDrawerFunc, closeDrawerFunc, checkSize} = useGlobalContext();
    const useStyles = makeStyles(theme=>({
        root:{
    
        },
        locationButton:{
            fontSize:checkSize ? '25px': '30px',
            transition: 'opacity 1s',
            color:colors.lightPink,
        },
        headerButton:{
            fontSize:checkSize ? '25px': '30px',
            transition: '850ms',
            color:colors.lightPink,
        },
        List:{
            display:'flex',
            justifyContent:'center',
            flexDirection:'column',
            padding: theme.spacing(4),
        },
        ListButton:{
            padding: theme.spacing(1.5),
            background: colors.secondPink,
            margin: theme.spacing(1.5),
            width: checkSize ? '260px' :'280px',
            '&:hover':{
                background: colors.lightYellow,
            }
        },
        headerTitle:{
            fontSize:checkSize ? '18px': '25px',
            transition: '850ms',
            color:colors.lightPink,
        },
        cardHeader:{
            '& .MuiCardHeader-title':{
                color:colors.darkPink1,
            }
        },// app bar design 
        drawer:{
            '& .MuiPaper-root':{
                background: colors.darkPink2,
            }
        }
    }))
    // style classes
    const classes = useStyles();
    // drawer anchor 
    const [anchor, setAnchor] = useState('right');
    // map hover 
    const [mapText, setMapText] = useState(false);

    return (
        <AppBar position='sticky' style={{ background: 'transparent', boxShadow: 'none'}}>
            <Toolbar> 
                <Grid container alignItems='center' justifyContent='center'>
                    <Grid item xs={6}>
                        <Typography variant='h3' className={classes.headerTitle}>{Title}</Typography>
                    </Grid>

                    <Grid item sm></Grid> {/*empty item*/}

                    <Grid item xs={6} style={{display:'flex', justifyContent:'flex-end' }}>
                        <Link href='#アクセス'><Button className={classes.locationButton} onMouseEnter={()=>setMapText(true)} onMouseLeave={()=>setMapText(false)}>{mapText ? 'アクセス' :<FaSearchLocation/>}</Button></Link>
                        <Button className={classes.headerButton} onClick={openDrawerFunc}><FaBars/></Button>
                        <MuiDrawer anchor={anchor} open={openDrawer} onClose={closeDrawerFunc} className={classes.drawer}>
                            <Card>
                                <CardHeader title='メインメニュー'
                                    className={classes.cardHeader}
                                />
                            </Card>
                            <List className={classes.List}>
                                {menuItems.map((item,index)=>{
                                    const {label, icon} = item;
                                    const drawerClose = ()=>{
                                        closeDrawerFunc()
                                    }
                                    return(
                                        <Link href={'#'+label}>
                                            <Button style={{fontSize:'23px'}} onClick={drawerClose} className={classes.ListButton} color='primary' key={index} variant='contained'>
                                                <ListItemIcon style={{fontSize:'25px', color:colors.menuBlack}}>{icon}</ListItemIcon>
                                                <ListItemText style={{fontSize:'26px', color:colors.mainBlack}} primary={label}/>
                                            </Button>
                                        </Link>
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