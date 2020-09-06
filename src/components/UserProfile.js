import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green,red,yellow} from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PostAddIcon from '@material-ui/icons/PostAdd';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  depositContext: {
    flex: 1,
  },
  root1: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  green: {
    color: '#fff',
    backgroundColor: green[500],
  },
  red: {
    color: '#fff',
    backgroundColor: red[500],
  },
  yellow: {
    color: '#fff',
    backgroundColor: yellow[500],
  },
  add: {
    position: 'relative',
    bottom: '5%',
    left: '47%',
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function UserProfile(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [openForm, setOpenForm] = React.useState(false);


  const handleClickOpen = () => {
    setOpenForm(true);
  };

  const handleClose = () => {
    setOpenForm(false);
  };

  const handleChangeTasks = () => {
    alert("Entro MK")
    //localStorage.setItem("name", document.getElementById("nameAct").value);
    //localStorage.setItem("email", document.getElementById("emailAct").value);
    const algo = {name:document.getElementById("nameAct").value,email:document.getElementById("emailAct").value}
    props.fun(algo);
    alert("Seguro no hizo nada")
  };

  return (
    <div>
        <Button  
          startIcon={<PostAddIcon /> }
          color="primary"
          onClick={handleClickOpen}
        >
        </Button>
        <Dialog open={openForm} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit Perfil</DialogTitle>
        <DialogContent>
            <DialogContentText>
               Update the information.
            </DialogContentText>
            <TextField
                required
                autoFocus
                margin="dense"
                id="nameAct"
                label="Full Name"
                variant="outlined"
                type="text"
                fullWidth
            />
            <TextField
                required
                autoFocus
                margin="dense"
                id="emailAct"
                label="Email"
                variant="outlined"
                type="text"
                fullWidth
            />
            <TextField
                required
                autoFocus
                margin="dense"
                id="pass"
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
            />
            <TextField
                required
                autoFocus
                margin="dense"
                id="pass2"
                label="Confirm Password"
                variant="outlined"
                type="password"
                fullWidth
            />
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} color="primary">
            Cancel
            </Button>
            <Button onClick={handleChangeTasks} color="primary">
            Add
            </Button>
        </DialogActions>
        </Dialog>
    </div>
  );
}