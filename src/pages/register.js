// import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
// import firebase from "../firebase"
// import "firebase/firestore";
// import { TextField } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import { Button } from "@material-ui/core";
// import Grid from '@material-ui/core/Grid';
// import Container from '@material-ui/core/Container';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import FormControl from '@material-ui/core/FormControl';
// import InputLabel from '@material-ui/core/InputLabel';
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';
// import 'date-fns';
// import DateFnsUtils from '@date-io/date-fns';
// import {
//     MuiPickersUtilsProvider,

//     KeyboardDatePicker,
// } from '@material-ui/pickers';
// import citelogoT from '../images/citelogoT.png';




// import { withStyles } from '@material-ui/core/styles';
// import Dialog from '@material-ui/core/Dialog';
// import MuiDialogTitle from '@material-ui/core/DialogTitle';
// import MuiDialogContent from '@material-ui/core/DialogContent';
// import MuiDialogActions from '@material-ui/core/DialogActions';
// import Typography from '@material-ui/core/Typography';


// import Snackbar from '@material-ui/core/Snackbar';
// import MuiAlert from '@material-ui/lab/Alert';


// function Alert(props) {
//     return <MuiAlert elevation={6} variant="filled" {...props} />;
// }
// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: "flex",
//         flexDirection: "column",
//         height: "1000px",
//         justifyContent: "center",
//         alignItems: "center",
//         width: '100%',
//         '& > * + *': {
//             marginTop: theme.spacing(2),
//         },
//     },
//     avatar: {
//         margin: theme.spacing(1),
//         backgroundColor: theme.palette.secondary.main,
//     },




// }));



// const DialogTitle = withStyles(useStyles)((props) => {
//     const { children, classes, onClose, ...other } = props;
//     return (
//         <MuiDialogTitle disableTypography className={classes.root} {...other}>
//             <Typography variant="h6">{children}</Typography>
//         </MuiDialogTitle>
//     );
// });

// const DialogContent = withStyles((theme) => ({
//     root: {

//         padding: theme.spacing(2),
//     },
// }))(MuiDialogContent);

// const DialogActions = withStyles((theme) => ({
//     root: {
//         margin: 0,
//         padding: theme.spacing(1),
//     },
// }))(MuiDialogActions);


// export default function Register() {



//     const [open, setOpen] = React.useState(false);


//     const handleClickOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };


//     const [birthDate, setbirthDate] = React.useState(new Date('2014-08-18T21:11:54'));

//     const handleDateChange = (date) => {
//         setbirthDate(date);
//     };


//     const classes = useStyles();



//     const [openwarn, setOpenwarn] = React.useState(false);

//     const handleClickwarn = () => {
//         setOpenwarn(true);
//     };

//     const handleClosewarn = (event, reason) => {
//         if (reason === 'clickaway') {
//             return;
//         }

//         setOpenwarn(false);
//     };

//     const [openmatch, setOpenmatch] = React.useState(false);

//     const handleClickmatch = () => {
//         setOpenmatch(true);
//     };

//     const handleClosematch = (event, reason) => {
//         if (reason === 'clickaway') {
//             return;
//         }

//         setOpenmatch(false);
//     };






//     const [values, setvalues] = useState({

//         firstName: "",
//         middleName: "",
//         lastName: "",
//         birthDate: "",
//         course: "",
//         studentID: "",
//         PhoneNumber: "",

//         email: "",
//         password: "",
//         confirmpassword: "",


//     });



//     const handleChange = (prop) => (e) => {
//         setvalues({ ...values, [prop]: e.target.value });
//     };




//     const [agree, setAgree] = useState(false);

//     const checkboxHandler = () => {
//         // if agree === true, it will be set to false
//         // if agree === false, it will be set to true

//         setAgree(!agree);

//         // Don't miss the exclamation mark

//     }

//     const [agreecheckbox, setAgreecheckbox] = useState(false);



//     const agreecheckboxHandler = () => {
//         setOpen(false);
//         setAgreecheckbox(!agreecheckbox);

//     }

//     const registerbtn = (e) => {
       
//         e.preventDefault();

//         const firestore = firebase.database().ref("User Information");
//         let data = {
//             FirstName: values.firstName,
//             MiddleName: values.middleName,
//             LastName: values.lastName,
//             StudentID: values.studentID,
//         };
//         firestore.push(data);


//         if (!values.email || !values.password || !values.confirmpassword || !values.firstName || !values.lastName || !values.studentID) {
//             handleClickwarn()
//         }
//         else if (values.password !== values.confirmpassword) {
//             handleClickmatch()
//         }
//         else {
//             // firebase

//             firebase
//                 .auth()

//                 .createUserWithEmailAndPassword(values.email, values.password)
//                 .then((signedInUser) => {

//                     alert("Registered and signed in with" + signedInUser.user.email);

//                 })
//                 .catch((error) => {
//                     alert(error.message);
//                     // ..
//                 });


//         }

//     }





//     return (

//         <Container component="main" maxWidth="xs" >
//             <CssBaseline />

//             <div className={classes.root}>
//             <Snackbar open={openwarn} autoHideDuration={6000} onClose={handleClosewarn}>
//                     <Alert onClose={handleClosewarn} severity="warning">
//                         Please complete the following!
//                     </Alert>
//                 </Snackbar>


//                 <Snackbar open={openmatch} autoHideDuration={6000} onClose={handleClosematch}>
//                     <Alert onClose={handleClosematch} severity="error">
//                         Password do not match!
//                     </Alert>
//                 </Snackbar>

//                 <Grid align="center">
//                     <img src={citelogoT} alt="" height="160px" />

//                     <h3>Get started</h3>
//                     <h1>Create a new Account</h1>
//                 </Grid>
//                 <Grid container spacing={2}>
//                     <Grid item xs={12} sm={6}>
//                         <TextField
//                             id="FirstName"
//                             required
//                             label="First Name"
//                             variant="outlined"
//                             value={values.firstName}
//                             onChange={handleChange("firstName")}
//                             fullWidth
//                         />

//                     </Grid>

//                     <Grid item xs={12} sm={6}>
//                         <TextField
//                             id="LastName"
//                             required
//                             label="Last Name"
//                             variant="outlined"
//                             value={values.lastName}
//                             onChange={handleChange("lastName")}
//                             fullWidth
//                         />

//                     </Grid>
//                     <Grid item xs={12} sm={6}>

//                         <TextField
//                             id="MiddleName"
//                             label="Middle Name"
//                             variant="outlined"
//                             value={values.middleName}
//                             onChange={handleChange("middleName")}
//                             fullWidth
//                         />

//                     </Grid>
//                     <Grid item xs={12} sm={6}>

//                         <MuiPickersUtilsProvider utils={DateFnsUtils}>
//                             <Grid container justify="space-around">
//                                 <KeyboardDatePicker
//                                     margin="normal"
//                                     id="birthdate"
//                                     label="Birth date"
//                                     format="MM/dd/yyyy"
//                                     value={birthDate}
//                                     onChange={handleDateChange}
//                                     KeyboardButtonProps={{
//                                         'aria-label': 'change date',
//                                     }}
//                                 />
//                             </Grid>
//                         </MuiPickersUtilsProvider>
//                     </Grid>

//                     <Grid item xs={12}>

//                         <FormControl variant="outlined" className={classes.formControl} fullWidth required>
//                             <InputLabel id="Course">Course</InputLabel>
//                             <Select
//                                 labelId="Course"
//                                 id="Course"
//                                 value={values.course}
//                                 onChange={handleChange("course")}
//                                 label="Course"

//                             >

//                                 <MenuItem value={"bscoe"}>Bachelor of Science in Computer Engineering</MenuItem>
//                                 <MenuItem value={"bsie"}>Bachelor of Science in Industrial Engineering</MenuItem>
//                                 <MenuItem value={"bsit"}>Bachelor of Science in Information Technology</MenuItem>
//                             </Select>
//                         </FormControl>
//                     </Grid>



//                     <Grid item xs={12} sm={6}>
//                         <TextField
//                             id="StudentID"
//                             type="number"
//                             required
//                             label="Student ID"
//                             variant="outlined"
//                             value={values.studentID}
//                             onChange={handleChange("studentID")}
//                             fullWidth
//                         />


//                     </Grid>
//                     <Grid item xs={12} sm={6}>
//                         <TextField
//                             id="Phone Number"
//                             type="number"
//                             required
//                             label="Phone Number"
//                             variant="outlined"
//                             value={values.PhoneNumber}
//                             onChange={handleChange("PhoneNumber")}
//                             fullWidth
//                         />


//                     </Grid>
//                     <Grid item xs={12} >
//                         <TextField
//                             id="email"
//                             required
//                             label="email"
//                             variant="outlined"
//                             value={values.email}
//                             onChange={handleChange("email")}
//                             fullWidth
//                         />

//                     </Grid>
//                     <Grid item xs={12}>
//                         <TextField
//                             id="password"
//                             type="password"
//                             required
//                             label="password"
//                             variant="outlined"
//                             value={values.password}
//                             onChange={handleChange("password")}
//                             fullWidth
//                         />

//                     </Grid>
//                     <Grid item xs={12}>
//                         <TextField
//                             id="confirmpassword"
//                             type="password"
//                             required
//                             label="confirmpassword"
//                             variant="outlined"
//                             value={values.confirmpassword}
//                             onChange={handleChange("confirmpassword")}
//                             fullWidth
//                         />
//                     </Grid>


//                     <Grid item xs={12} sm={1}>




//                         <FormControlLabel
//                             control={<Checkbox color="primary" onChange={checkboxHandler} defaultChecked={false} />}
//                             // label="I agree to the " 

//                             disabled={!agreecheckbox} />
//                     </Grid>
//                     <Grid item xs={12} sm={11}>
//                         <Button
//                             style={{ fontSize: 16 }}
//                             onClick={handleClickOpen}>
//                             I agree to the Terms and Condition
//                         </Button>

//                     </Grid>
//                 </Grid>
//                 <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
//                     <DialogTitle id="customized-dialog-title" onClose={handleClose}>
//                         <h3> Terms and Condition</h3>
//                     </DialogTitle>
//                     <DialogContent dividers>
//                         <Typography gutterBottom>
//                             1. Sample Terms and Condition Sample Terms and Condition Sample
//                             Terms and Condition Sample Terms and Condition Sample Terms and Condition
//                             Sample Terms and Condition Sample Terms and Condition Sample Terms and Condition
//                         </Typography>
//                         <Typography gutterBottom>
//                             2. Sample Terms and Condition Sample Terms and Condition Sample
//                             Terms and Condition Sample Terms and Condition Sample Terms and Condition
//                             Sample Terms and Condition Sample Terms and Condition Sample Terms and Condition
//                         </Typography>
//                         <Typography gutterBottom>
//                             3. Sample Terms and Condition Sample Terms and Condition Sample
//                             Terms and Condition Sample Terms and Condition Sample Terms and Condition
//                             Sample Terms and Condition Sample Terms and Condition Sample Terms and Condition
//                         </Typography>
//                     </DialogContent>
//                     <DialogActions>
//                         <Button autoFocus onClick={agreecheckboxHandler} color="primary">
//                             I Agree
//                         </Button>
//                     </DialogActions>
//                 </Dialog>

//                 <Button

//                     disabled={!agree}
//                     onClick={registerbtn}
//                     variant="contained"
//                     color="secondary"
//                     fullWidth>
//                     Sign up
//                 </Button>


          
//                 <p>Already have an Account?
//                     <Link to='/signin' style={{ textDecoration: 'none', color: 'blue' }}>
//                         SIGN IN
//                     </Link>
//                 </p>

//             </div>

//         </Container>

//     )
// }
