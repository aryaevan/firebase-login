import { createStackNavigator } from '@react-navigation/stack';
import LoginSc from '../screens/loginScreen.js';
import WelcomeSC from '../screens/welcomeScreen.js';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginSc} />
      <Stack.Screen name="Home" component={WelcomeSC} />
    </Stack.Navigator>
  );
}