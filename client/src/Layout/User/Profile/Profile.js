import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Switch, Route } from 'react-router-dom';
import {Setting,Close,Password} from './Components'
import './Profile.css'
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  menu :  {
    fontSize : '1.5rem'
  }
});
const page =  [
  {
    name : 'Account Setting',
    href : '/profile/setting'
  },
  {
    name : 'Change Password',
    href : '/profile/password'
  },
  {
    name : 'Close Account',
    href : '/profile/close'
  },
]
export default function Profile() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = anchor => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {page.map((text, index) => (
          <ListItem button key={index} href={text.href} component='a'>
            <ListItemText primary={text.name}/>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Logout'].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <React.Fragment>
        <div className='mb-4'>  
            <Button onClick={toggleDrawer('left', true)} className={classes.menu}><i className="fa fa-bars mr-3"/>Menu</Button>
            <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
            {list('left')}
            </Drawer>
        </div>
        <div>
            <Switch>
                <Route exact path='/profile/setting' component={()=> <Setting />}/>
                <Route exact path='/profile/password' component={()=> <Password />}/>
                <Route exact path='/profile/close' component={()=> <Close />}/>
            </Switch>
        </div>
    </React.Fragment>
  );
}
