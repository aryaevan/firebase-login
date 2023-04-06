import { NavigationContainer } from "@react-navigation/native";

import MyStack from './assets/navigations/stackNavigator.js';

export default function App() {
  return(
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
)};