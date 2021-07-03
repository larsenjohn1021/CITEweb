// import React from 'react'
// import {
//     task,
//     toggleTask,
//     deleteTask
// } from '../private/Privateannouncement'
// import Grid from '@material-ui/core/Grid';
// import { Typography, IconButton } from "@material-ui/core";
// import DeleteIcon from '@material-ui/icons/Delete';
// import { makeStyles } from '@material-ui/core/styles';

// export default function Privatehome() {


//     const useStyles = makeStyles({
//         root: {
//           maxwidth: 750,
//           alignItems: 'center',
//           display: 'flex',
      
//         },
      
      
//         pos: {
//           marginBottom: 12,
//         },
//         taskDone: {
//           textDecoration: "line-through"
//         }
//       });
      
      
      
      

//     const classes = useStyles();


//     return (
//         <div className="HomeAnnouncement">
//             <Grid container justify="center" alignItems="center">
//                 <Typography
//                     key={task.id}
//                     variant="h6"
//                     onClick={() => toggleTask(task.id, task.status)}
//                     className={
//                         task.status === "done" ? classes.taskDone : null
//                     }
//                 >
//                     {task.task}
//                 </Typography>
//                 <IconButton onClick={() => deleteTask(task.id)}>
//                     <DeleteIcon />
//                 </IconButton>
//             </Grid>
//         </div>
//     )
// }




import React from 'react'

export default function Privatehome() {
    return (
        <div>
            <h>home home</h>
        </div>
    )
}
