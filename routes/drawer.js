import {createSwitchNavigator, createAppContainer } from 'react-navigation'
import Loading from '../screens/loading'
import SignUp from '../screens/signup'
import Login from '../screens/login'
import Home from '../screens/home'

const screens = {
  Loading:{
    screen:Loading,
  },
  SignUp: {
    screen: SignUp,
  },
  Login:{
    screen: Login,
  },
  Home: {
    screen: Home,
  },
};

const Nav = createSwitchNavigator(screens,{
  initialRouteName:'Loading'  
});

export default createAppContainer(Nav);