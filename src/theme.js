
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme(

    {palette:{
        common:{"black":"#000","white":"#fff"},
        background:{"paper":"#fff","default":"#fafafa"},
        primary:{"light":"rgba(211, 101, 62, 1)",
        main:"rgba(204, 76, 29, 1)",
        dark:"rgba(209, 59, 3, 1)",
        contrastText:"#fff"
    },
    
    secondary:{
        light:"rgba(235, 214, 74, 1)",
        main:"rgba(245, 188, 0, 1)",
        dark:"rgba(201, 177, 16, 1)",
        contrastText:"#fff"},
        
        error:{
            light:"#e57373",
            main:"#f44336",
            dark:"#d32f2f",
            contrastText:"#fff"
        },
        text:{
            primary:"rgba(0, 0, 0, 0.87)",
            secondary:"rgba(0, 0, 0, 0.54)",
            disabled:"rgba(0, 0, 0, 0.38)",
            hint:"rgba(0, 0, 0, 0.38)"}
        }
    }


);

export default theme;

