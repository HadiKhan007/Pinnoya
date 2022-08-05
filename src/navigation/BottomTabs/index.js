import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from '../stacks/CustomerStacks/HomeStack';
import {BottomTab} from '../../components';
import FavouriteStack from '../stacks/CustomerStacks/FavouriteStack';
import NotificationStack from '../stacks/CustomerStacks/NotificationStack';
import ProfileStack from '../stacks/CustomerStacks/ProfileStack';

const Tab = createBottomTabNavigator();

const MainFlow = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <BottomTab {...props} />}>
      <Tab.Screen component={HomeStack} name={'Home'} />
      <Tab.Screen component={FavouriteStack} name={'Favourite'} />
      <Tab.Screen component={ProfileStack} name={'Profile'} />
      <Tab.Screen component={NotificationStack} name={'Notification'} />
    </Tab.Navigator>
  );
};

export default MainFlow;
