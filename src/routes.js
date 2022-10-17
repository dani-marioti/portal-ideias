import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../src/screens/Home'
import Idea from '../src/screens/Idea'
import Login from './screens/Login';
import Tasks from './screens/Tasks';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Idea" component={Idea} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Tasks" component={Tasks} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Routes;