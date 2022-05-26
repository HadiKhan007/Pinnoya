import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from '../stacks/CustomerStacks/HomeStack';
import {BottomTab} from '../../components';
import MyBookingStack from '../stacks/CustomerStacks/MyBookingStack';
import NotificationStack from '../stacks/CustomerStacks/NotificationStack';
import ProfileStack from '../stacks/CustomerStacks/ProfileStack';

const Tab = createBottomTabNavigator();

const MainFlow = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <BottomTab {...props} />}>
      <Tab.Screen component={HomeStack} name={'Home'} />
      <Tab.Screen component={MyBookingStack} name={'MyBooking'} />
      <Tab.Screen component={NotificationStack} name={'Notification'} />
      <Tab.Screen component={ProfileStack} name={'Profile'} />
    </Tab.Navigator>
  );
};

export default MainFlow;
