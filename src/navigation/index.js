import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../screens/Splash';
import Walkthrough from '../screens/Walkthrough';
import App from '../navigation/BottomTabs';
import AuthStack from '../navigation/stacks/AuthStack';
import {useReducer, useSelector} from 'react-redux';

const AppStack = createStackNavigator();

const MainAppNav = () => {
  const {userInfo} = useSelector(state => state?.auth);

  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName="AuthStack"
        screenOptions={{headerShown: false}}>
        <AppStack.Screen name={'Splash'} component={Splash} />
        <AppStack.Screen name={'App'} component={App} />
        <AppStack.Screen name={'Auth'} component={AuthStack} />
        {/* <AppStack.Screen name={'Walkthrough'} component={Walkthrough} /> */}
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default MainAppNav;
