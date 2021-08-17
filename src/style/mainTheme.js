import { createTheme } from "@material-ui/core";
import { colors } from "./colors";
const MainColorThemes = ()=>{
    const muiTheme = createTheme({
        palette:{
            type:'light',
            primary:{
                main: colors.mainBlue
            },
        },
        overrides:{
            MuiAppBar:{
                colorPrimary:{
                    backgroundColor: colors.primaryWhite
                },
            },
        }
    })
    muiTheme.typography.h3 = {
        fontSize: '1.2rem',
        '@media (min-width:600px)': {
          fontSize: '1.5rem',
        },
        [muiTheme.breakpoints.up('md')]: {
          fontSize: '2rem',
        },
      };

    // dark theme
    const muiThemeDark = createTheme({
        palette:{
            type:'dark',
            primary:{
                main: colors.mainBlue
            },
        },
        overrides:{
            MuiAppBar:{
                colorPrimary:{
                    backgroundColor: colors.mainBlack
                },
            },
      
        }
    })

    return {
        muiThemeDark,
        muiTheme,
    }
}

export default MainColorThemes;
