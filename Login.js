import {createStackNavigator,createAppContainer} from 'react-navigation';

import Splash from './Components/Splash';
import Login from './Components/Login';

const App=createStackNavigator({

  Splash: {screen:Splash,navigationOptions:{header:null}},
  Login: {screen:Login, navigationOptions:{header: null}}
});

export default createAppContainer(App);
