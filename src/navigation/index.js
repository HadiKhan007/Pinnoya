import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../screens/Splash';
import Walkthrough from '../screens/Walkthrough';
import App from '../navigation/BottomTabs';
import AuthStack from '../navigation/stacks/AuthStack';

const AppStack = createStackNavigator();

const MainAppNav = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName="Auth"
        screenOptions={{headerShown: false}}>
        <AppStack.Screen name={'Auth'} component={AuthStack} />
        <AppStack.Screen name={'Splash'} component={Splash} />
        <AppStack.Screen name={'Walkthrough'} component={Walkthrough} />

        <AppStack.Screen name={'App'} component={App} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default MainAppNav;
