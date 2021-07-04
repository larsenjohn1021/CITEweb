
import React, { useState, useEffect } from "react";
import firebase from "../firebase"



import Grid from '@material-ui/core/Grid';
import {
  Button,
  TextField,
  CircularProgress,
  Typography,
  IconButton
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import QueueIcon from '@material-ui/icons/Queue';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import HomeAnnouncement from './private/Privatehome'
// import { toggleTask, deleteTask } from './private/Privatehome'

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
// import PostAddIcon from '@material-ui/icons/PostAdd';
import CancelIcon from '@material-ui/icons/Cancel';
// import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
// import Paper from '@material-ui/core/Paper';
// import MuiAlert from '@material-ui/lab/Alert';
// import UploadForm from "../private/Uploadform";

// import ImageGrid from '../private/ImageGrid';
// import Modal from '../private/Modal'

import CloseIcon from '@material-ui/icons/Close';
import UploadForm from "./Uploadform";


// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});





const useStyles = makeStyles((theme) => ({
  root: {
    maxwidth: 750,
    alignItems: 'center',
    display: 'flex',

  },


  pos: {
    marginBottom: 12,
  },
  taskDone: {
    textDecoration: "line-through"
  }
}));






// const useStylespaper = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     '& > *': {
//       margin: theme.spacing(1),
//       width: theme.spacing(60),
//       height: theme.spacing(40),
//     },
//   },
// }));










const db = firebase.firestore();

export default function Privateannouncement() {

  // const classespaper = useStylespaper();

  // const [selectedImg, setSelectedImg] = useState(null);



  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };




  const [del, setDel] = useState(false);

  const delHandler = () => {
    // if agree === true, it will be set to false
    // if agree === false, it will be set to true

    setDel(!del);

    // Don't miss the exclamation mark

  }





  const [delll, setDelll] = React.useState(false);

  const deleteHandler = () => {
    // if agree === true, it will be set to false
    // if agree === false, it will be set to true

    setDelll(!delll);

    // Don't miss the exclamation mark

  }







  const classes = useStyles();






  const [state, setstate] = useState({
    tasks: [],
    userUid: "",
    isLoading: true
  });

  const [payload, setPayload] = useState({
    task: ""
  });

  useEffect(() => {
    const fetchData = () => {
      const currentUser = firebase.auth().currentUser;
      db.collection("users")
        .doc(currentUser.uid)
        .collection("tasks")
        .orderBy("created_at", "desc")
        .onSnapshot((doc) => {
          let taskList = [];
          doc.forEach((task) => {
            taskList.push({ ...task.data(), id: task.id });
          });

          setstate({
            tasks: taskList,
            userUid: currentUser.uid,
            isLoading: false
          });
        });
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    setPayload({ task: e.target.value });
  };

  const addTask = (e) => {
    e.preventDefault();

    db.collection("users")
      .doc(state.userUid)
      .collection("tasks")
      .add({ task: payload.task, status: "pending", created_at: new Date() })
      .then((docRef) => {
        //success
        setPayload({ task: "" });
      })
      .catch((error) => {
        console.error(error);
      });

    handleClose()
  };

  const toggleTask = (docId, status) => {
    let updatedStatus;

    if (status === "done") {
      updatedStatus = "pending";
    } else {
      updatedStatus = "done";
    }
    db.collection("users")
      .doc(state.userUid)
      .collection("tasks")
      .doc(docId)
      .update({ status: updatedStatus })
      .then((doc) => {
        //success
      })
      .catch((err) => {
        //error
      });
  };

  const deleteTask = (docId) => {
    db.collection("users")
      .doc(state.userUid)
      .collection("tasks")
      .doc(docId)
      .delete()
      .then(() => {
        //success
        delHandler()








        //   <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        //   <Alert onClose={handleClose} severity="warning">
        //     Please complete the following!
        //   </Alert>
        // </Snackbar>



      })
      .catch((err) => {
        //error
      });
  };

  if (state.isLoading) {
    return (
      <div className={classes.root}>
        <CircularProgress size={160} />;
      </div>
    );
  }










  return (

    <Card className={classes.root}>
      <CardContent>

        <div className={classes.root}>


          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description">
            <DialogTitle id="alert-dialog-slide-title">{"Create Announcement"}</DialogTitle>
            <DialogContent>

              <UploadForm />

            </DialogContent>

          </Dialog>







          {/* <Button
                onClick={handleClose}
                color="primary">
                <  CancelIcon style={{ fontSize: 28 }} />
                Cancel

              </Button> */}



          {/* 
<DialogActions>
<Button
              onClick={handleClose}
              color="primary">
              <  CloseIcon style={{ fontSize: 28 }} />
              Close

            </Button>
              </DialogActions> */}





          {/* </DialogActions> */}













          <Grid container spacing={3}>
            <Grid item xs>
              <Button
                onClick={handleClickOpen}
                fontSize="100vh"
                style={{ height: '250px', width: '400px', fontSize: "5vh" }}
                id="CreateAnn"
                variant="contained"
                color="secondary">
                Create Announcement <QueueIcon style={{ fontSize: 100 }}
                />
              </Button>
            </Grid>








{/* DELETEBUTTON  DELETEBUTTON DELETEBUTTON DELETEBUTTON DELETEBUTTON DELETEBUTTON */}


            <Dialog
              open={delll}
              TransitionComponent={Transition}
              keepMounted
              onClose={deleteHandler}
              aria-labelledby="alert-dialog-slide-title"
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle id="alert-dialog-slide-title2">{"Delete Announcement"}</DialogTitle>
              <DialogContent>

                
                






              </DialogContent>
              <DialogActions>
                <Button
                  onClick={deleteHandler}
                  color="primary">
                  <CloseIcon style={{ fontSize: 28 }} />
                  Close

                </Button>
              </DialogActions>

            </Dialog>



            <Grid item xs>
              <Button
                onClick={deleteHandler}
                style={{ height: '250px', width: '400px', fontSize: "5vh" }}
                id="DeleteAnn"
                variant="contained"
                color="secondary">
                Delete Announcement <DeleteIcon style={{ fontSize: 100 }}

                />
              </Button>
            </Grid>
          </Grid>




          <Grid container direction="column">
            {state.tasks.map((task) => (
              <React.Fragment key={task.id}>




                <Grid container justify="center" alignItems="center">


                  <Typography
                    key={task.id}
                    variant="h6"
                    onClick={() => toggleTask(task.id, task.status)}
                    className={
                      task.status === "done" ? classes.taskDone : null
                    }
                  >
                    {task.task}
                  </Typography>
                  <IconButton
                    disabled={del}
                    onClick={() => deleteTask(task.id)}>
                    <DeleteIcon />
                  </IconButton>



                </Grid>

                {/* <HomeAnnouncement/> */}
              </React.Fragment>
            ))}
          </Grid>






        </div>
      </CardContent>
    </Card>
  )
}




