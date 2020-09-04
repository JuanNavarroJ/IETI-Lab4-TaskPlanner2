import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Avatar from '@material-ui/core/Avatar';
import PostAddIcon from '@material-ui/icons/PostAdd';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { green,red,yellow} from '@material-ui/core/colors';
import AssignmentIcon from '@material-ui/icons/Assignment';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

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

export default function PersistentDrawerLeft() {
  const [tasks, setTasks] = React.useState([{description:"Implement Login View",status:"In Progress",dueDate:"2020-08-27",responsible:{name:"Juan Navarro",email:"juan.navarro@escuelaing"}},
                {description:"Implement Login Controller",status:"Ready",dueDate:"2020-08-27",responsible:{name:"Juan Navarro",email:"juan.navarro@escuelaing"}},
                {description:"Facebook Integration",status:"Completed",dueDate:"2020-08-27",responsible:{name:"Juan Navarro",email:"juan.navarro@escuelaing"}}]);
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openForm, setOpenForm] = React.useState(false);
  const [state, setState] = React.useState('');
  const colorRojo = red[900];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };  

  const handleClickOpen = () => {
    setOpenForm(true);
  };

  const handleClose = () => {
    setOpenForm(false);
  };

  const handleChangeState = (event) => {
    setState(event.target.value);
  };

  const handleChangeTasks = (newTask) => {
    setTasks(tasks.concat(newTask));
  };

  const handleAdd = () => {
    handleChangeTasks({description:document.getElementById("desc").value,status:state,dueDate:document.getElementById("date").value,responsible:{name:document.getElementById("resp").value}});
    setOpenForm(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Task Planner
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <br/>
        <div>
            <Card className={classes.root1} variant="outlined">
            <br/>
            <Avatar src="/static/images/avatar/1.jpg"/>
                <Typography variant="overline" display="block" color="primary" gutterBottom>
                    Juan David           
                </Typography>
                <Typography variant="caption" display="block" color="primary" gutterBottom>
                    Juan.navarro@mail.escuelaing.edu.co              
                </Typography>
                <Button
                    startIcon={<PostAddIcon /> }>
                </Button>
            </Card>
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Link to="/Login">
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<ExitToAppIcon />}
            >
                <Typography variant="h9">
                    Logout
                </Typography>
            </Button>
        </Link>
        <Divider />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
            <Container maxWidth="lg" className={classes.containerPaper}>
            <Grid container spacing={2} className={classes.actionSpacer}>
              {tasks.map(task => (
                  <Grid key={task} xs={12} sm={6} md={4} lg={5} xl={2} item>
                    <Card className={classes.root1} variant="outlined">
                        <CardContent>
                            <React.Fragment>
                                <Typography component="h2" variant="h6" color="primary" gutterBottom>
                                    {task.description}
                                </Typography>
                                <div>
                                <Typography component="p" variant="h5">
                                    {task.status} <AssignmentIcon className={classes.red}/>
                                </Typography>
                                
                                </div>
                                <Typography color="textSecondary" className={classes.depositContext}>
                                    {task.dueDate}
                                </Typography>
                                <Typography component="p" variant="h9" color="primary">
                                    {task.responsible.name}
                                </Typography>
                            </React.Fragment>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                  </Grid>
              ))}
            </Grid>
            <div>
              <Button 
                className={classes.add}
                color="primary"
                onClick={handleClickOpen}
                startIcon={<AddCircleIcon style={{ fontSize: 70 }}/>}>
              </Button>
              <Dialog open={openForm} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">New Task</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Complete the data of the new task.
                  </DialogContentText>
                    <TextField
                      required
                      autoFocus
                      margin="dense"
                      id="desc"
                      label="Description"
                      variant="outlined"
                      type="text"
                      fullWidth
                    />
                    <InputLabel id="demo-mutiple-name-label">State</InputLabel>
                    <Select
                      required
                      id="stateForm"
                      onChange={handleChangeState}
                      labelId="demo-mutiple-name-label"
                      margin="dense"
                      displayEmpty
                      variant="outlined"
                      fullWidth
                    >
                      <MenuItem value="In Progress">In Progress</MenuItem>
                      <MenuItem value="Ready">Ready</MenuItem>
                      <MenuItem value="Completed">Completed</MenuItem>
                    </Select>
                    <TextField
                      required
                      autoFocus
                      margin="dense"
                      id="date"
                      label="Date"
                      type="date"
                      defaultValue="2020-09-04"
                      fullWidth
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <TextField
                      required
                      autoFocus
                      margin="dense"
                      id="resp"
                      label="Responsible"
                      variant="outlined"
                      type="text"
                      fullWidth
                    />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={handleAdd} color="primary">
                    Add
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
            </Container>            
      </main>
    </div>
  );
}